"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseConnection_1 = require("./DatabaseConnection");
const DatabaseQueryError_1 = require("./DatabaseQueryError");
const instance_1 = require("./instance");
class MySQLConnection extends DatabaseConnection_1.DatabaseConnection {
    constructor(connection, instantiationStack, isReadOnly = true) {
        super(connection, isReadOnly, instantiationStack);
        this._opened = true;
        this.transaction = false;
        connection.config.queryFormat = function (query, values) {
            if (!values)
                return query;
            return query.replace(/\:(\w+)/g, function (txt, key) {
                if (values.hasOwnProperty(key)) {
                    return this.escape(values[key]);
                }
                return txt;
            }.bind(this));
        };
    }
    isTransaction() {
        return this.transaction;
    }
    isOpen() {
        return this._opened;
    }
    _query(query, params) {
        return new Promise((resolve, reject) => {
            var queryObject = this.getAPI().query({ sql: query, timeout: this.getTimeout() }, params, (error, results) => {
                if (error) {
                    return reject(new DatabaseQueryError_1.DatabaseQueryError(queryObject.sql, error));
                }
                return resolve(results);
            });
            instance_1.getApplicationLogger().trace(queryObject.sql);
        });
    }
    startTransaction() {
        if (this.isReadOnly()) {
            return Promise.reject(new Error('A readonly connection cannot start a transaction.'));
        }
        if (this.isTransaction()) {
            return Promise.reject(new Error('Connection is already in a transaction.'));
        }
        this.transaction = true;
        return new Promise((resolve, reject) => {
            try {
                this.query('START TRANSACTION');
                return resolve();
            }
            catch (ex) {
                this.transaction = false;
                instance_1.getApplicationLogger().error(ex);
                reject(ex);
            }
        });
    }
    endTransaction(requiresRollback = false) {
        return (requiresRollback) ? this.rollback() : this.commit();
    }
    rollback() {
        if (!this.isTransaction()) {
            return Promise.reject(new Error('Cannot rollback when there is no active transaction.'));
        }
        return new Promise((resolve, reject) => {
            try {
                this.query('ROLLBACK');
                this.transaction = false;
                return resolve();
            }
            catch (ex) {
                instance_1.getApplicationLogger().error(ex);
                return reject(ex);
            }
        });
    }
    commit() {
        if (!this.isTransaction()) {
            return Promise.reject(new Error('Cannot commit when there is no active transaction.'));
        }
        return new Promise((resolve, reject) => {
            try {
                this.query('COMMIT');
                this.transaction = false;
                return resolve();
            }
            catch (ex) {
                instance_1.getApplicationLogger().error(ex);
                return reject(ex);
            }
        });
    }
    _close() {
        if (this.isTransaction()) {
            return Promise.reject(new Error('Cannot close a connection while there is an active transaction. Use commit or rollback first.'));
        }
        this._opened = false;
        return new Promise((resolve, reject) => {
            this.getAPI().release();
            resolve();
        });
    }
}
exports.MySQLConnection = MySQLConnection;
//# sourceMappingURL=MySQLConnection.js.map