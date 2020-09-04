"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseQueryError = void 0;
const StormError_1 = require("./StormError");
const StatusCode_1 = require("./StatusCode");
class DatabaseQueryError extends StormError_1.StormError {
    constructor(query, error) {
        super({
            query: query,
            error: error
        });
    }
    getMessage() {
        return 'Internal Server Error';
    }
    getCode() {
        return 0;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.INTERNAL_ERROR;
    }
}
exports.DatabaseQueryError = DatabaseQueryError;
//# sourceMappingURL=DatabaseQueryError.js.map