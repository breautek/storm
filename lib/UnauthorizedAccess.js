"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class UnauthorizedAccess extends StormError_1.StormError {
    constructor(userToken) {
        super(userToken);
    }
    getMessage() {
        return `Access Denied.`;
    }
    getCode() {
        return ErrorCode_1.ErrorCode.UNAUTHORIZED_ACCESS;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.ERR_FORBIDDEN;
    }
}
exports.UnauthorizedAccess = UnauthorizedAccess;
//# sourceMappingURL=UnauthorizedAccess.js.map