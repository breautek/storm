"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class DuplicateEntryError extends StormError_1.StormError {
    constructor(details) {
        super(details);
    }
    getMessage() {
        let details = this.getDetails();
        return `${details.entity} with the name "${details.name}" already exists.`;
    }
    getCode() {
        return ErrorCode_1.ErrorCode.DUPLICATE_ENTRY;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.ERR_BAD_REQUEST;
    }
}
exports.DuplicateEntryError = DuplicateEntryError;
//# sourceMappingURL=DuplicateEntryError.js.map