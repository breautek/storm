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
import * as MySQL from 'mysql';
import {Readable} from 'stream';
import {Query} from './Query';
import { StartTransactionQuery } from './private/StartTransactionQuery';
import { CommitQuery } from './private/CommitQuery';
import { RollbackQuery } from './private/RollbackQuery';
import * as SQLFormatter from 'sql-formatter';

const DEFAULT_HIGH_WATERMARK: number = 512; // in number of result objects
const TAG: string = 'MySQLConnection';

const SQL_FORMATTING_OPTIONS: SQLFormatter.FormatOptions = {
    language: 'mysql',
    indent: '    ',
    uppercase: true
};

let startTransactionQuery: Query = new StartTransactionQuery();
let commitQuery: Query = new CommitQuery();
let rollbackQuery: Query = new RollbackQuery();

export class MySQLConnection extends DatabaseConnection<MySQL.PoolConnection> {
    private _transaction: boolean;
    private _opened: boolean;

    public constructor(connection: MySQL.PoolConnection, instantiationStack: string, isReadOnly: boolean = true) {
        super(connection, isReadOnly, instantiationStack);

        this._opened = true;
        this._transaction = false;

        connection.config.queryFormat = function(query: string, values: any) {
            if (!values) return query;

            return query.replace(/:(\w+)/g, function(this: any, txt: string, key: string): string {
                // eslint-disable-next-line no-prototype-builtins
                if (values.hasOwnProperty(key)) {
                    return this.escape(values[key]);
                }
                return txt;
            }.bind(this));
        };
    }

    public isTransaction(): boolean {
        return this._transaction;
    }

    public isOpen(): boolean {
        return this._opened;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    protected _query(query: string, params?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let queryObject: MySQL.Query = this.getAPI().query({
                sql: query,
                timeout: this.getTimeout()
            }, params, (error: MySQL.MysqlError, results: any) => {
                if (error) {
                    return reject(new DatabaseQueryError(SQLFormatter.format(queryObject.sql, SQL_FORMATTING_OPTIONS), error));
                }

                return resolve(results);
            });
            getInstance().getLogger().trace(TAG, SQLFormatter.format(queryObject.sql, SQL_FORMATTING_OPTIONS));
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

        getInstance().getLogger().trace(TAG, SQLFormatter.format(queryObject.sql, SQL_FORMATTING_OPTIONS));

        return queryObject.stream(streamOptions);
    }

    public startTransaction(): Promise<void> {
        if (this.isReadOnly()) {
            return Promise.reject(new Error('A readonly connection cannot start a transaction.'));
        }

        if (this.isTransaction()) {
            return Promise.reject(new Error('Connection is already in a transaction.'));
        }

        this._transaction = true;

        return new Promise<void>((resolve, reject) => {
            this.query(startTransactionQuery).then(() => {
                resolve();
            }).catch((ex) => {
                this._transaction = false;
                getInstance().getLogger().error(TAG, ex);
                reject(ex);
            });
        });
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
                this._transaction = false
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
                this._transaction = false;
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

        this._opened = false;
        
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
