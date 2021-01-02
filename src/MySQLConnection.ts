// Copyright (C) 2017  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import {DatabaseConnection} from './DatabaseConnection';
import {DatabaseQueryError} from './DatabaseQueryError';
import {getInstance} from './instance';
import * as MySQL from 'mysql';
import {Readable} from 'stream';
import {Query} from './Query';
import { StartTransactionQuery } from './private/StartTransactionQuery';
import { CommitQuery } from './private/CommitQuery';
import { RollbackQuery } from './private/RollbackQuery';

const DEFAULT_HIGH_WATERMARK: number = 512; // in number of result objects

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
                    return reject(new DatabaseQueryError(queryObject.sql, error));
                }

                return resolve(results);
            });
            getInstance().getLogManager().getLogger(this.constructor.name).trace(queryObject.sql);
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

        getInstance().getLogManager().getLogger(this.constructor.name).trace(queryObject.sql);

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
                getInstance().getLogManager().getLogger(this.constructor.name).error(ex);
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
                getInstance().getLogManager().getLogger(this.constructor.name).error(ex);
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
                getInstance().getLogManager().getLogger(this.constructor.name).error(ex);
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
                getInstance().getLogManager().getLogger(this.constructor.name).error(error);
                this.getAPI().release();
                resolve();
            });
        });
    }
}
