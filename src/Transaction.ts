/*
   Copyright 2017-2023 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { IDatabaseConnection } from './IDatabaseConnection';
import {IQueryable} from './IQueryable';
import { Application } from './Application';
import { IsolationLevel } from './IsolationLevel';
import { InternalError } from './InternalError';
import { DeadLockError } from './DeadLockError';
import { InvalidValueError } from './InvalidValueError';
import { LockWaitTimeoutError } from './LockWaitTimeoutError';
import { TransactionAccessLevel } from './TransactionAccessLevel';

const TAG: string = 'Transaction';

export type ITransactionExecutor = (connection: IDatabaseConnection) => Promise<void>;

/**
 * A class encapsulating an entire transaction from beginning to commitment.
 * 
 * This encapsulates a routine to conduct for the transaction.
 * Should the transaction fail due to a deadlock, the transaction will automatically
 * be tried.
 * 
 * NOTE: It is unsafe to run two transactions on the same connection concurrently.
 * The execution *must* be waited to complete before executing another transaction,
 * on the same connection.
 */
export class Transaction implements IQueryable<void> {
    private $retryLimit: number;
    private $application: Application;
    private $isolationLevel: IsolationLevel;
    private $executor: ITransactionExecutor;
    private $accessLevel: TransactionAccessLevel;

    public constructor(app: Application, executor: ITransactionExecutor, retryLimit: number = Infinity, isolationLevel: IsolationLevel = IsolationLevel.REPEATABLE_READ, accessLevel: TransactionAccessLevel = TransactionAccessLevel.RW) {
        this.$application = app;
        this.$executor = executor;

        if (retryLimit === null || retryLimit === undefined) {
            retryLimit = Infinity;
        }
        else if (retryLimit <= 0) {
            throw new InvalidValueError('retryLimit', 'integer > 0', retryLimit);
        }

        this.$retryLimit = retryLimit;
        this.$isolationLevel = isolationLevel;
        this.$accessLevel = accessLevel;
    }
    
    public async onPreQuery(connection: IDatabaseConnection): Promise<void> {}
    public async onPostQuery(connection: IDatabaseConnection): Promise<void> {}

    public getQuery(connection: IDatabaseConnection): string {
        return null;
    }
    public getParametersForQuery(): Record<string, any> {
        return null;
    }
    public async onPostProcess(connection: IDatabaseConnection, results: any): Promise<void> {
        return null;
    }

    public async execute(connection: IDatabaseConnection): Promise<void> {
        if (connection.isTransaction()) {
            throw new InternalError('Connection must not be in an active transaction. Commit your current transaction first.');
        }

        let attemptCount: number = 0;
        do {
            attemptCount++;
            this.$application.getLogger().trace(TAG, `Starting transaction attempt ${attemptCount} of ${this.$retryLimit === Infinity ? 'Infinity' : this.$retryLimit.toString()}`);
            await connection.startTransaction(this.$isolationLevel, this.$accessLevel);
            try {
                await this.$executor(connection);
                await connection.commit();

                // If we made it here, we can break out of our retry loop
                break;
            }
            catch (ex) {
                if (attemptCount < this.$retryLimit && ex instanceof DeadLockError) {
                    this.$application.getLogger().warn(TAG, `Deadlock received... retrying transaction`);
                }
                else if (attemptCount < this.$retryLimit && ex instanceof LockWaitTimeoutError) {
                    this.$application.getLogger().warn(TAG, `Lock timeout... retrying transaction`);
                    // The server does not auto rollback a timeout (it may be configured to do so, but we will assume that it's not)
                    await connection.rollback();
                }
                else {
                    await connection.rollback();
                    throw ex;
                }
            }
        } while (attemptCount < this.$retryLimit);
    }
}
