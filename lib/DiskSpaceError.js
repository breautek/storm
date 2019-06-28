"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StormError_1 = require("./StormError");
const ErrorCode_1 = require("./ErrorCode");
const StatusCode_1 = require("./StatusCode");
class DiskSpaceError extends StormError_1.StormError {
    constructor(spaceRequired) {
        super({
            space: spaceRequired
        });
    }
    getMessage() {
        return `Internal Error.`;
    }
    getCode() {
        return ErrorCode_1.ErrorCode.INSUFFICIENT_DISK_SPACE;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.INTERNAL_ERROR;
    }
}
exports.DiskSpaceError = DiskSpaceError;
//# sourceMappingURL=DiskSpaceError.js.map