"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instance_1 = require("./instance");
const StatusCode_1 = require("./StatusCode");
class StormError extends Error {
    constructor(details) {
        super();
        this.details = details;
        const instance = instance_1.getInstance();
        instance.getLogger().error(`${this.getMessage()}... See details below:`);
        instance.getLogger().info(this.getDetails());
    }
    getDetails() {
        return this.details;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.INTERNAL_ERROR;
    }
    getAdditionalDetails() {
        return {};
    }
    getErrorResponse() {
        return {
            message: this.getMessage(),
            code: this.getCode(),
            details: this.getAdditionalDetails()
        };
    }
}
exports.StormError = StormError;
//# sourceMappingURL=StormError.js.map