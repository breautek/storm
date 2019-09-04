"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class EntityNotFoundError extends StormError_1.StormError {
    constructor(name) {
        super({ name: name });
    }
    getMessage() {
        return `${this.getDetails().name} does not exists.`;
    }
    getCode() {
        return ErrorCode_1.ErrorCode.INVALID_VALUE;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.ERR_NOT_FOUND;
    }
}
exports.EntityNotFoundError = EntityNotFoundError;
//# sourceMappingURL=EntityNotFoundError.js.map