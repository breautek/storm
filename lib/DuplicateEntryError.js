"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateEntryError = void 0;
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class DuplicateEntryError extends StormError_1.StormError {
    constructor(entity, name, property = 'name') {
        super({
            entity,
            name,
            property
        });
    }
    getMessage() {
        let details = this.getPrivateDetails();
        return `${details.entity} with the ${details.property} "${details.name}" already exists.`;
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