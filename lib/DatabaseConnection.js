"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instance_1 = require("./instance");
const Query_1 = require("./Query");
exports.LINGER_WARNING = 10000;
exports.DEFAULT_QUERY_TIMEOUT = 3600000;
class DatabaseConnection {
    constructor(api, isReadOnly, instantiationStack) {
        this.api = api;
        this.readOnly = isReadOnly;
        this._instantiationStack = (instantiationStack || '').replace(/Error:/, 'Warning:');
        this._timeout = instance_1.getInstance().getConfig().query_timeout;
        if (isNaN(this._timeout)) {
            this._timeout = exports.DEFAULT_QUERY_TIMEOUT;
        }
        this._armLingerWarning();
    }
    _triggerLingerWarning() {
        instance_1.getApplicationLogger().warn(`Database connection has lingered for ${exports.LINGER_WARNING}ms of inactivity.\n\n${this._instantiationStack}`);
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
        }, exports.LINGER_WARNING);
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
        let queryStr = null;
        if (query instanceof Query_1.Query) {
            queryStr = query.getQuery();
            params = query.getParameters();
        }
        else {
            instance_1.getInstance().getLogger().deprecateParameterType(1, 'string', 'Query instance');
            queryStr = query;
        }
        return this._query(queryStr, params);
    }
    stream(query, params, streamOptions) {
        this._armLingerWarning();
        return this._stream(query, params, streamOptions);
    }
    close(forceClose = false) {
        clearTimeout(this._lingerTimer);
        return this._close(forceClose);
    }
}
exports.DatabaseConnection = DatabaseConnection;
//# sourceMappingURL=DatabaseConnection.js.map