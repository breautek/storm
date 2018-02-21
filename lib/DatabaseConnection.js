"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instance_1 = require("./instance");
const LINGER_WARNING = 10000;
class DatabaseConnection {
    constructor(api, isReadOnly, instantiationStack) {
        this.api = api;
        this.readOnly = isReadOnly;
        this._instantiationStack = instantiationStack;
        this._timeout = 3600000;
        this._armLingerWarning();
    }
    _triggerLingerWarning() {
        instance_1.getApplicationLogger().warn(`Database connection has lingered for ${LINGER_WARNING}ms of inactivity.\n\n${this._instantiationStack}`);
    }
    getInstantiationStack() {
        return this._instantiationStack;
    }
    _armLingerWarning() {
        if (this._lingerTimer) {
            clearTimeout(this._lingerTimer);
        }
        this._lingerTimer = setTimeout(() => {
            this._triggerLingerWarning();
        }, LINGER_WARNING);
    }
    getAPI() {
        return this.api;
    }
    isReadOnly() {
        return this.readOnly;
    }
    setTimeout(timeout) {
        if (isNaN(timeout)) {
            throw new TypeError('setTimeout expects a number in parameter 1.');
        }
        this._timeout = timeout;
    }
    getTimeout() {
        return this._timeout;
    }
    query(query, params) {
        this._armLingerWarning();
        return this._query(query, params);
    }
    close() {
        clearTimeout(this._lingerTimer);
        return this._close();
    }
}
exports.DatabaseConnection = DatabaseConnection;
//# sourceMappingURL=DatabaseConnection.js.map