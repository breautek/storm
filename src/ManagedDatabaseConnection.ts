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
import {IDatabaseConnection} from './IDatabaseConnection';
import {getInstance} from './instance';
import {Readable} from 'stream';

export class ManagedDatabaseConnection implements IDatabaseConnection {
    private _connection: DatabaseConnection;
    /**
     * When true, this class will not close the connection or
     * allow transaction starts or ends. Methods for these actions
     * will be a no-op.
     */
    private _managed: boolean;
    private _requiresWrite: boolean;

    public constructor(requiresWrite: boolean = false) {
        this._managed = false;
        this._requiresWrite = requiresWrite;
    }

    public setConnection(connection: DatabaseConnection): void {
        if (this._connection) {
            // Store original connection because of async,
            // but we don't really need to wait for the async operations
            // to complete to set the new connection object.
            const oldConnection: DatabaseConnection = this._connection;
            if (oldConnection.isTransaction()) {
                getInstance().getLogger().warn('Rolling back a transaction because setConnection was called on a ManagedDatabaseConnection in a progress transaction.');
                oldConnection.rollback().then(() => {
                    oldConnection.close();
                }).catch((error: any) => {
                    getInstance().getLogger().error(error);
                    oldConnection.close(true);
                });
            }
            else {
                oldConnection.close();
            }
        }

        this._connection = connection;
        this._managed = true;
    }

    public isWriteRequired(): boolean {
        return this._requiresWrite;
    }

    public isManaged(): boolean {
        return this._managed;
    }

    public hasConnection(): boolean {
        return !!this._connection;
    }

    public getInstantiationStack(): string {
        if (this.hasConnection()) {
            return this._connection.getInstantiationStack();
        }
        else {
            return null;
        }
    }

    public isReadOnly(): boolean {
        if (this.hasConnection()) {
            return this._connection.isReadOnly();
        }
        else {
            return true;
        }
    }

    public setTimeout(timeout: number): void {
        this._getConnection().then((connection: DatabaseConnection) => {
            connection.setTimeout(timeout);
        });
    }

    public getTimeout(): number {
        if (this.hasConnection()) {
            return this._connection.getTimeout();
        }
        else {
            return null;
        }
    }

    public query(query: string, params?: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this._getConnection().then((connection: DatabaseConnection) => {
                connection.query(query, params).then(resolve).catch(reject);
            }).catch(reject);
        })
    }

    public stream(query: string, params?: any, streamOptions?: any): Readable {
        throw new Error('stream is not supported on Managed Connections');
    }

    public close(forceClose?: boolean): Promise<void> {
        if (this.hasConnection() && !this.isManaged()) {
            return this._connection.close(forceClose);
        }
        else {
            return Promise.resolve();
        }
    }

    public startTransaction(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._getConnection().then((connection: DatabaseConnection) => {
                if (!this.isManaged()) {
                    connection.startTransaction().then(resolve).catch(reject);
                }
                else {
                    resolve();
                }
            }).catch(reject);
        });
    }

    public isTransaction(): boolean {
        if (this.hasConnection()) {
            return this._connection.isTransaction();
        }
        else {
            return false;
        }
    }

    public commit(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._getConnection().then((connection: DatabaseConnection) => {
                if (!this.isManaged()) {
                    connection.commit().then(resolve).catch(reject);
                }
                else {
                    resolve();
                }
            }).catch(reject);
        });
    }

    public rollback(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._getConnection().then((connection: DatabaseConnection) => {
                if (!this.isManaged()) {
                    connection.rollback().then(resolve).catch(reject);
                }
                else {
                    resolve();
                }
            }).catch(reject);
        });
    }

    private _getConnection(): Promise<DatabaseConnection> {
        return new Promise<DatabaseConnection>((resolve, reject) => {
            let promise: Promise<DatabaseConnection> = null;
            
            if (!this._connection) {
                promise = getInstance().getDB().getConnection(this._requiresWrite);
            }
            else {
                promise = Promise.resolve(this._connection);
            }

            promise.then((connection: DatabaseConnection) => {
                this._connection = connection;
                resolve(this._connection);
            }).catch(reject);
        });
    }

    public getAPI(): any {
        if (this.hasConnection()) {
            return this._connection.getAPI();
        }
        else {
            return null;
        }
    }
}
