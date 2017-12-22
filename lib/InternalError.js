"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class InternalError extends StormError_1.StormError {
    constructor(details) {
        super(details);
    }
    getMessage() {
        return `An internal server error has occured. Please try again.`;
    }
    getCode() {
        return ErrorCode_1.ErrorCode.INTERNAL;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.INTERNAL_ERROR;
    }
}
exports.InternalError = InternalError;
//# sourceMappingURL=InternalError.js.map