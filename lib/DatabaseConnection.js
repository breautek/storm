"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseConnection {
    constructor(api, isReadOnly) {
        this.api = api;
        this.readOnly = isReadOnly;
        this._timeout = 3600000;
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
}
exports.DatabaseConnection = DatabaseConnection;
//# sourceMappingURL=DatabaseConnection.js.map