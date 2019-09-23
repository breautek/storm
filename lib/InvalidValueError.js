"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class InvalidValueError extends StormError_1.StormError {
    constructor(variable, expected, got) {
        super({
            variable: variable,
            expected: expected,
            got: got
        });
    }
    getMessage() {
        let details = this.getPrivateDetails();
        return `Unexpected value for "${details.variable}". Expected ${details.expected} but got "${details.got}".`;
    }
    getCode() {
        return ErrorCode_1.ErrorCode.INVALID_VALUE;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.ERR_BAD_REQUEST;
    }
}
exports.InvalidValueError = InvalidValueError;
//# sourceMappingURL=InvalidValueError.js.map