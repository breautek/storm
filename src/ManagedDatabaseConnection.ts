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

import {IDatabaseConnection} from './IDatabaseConnection';
import {getInstance} from './instance';
import {Readable} from 'stream';
import { Query } from './Query';

const TAG: string = 'ManagedDatabaseConnection';

export class ManagedDatabaseConnection implements IDatabaseConnection {
    private _connection: IDatabaseConnection;
    /**
     * When true, this class will not close the connection or
     * allow transaction starts or ends. Methods for these actions
     * will be a no-op.
     */
    private _managed: boolean;

    private _requiresWrite: boolean;
    private _instantionStack: string;

    public constructor(requiresWrite: boolean = false) {
        this._managed = false;
        this._requiresWrite = requiresWrite;
        this._instantionStack = new Error().stack;
    }

    public setConnection(connection: IDatabaseConnection): void {
        if (this._connection) {
            // Store original connection because of async,
            // but we don't really need to wait for the async operations
            // to complete to set the new connection object.
            let oldConnection: IDatabaseConnection = this._connection;

            /**
             * If the old connection has a transaction, only care about it
             * if this particular instance of managed connections has write access.
             */
            if (this._requiresWrite && oldConnection.isTransaction()) {
                getInstance().getLogger().warn(TAG, 'Rolling back a transaction because setConnection was called on a ManagedDatabaseConnection in a transaction in progress.');
                getInstance().getLogger().trace(TAG, new Error('Stacktrace'));
                oldConnection.rollback().then(() => {
                    oldConnection.close();
                }).catch((error: any) => {
                    getInstance().getLogger().error(TAG, error);
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

    public isClosed(): boolean {
        if (this._connection) {
            return this._connection.isClosed();
        }
        else {
            return true;
        }
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

    public setInstantiationStack(stack: string): void {
        if (this.hasConnection()) {
            this._connection.setInstantiationStack(stack);
        }
        else {
            this._instantionStack = stack;
        }
    }

    public getInstantiationStack(): string {
        if (this.hasConnection()) {
            return this._connection.getInstantiationStack();
        }
        else {
            return this._instantionStack;
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
        this._getConnection().then((connection: IDatabaseConnection) => {
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

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public query(query: string | Query, params?: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this._getConnection().then((connection: IDatabaseConnection) => {
                connection.query(query, params).then(resolve).catch(reject);
            }).catch(reject);
        })
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public stream(query: string | Query, params?: any, streamOptions?: any): Readable {
        throw new Error('stream is not supported on Managed Connections');
    }

    public close(forceClose?: boolean): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (this.hasConnection() && !this.isManaged()) {
                this._connection.close(forceClose).then(() => {
                    this._connection = null;
                    this._managed = false;
                    resolve();
                }).catch(reject);
            }
            else {
                resolve();
            }
        });
    }

    public startTransaction(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._getConnection().then((connection: IDatabaseConnection) => {
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
            this._getConnection().then((connection: IDatabaseConnection) => {
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
            this._getConnection().then((connection: IDatabaseConnection) => {
                if (!this.isManaged()) {
                    connection.rollback().then(resolve).catch(reject);
                }
                else {
                    resolve();
                }
            }).catch(reject);
        });
    }

    private _getConnection(): Promise<IDatabaseConnection> {
        return new Promise<IDatabaseConnection>((resolve, reject) => {
            let promise: Promise<IDatabaseConnection> = null;
            let shouldSetInstantationStack: boolean = false;
            if (!this._connection) {
                promise = getInstance().getDB().getConnection(this._requiresWrite);
                shouldSetInstantationStack = true;
            }
            else {
                promise = Promise.resolve(this._connection);
            }

            promise.then((connection: IDatabaseConnection) => {
                if (shouldSetInstantationStack) {
                    connection.setInstantiationStack(this._instantionStack);
                }
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
