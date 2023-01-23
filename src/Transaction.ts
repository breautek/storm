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

import {TransactionStep} from './TransactionStep';
import { IDatabaseConnection } from './IDatabaseConnection';
import {IQueryable} from './IQueryable';
import { RollbackQuery } from './private/RollbackQuery';
import { StartTransactionQuery } from './private/StartTransactionQuery';
import { CommitQuery } from './private/CommitQuery';
import { Application } from './Application';
import {Query} from './Query';
import { IsolationLevel } from './IsolationLevel';
import { SetIsolationLevelQuery } from './private/SetIsolationLevelQuery';
import { InternalError } from './InternalError';
import { DeadLockError } from './DeadLockError';
import { InvalidValueError } from './InvalidValueError';

const TAG: string = 'Transaction';

/**
 * A class encapsulating an entire transaction from beginning to commitment.
 * 
 * This encapsulates a series of Query steps to conduct for the transaction.
 * Should the transaction fail due to a deadlock, the transaction will automatically
 * 
 */
export class Transaction implements IQueryable<void> {
    private $steps: Array<TransactionStep>;
    private $retryLimit: number;
    private $application: Application;
    private $isolationLevel: IsolationLevel;

    public constructor(app: Application, retryLimit: number = Infinity, isolationLevel: IsolationLevel = IsolationLevel.REPEATABLE_READ) {
        this.$application = app;
        this.$steps = [];

        if (retryLimit === null || retryLimit === undefined) {
            retryLimit = Infinity;
        }
        else if (retryLimit <= 0) {
            throw new InvalidValueError('retryLimit', 'integer > 0', retryLimit);
        }

        this.$retryLimit = retryLimit;
        this.$isolationLevel = isolationLevel;
    }

    public addStep(query: Query): void {
        this.$steps.push(new TransactionStep(query));
    }
    
    public async onPreQuery(connection: IDatabaseConnection): Promise<void> {}

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
            this.$application.getLogger().info(TAG, `Starting transaction attempt ${attemptCount} of ${this.$retryLimit === Infinity ? 'Infinity' : this.$retryLimit.toString()}`);
            await new SetIsolationLevelQuery(this.$isolationLevel).execute(connection);
            await new StartTransactionQuery().execute(connection);
            try {
                for (let i: number = 0; i < this.$steps.length; i++) {
                    let step: TransactionStep = this.$steps[i];
                    await step.execute(connection);
                }
                await new CommitQuery().execute(connection);

                // If we made it here, we can break out of our retry loop
                break;
            }
            catch (ex) {
                if (ex instanceof DeadLockError) {
                    this.$application.getLogger().warn(TAG, `Deadlock received... retrying transaction`);
                }
                else {
                    await new RollbackQuery().execute(connection);
                    throw ex;
                }
            }
        } while (attemptCount < this.$retryLimit);
    }
}
