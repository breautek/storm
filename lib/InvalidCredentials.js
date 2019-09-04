"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class InvalidCredentials extends StormError_1.StormError {
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
exports.InvalidCredentials = InvalidCredentials;
//# sourceMappingURL=InvalidCredentials.js.map