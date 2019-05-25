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
import {getInstance, getApplicationLogger} from './instance';
import * as MySQL from 'mysql';

// const LINGER_WARN_TIMER: number = 60000;

export class MySQLConnection extends DatabaseConnection {
    private transaction: boolean;
    private _opened: boolean;
    private _lingeringWarning: NodeJS.Timer;

    public constructor(connection: MySQL.PoolConnection, instantiationStack: string, isReadOnly: boolean = true) {
        super(connection, isReadOnly, instantiationStack);

        this._opened = true;
        this.transaction = false;

        connection.config.queryFormat = function(query: string, values: any) {
            if (!values) return query;

            return query.replace(/\:(\w+)/g, function(this: any, txt: string, key: string): string {
                if (values.hasOwnProperty(key)) {
                    return this.escape(values[key]);
                }
                return txt;
            }.bind(this));
        };
    }

    public isTransaction(): boolean {
        return this.transaction;
    }

    public isOpen(): boolean {
        return this._opened;
    }

    protected _query(query: string, params?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            var queryObject: MySQL.Query = this.getAPI().query({
                sql: query,
                timeout: this.getTimeout()
            }, params, (error: MySQL.MysqlError, results: any) => {
                if (error) {
                    return reject(new DatabaseQueryError(queryObject.sql, error));
                }

                return resolve(results);
            });
            getApplicationLogger().trace(queryObject.sql);
        });
    }

    public startTransaction(): Promise<void> {
        if (this.isReadOnly()) {
            return Promise.reject(new Error('A readonly connection cannot start a transaction.'));
        }

        if (this.isTransaction()) {
            return Promise.reject(new Error('Connection is already in a transaction.'));
        }

        this.transaction = true;

        return new Promise<void>((resolve, reject) => {
            try {
                this.query('START TRANSACTION');
                return resolve();
            }
            catch (ex) {
                this.transaction = false;
                getApplicationLogger().error(ex);
                reject(ex);
            }
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
            try {
                this.query('ROLLBACK');
                this.transaction = false;
                return resolve();
            }
            catch (ex) {
                getApplicationLogger().error(ex);
                return reject(ex);
            }
        });
    }

    public commit(): Promise<void> {
        if (!this.isTransaction()) {
            return Promise.reject(new Error('Cannot commit when there is no active transaction.'));
        }

        return new Promise<void>((resolve, reject) => {
            try {
                this.query('COMMIT');
                this.transaction = false;
                return resolve();
            }
            catch (ex) {
                getApplicationLogger().error(ex);
                return reject(ex);
            }
        });
    }

    protected _close(forceClose: boolean): Promise<void> {
        if (!forceClose && this.isTransaction()) {
            return Promise.reject(new Error('Cannot close a connection while there is an active transaction. Use commit or rollback first.'));
        }

        this._opened = false;
        
        return new Promise<void>((resolve, reject) => {
            var rollbackPromise: Promise<void> = null;
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
                getInstance().getLogger().error(error);
                this.getAPI().release();
                resolve();
            });
        });
    }
}
