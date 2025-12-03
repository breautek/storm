/*
   Copyright 2017-2021 Norman Breau

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

import {DatabaseConnection} from './DatabaseConnection';
import {DatabaseQueryError} from './DatabaseQueryError';
import {getInstance} from './instance';
import * as MySQL from 'mysql2';
import {Readable} from 'stream';
import { StartTransactionQuery } from './private/StartTransactionQuery';
import { CommitQuery } from './private/CommitQuery';
import { RollbackQuery } from './private/RollbackQuery';
import * as SQLFormatter from 'sql-formatter';
import { BaseLogger } from '@arashi/logger';
import {LogLevel} from '@arashi/interfaces';
import { StormError } from './StormError';
import { DeadLockError } from './DeadLockError';
import { IsolationLevel } from './IsolationLevel';
import {SetIsolationLevelQuery} from './private/SetIsolationLevelQuery';
import { LockWaitTimeoutError } from './LockWaitTimeoutError';
import { IDatabasePosition } from './IDatabasePosition';
import { GetBinLogPositionQuery } from './private/GetBinLogPositionQuery';
import { GetSlavePositionQuery } from './private/GetSlavePositionQuery';
import { GetMasterPositionQuery } from './private/GetMasterPositionQuery';
import { IQueryable } from './IQueryable';
import { TransactionAccessLevel } from './TransactionAccessLevel';
import { GetProcessList, IGetProcessListOutput } from './private/GetProcessList';
import { GetMySQLVersion, IGetMySQLVersionResult } from './GetMySQLVersion';
import { GetPrimaryPositionQuery } from './private/GetPrimaryPositionQuery';
import { queryFormatter } from './mysql/queryFormatter';

const DEFAULT_HIGH_WATERMARK: number = 512; // in number of result objects
const TAG: string = 'MySQLConnection';

const SQL_FORMATTING_OPTIONS: SQLFormatter.FormatOptions = {
    tabWidth: 4,
    keywordCase: 'upper',
    identifierCase: 'preserve',
    useTabs: false,
    indentStyle: 'standard',
    logicalOperatorNewline: 'after',
    linesBetweenQueries: 1,
    denseOperators: false,
    newlineBeforeSemicolon: false,
    expressionWidth: 4,
    dataTypeCase: 'upper',
    functionCase: 'upper'
};

let commitQuery: CommitQuery = new CommitQuery();
let rollbackQuery: RollbackQuery = new RollbackQuery();

export class MySQLConnection extends DatabaseConnection<MySQL.PoolConnection> {
    private $transaction: boolean;
    private $opened: boolean;
    private $hasReplicationEnabled: boolean;
    private $isMasterConnection: boolean;
    private $version: IGetMySQLVersionResult;

    public constructor(connection: MySQL.PoolConnection, instantiationStack: string, isReadOnly: boolean = true) {
        connection.config.namedPlaceholders = true;

        if (!getInstance().getConfig().enableMySQL2BreakingChanges) {
            connection.config.typeCast = function (field: MySQL.TypeCastField, next: MySQL.TypeCastNext): any {
                // TODO: Expose a setting to opt out of these backwards-compatibility type casting
                // So we can have a chance of a rolling refactor.
                if (
                    [
                        'DECIMAL',
                        'NEWDECIMAL',
                        'DOUBLE'
                    ].indexOf(field.type) > -1
                ) {
                    let parsed: number = parseFloat(field.string('utf-8'));
                    if (isNaN(parsed)) {
                        return null;
                    }
                    return parsed;
                }
                else if (
                    ([
                        'JSON'
                    ]).indexOf(field.type) > -1
                ) {
                    return field.string('utf-8');
                }
                else {
                    return next();
                }
            };
        }

        super(connection, isReadOnly, instantiationStack);

        this.$hasReplicationEnabled = false;
        this.$opened = true;
        this.$transaction = false;
        this.$isMasterConnection = null;
    }

    /**
     * @internal - Do not use in application code
     */
    public async __internal_init(): Promise<void> {
        let result = await new GetSlavePositionQuery().execute(this);
        if (result !== null) {
            this.$hasReplicationEnabled = true;
            this.$isMasterConnection = false;
        }
        else {
            this.$isMasterConnection = true;
            let processList: IGetProcessListOutput[] = await new GetProcessList().execute(this);

            for (let i: number = 0; i < processList.length; i++) {
                let p: IGetProcessListOutput = processList[i];

                if (p.Command === 'Binlog Dump') {
                    this.$hasReplicationEnabled = true;
                    break;
                }
            }
        }
    }

    public async getVersion(): Promise<IGetMySQLVersionResult> {
        if (!this.$version) {
            this.$version = await new GetMySQLVersion().execute(this);
        }

        return {...this.$version};
    }

    public override formatQuery(query: IQueryable<any>): string {
        return this.getAPI().format(query.getQuery(this), query.getParametersForQuery());
    }

    /**
     * Returns true if this server is the source.
     * Will also return true if there is no replication detected.
     */
    public isMaster(): boolean {
        return this.$isMasterConnection;
    }

    /**
     * Returns true if this server is part of a replication cluster.
     */
    public hasReplicationEnabled(): boolean {
        return this.$hasReplicationEnabled;
    }

    /**
     * Returns true if this server is a replication server.
     */
    public isReplication(): boolean {
        return !this.isMaster();
    }

    public isTransaction(): boolean {
        return this.$transaction;
    }

    public isOpen(): boolean {
        return this.$opened;
    }

    public override async getCurrentDatabasePosition(): Promise<IDatabasePosition> {
        let version: IGetMySQLVersionResult = await this.getVersion();
        let statusQuery: GetBinLogPositionQuery = null;

        if (
            (version.major === 8 && version.minor >= 4) || version.major >= 9
        ) {
            // >= 8.4 we need to use a different setof master/slave queries
            statusQuery = this.isReplication() ? new GetSlavePositionQuery() : new GetPrimaryPositionQuery();
        }
        else {
            statusQuery = this.isReplication() ? new GetSlavePositionQuery() : new GetMasterPositionQuery();
        }

        return await statusQuery.execute(this);
    }

    protected _query(query: string, params?: any): Promise<any> {
        let logger: BaseLogger = getInstance().getLogger();

        // MySQL2 doesn't seem to be reliable for their named parameter support,
        // so we will fall back to our original implementation, but prep the query
        // string manually via queryFormatter (which makes use of MySQL.escape).
        // This means we won't use the params argument on the main query call.

        let preparedQuery: string = queryFormatter(query, params);

        return new Promise((resolve, reject) => {
            let queryObject: MySQL.Query = this.getAPI().query({
                sql: preparedQuery,
                timeout: this.getTimeout()
            }, null, (error: MySQL.QueryError, results: any) => {
                if (error) {
                    let sql: string = queryObject.sql;
                    // Formatting queries can be an expensive task, so only do it if the log level is actually silly.
                    if (logger.getLogLevel() === LogLevel.SILLY) {
                        try {
                            // SQLFormatter doesn't understand all MySQL syntaxes, so this is to prevent
                            // potentially valid queries from becoming errors simply because we couldn't
                            // log them.
                            sql = SQLFormatter.formatDialect(preparedQuery, {
                                ...SQL_FORMATTING_OPTIONS,
                                dialect: SQLFormatter.mysql
                            });
                        }
                        catch (ex) {
                            logger.warn(TAG, 'Unable to format query...');
                            logger.warn(TAG, ex);
                        }
                    }

                    let e: StormError = null;
                    if (error.code === 'ER_LOCK_DEADLOCK') {
                        e = new DeadLockError(sql, error);
                        // When deadlocks occur, the transaction is automatically rollback, so we can clear transanction status.
                        this.$transaction = false;
                    }
                    else if (error.code === 'ER_LOCK_WAIT_TIMEOUT') {
                        // lock wait may not rollback the transaction (depends on how the server is configured)
                        // however the transaction is retryable. The user shall configure
                        // if they want to retry on timeouts.
                        e = new LockWaitTimeoutError(sql, error);
                    }
                    else {
                        e = new DatabaseQueryError(sql, error);
                    }
                    return reject(e);
                }

                return resolve(results);
            });

            // Formatting queries can be an expensive task, so only do it if the log level is actually silly.
            let sql: string = queryObject.sql;
            if (logger.getLogLevel() === LogLevel.SILLY) {
                sql = SQLFormatter.format(queryObject.sql, SQL_FORMATTING_OPTIONS);
            }

            getInstance().getLogger().trace(TAG, sql);
        });
    }

    protected _stream(query: string, params?: any, streamOptions?: any): Readable {
        if (!streamOptions) {
            streamOptions = {};
        }

        if (!streamOptions.highWatermark) {
            streamOptions.highWatermark = DEFAULT_HIGH_WATERMARK;
        }

        let queryObject: MySQL.Query = this.getAPI().query({
            sql: query,
            timeout: this.getTimeout()
        }, params);

        let logger: BaseLogger = getInstance().getLogger();
        if (logger.getLogLevel() === LogLevel.SILLY) {
            getInstance().getLogger().trace(TAG, SQLFormatter.format(queryObject.sql, SQL_FORMATTING_OPTIONS));
        }

        return queryObject.stream(streamOptions);
    }

    public override async startTransaction(isolationLevel?: IsolationLevel, accessLevel: TransactionAccessLevel = TransactionAccessLevel.RW): Promise<void> {
        if (this.isReadOnly() && accessLevel === TransactionAccessLevel.RW) {
            throw new Error('A readonly connection cannot start a read/write transaction.')
        }

        if (this.isTransaction()) {
            throw new Error('Connection is already in a transaction.');
        }

        this.$transaction = true;

        try {
            if (isolationLevel) {
                await new SetIsolationLevelQuery(isolationLevel).execute(this);
            }
            await new StartTransactionQuery({
                accessLevel: accessLevel
            }).execute(this);
        }
        catch (ex) {
            this.$transaction = false;
            getInstance().getLogger().error(TAG, ex);
            throw ex;
        }
    }

    public endTransaction(requiresRollback: boolean = false): Promise<void> {
        return (requiresRollback) ? this.rollback() : this.commit();
    }

    public rollback(): Promise<void> {
        if (!this.isTransaction()) {
            return Promise.reject(new Error('Cannot rollback when there is no active transaction.'));
        }

        return new Promise<void>((resolve, reject) => {
            this.query(rollbackQuery).then(() => {
                this.$transaction = false
                resolve();
            }).catch((ex: any) => {
                getInstance().getLogger().error(TAG, ex);
                reject(ex);
            });
        });
    }

    public commit(): Promise<void> {
        if (!this.isTransaction()) {
            return Promise.reject(new Error('Cannot commit when there is no active transaction.'));
        }

        return new Promise<void>((resolve, reject) => {
            this.query(commitQuery).then(() => {
                this.$transaction = false;
                resolve();
            }).catch((ex: any) => {
                getInstance().getLogger().error(TAG, ex);
                reject(ex);
            });
        });
    }

    protected _close(forceClose: boolean): Promise<void> {
        if (!forceClose && this.isTransaction()) {
            return Promise.reject(new Error('Cannot close a connection while there is an active transaction. Use commit or rollback first.'));
        }

        this.$opened = false;
        
        return new Promise<void>((resolve, reject) => {
            let rollbackPromise: Promise<void> = null;
            if (forceClose) {
                if (this.isTransaction()) {
                    rollbackPromise = this.rollback();
                }
                else {
                    rollbackPromise = Promise.resolve();
                }
            }
            else {
                rollbackPromise = Promise.resolve();
            }

            rollbackPromise.then(() => {
                this.getAPI().release();
                resolve();
            }).catch((error: any) => {
                getInstance().getLogger().error(TAG, error);
                this.getAPI().release();
                resolve();
            });
        });
    }
}
