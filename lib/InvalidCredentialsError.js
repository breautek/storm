"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialsError = void 0;
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class InvalidCredentialsError extends StormError_1.StormError {
    constructor(details) {
        super(details);
    }
    getMessage() {
        return `Username or password is incorrect. Please check your username and password.`;
    }
    getCode() {
        return ErrorCode_1.ErrorCode.INVALID_CREDENTIALS;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.ERR_UNAUTHORIZED;
    }
}
exports.InvalidCredentialsError = InvalidCredentialsError;
//# sourceMappingURL=InvalidCredentialsError.js.map