"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instance_1 = require("./instance");
class ManagedDatabaseConnection {
    constructor(requiresWrite = false) {
        this._managed = false;
        this._requiresWrite = requiresWrite;
        this._instantionStack = new Error().stack;
    }
    setConnection(connection) {
        if (this._connection) {
            const oldConnection = this._connection;
            if (oldConnection.isTransaction()) {
                instance_1.getInstance().getLogger().warn('Rolling back a transaction because setConnection was called on a ManagedDatabaseConnection in a transaction in progress.');
                instance_1.getInstance().getLogger().trace(new Error('Stacktrace'));
                oldConnection.rollback().then(() => {
                    oldConnection.close();
                }).catch((error) => {
                    instance_1.getInstance().getLogger().error(error);
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
    isWriteRequired() {
        return this._requiresWrite;
    }
    isManaged() {
        return this._managed;
    }
    hasConnection() {
        return !!this._connection;
    }
    setInstantiationStack(stack) {
        if (this.hasConnection()) {
            this._connection.setInstantiationStack(stack);
        }
        else {
            this._instantionStack = stack;
        }
    }
    getInstantiationStack() {
        if (this.hasConnection()) {
            return this._connection.getInstantiationStack();
        }
        else {
            return this._instantionStack;
        }
    }
    isReadOnly() {
        if (this.hasConnection()) {
            return this._connection.isReadOnly();
        }
        else {
            return true;
        }
    }
    setTimeout(timeout) {
        this._getConnection().then((connection) => {
            connection.setTimeout(timeout);
        });
    }
    getTimeout() {
        if (this.hasConnection()) {
            return this._connection.getTimeout();
        }
        else {
            return null;
        }
    }
    query(query, params) {
        return new Promise((resolve, reject) => {
            this._getConnection().then((connection) => {
                connection.query(query, params).then(resolve).catch(reject);
            }).catch(reject);
        });
    }
    stream(query, params, streamOptions) {
        throw new Error('stream is not supported on Managed Connections');
    }
    close(forceClose) {
        return new Promise((resolve, reject) => {
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
    startTransaction() {
        return new Promise((resolve, reject) => {
            this._getConnection().then((connection) => {
                if (!this.isManaged()) {
                    connection.startTransaction().then(resolve).catch(reject);
                }
                else {
                    resolve();
                }
            }).catch(reject);
        });
    }
    isTransaction() {
        if (this.hasConnection()) {
            return this._connection.isTransaction();
        }
        else {
            return false;
        }
    }
    commit() {
        return new Promise((resolve, reject) => {
            this._getConnection().then((connection) => {
                if (!this.isManaged()) {
                    connection.commit().then(resolve).catch(reject);
                }
                else {
                    resolve();
                }
            }).catch(reject);
        });
    }
    rollback() {
        return new Promise((resolve, reject) => {
            this._getConnection().then((connection) => {
                if (!this.isManaged()) {
                    connection.rollback().then(resolve).catch(reject);
                }
                else {
                    resolve();
                }
            }).catch(reject);
        });
    }
    _getConnection() {
        return new Promise((resolve, reject) => {
            let promise = null;
            let setInstantationStack = false;
            if (!this._connection) {
                promise = instance_1.getInstance().getDB().getConnection(this._requiresWrite);
                setInstantationStack = true;
            }
            else {
                promise = Promise.resolve(this._connection);
            }
            promise.then((connection) => {
                if (setInstantationStack) {
                    connection.setInstantiationStack(this._instantionStack);
                }
                this._connection = connection;
                resolve(this._connection);
            }).catch(reject);
        });
    }
    getAPI() {
        if (this.hasConnection()) {
            return this._connection.getAPI();
        }
        else {
            return null;
        }
    }
}
exports.ManagedDatabaseConnection = ManagedDatabaseConnection;
//# sourceMappingURL=ManagedDatabaseConnection.js.map