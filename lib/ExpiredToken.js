"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class ExpiredToken extends StormError_1.StormError {
    constructor(details) {
        super(details);
    }
    getMessage() {
        return `Your login session has expired.`;
    }
    getCode() {
        return ErrorCode_1.ErrorCode.EXPIRED_TOKEN;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.ERR_UNAUTHORIZED;
    }
}
exports.ExpiredToken = ExpiredToken;
//# sourceMappingURL=ExpiredToken.js.map