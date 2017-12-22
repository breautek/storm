"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseConnection {
    constructor(api, isReadOnly) {
        this.api = api;
        this.readOnly = isReadOnly;
    }
    getAPI() {
        return this.api;
    }
    isReadOnly() {
        return this.readOnly;
    }
}
exports.DatabaseConnection = DatabaseConnection;
//# sourceMappingURL=DatabaseConnection.js.map