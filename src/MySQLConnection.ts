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
import {getInstance} from './instance';
import * as MySQL from 'mysql';

class MySQLConnection extends DatabaseConnection<MySQL.PoolConnection> {
    private transaction: boolean;

    public constructor(connection: MySQL.PoolConnection, isReadOnly: boolean = true) {
        super(connection, isReadOnly);

        connection.config.queryFormat = function(query: string, values: any) {
            if (!values) return query;

            return query.replace(/\:(\w+)/g, function(txt: string, key: string): string {
                if (values.hasOwnProperty(key)) {
                    // @ts-ignore
                    return this.escape(values[key]);
                }
                return txt;
            }.bind(this));
        };
    }

    public isTransaction(): boolean {
        return this.transaction;
    }

    public async query(query: string, params?: any): Promise<any> {
        return await new Promise((resolve, reject) => {
            var queryObject: MySQL.Query = this.getAPI().query(query, params, (error: MySQL.MysqlError, results: any) => {
                if (error) {
                    return reject(error);
                }

                return resolve(results);
            });
            getInstance().getLogger().trace(queryObject.sql);
        });
    }

    public async startTransaction(): Promise<void> {
        if (this.isReadOnly()) {
            return Promise.reject(new Error('A readonly connection cannot start a transaction.'));
        }

        if (this.isTransaction()) {
            return Promise.reject(new Error('Connection is already in a transaction.'));
        }

        this.transaction = true;

        return await new Promise<void>((resolve, reject) => {
            try {
                this.query('START TRANSACTION');
                return resolve();
            }
            catch(ex) {
                this.transaction = false;
                getInstance().getLogger().error(ex);
                reject(ex);
            }
        });
    }

    public async endTransaction(requiresRollback: boolean = false): Promise<void> {
        return await (requiresRollback) ? this.rollback() : this.commit();
    }

    public async rollback(): Promise<void> {
        if (!this.isTransaction()) {
            return Promise.reject(new Error('Cannot rollback when there is no active transaction.'));
        }

        return await new Promise<void>((resolve, reject) => {
            try {
                this.query('ROLLBACK');
                return resolve();
            }
            catch(ex) {
                getInstance().getLogger().error(ex);
                return reject(ex);
            }
        });
    }

    public async commit(): Promise<void> {
        if (!this.isTransaction()) {
            return Promise.reject(new Error('Cannot commit when there is no active transaction.'));
        }

        return await new Promise<void>((resolve, reject) => {
            try {
                this.query('COMMIT');
                return resolve();
            }
            catch(ex) {
                getInstance().getLogger().error(ex);
                return reject(ex);
            }
        });
    }

    public async close(): Promise<void> {
        if (this.isTransaction()) {
			return Promise.reject(new Error('Cannot close a connection while there is an active transaction. Use commit or rollback first.'));
        }
        
        return await new Promise<void>((resolve, reject) => {
            this.getAPI().release();
            resolve();
        });
    }
}