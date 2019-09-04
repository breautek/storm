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
        instance_1.getInstance().getLogger().deprecate('getPrivateDetails()');
        return this.getPrivateDetails();
    }
    getPublicDetails() {
        return {};
    }
    getPrivateDetails() {
        return this.details;
    }
    getHTTPCode() {
        return StatusCode_1.StatusCode.INTERNAL_ERROR;
    }
    getAdditionalDetails() {
        instance_1.getInstance().getLogger().deprecate('getPublicDetails()');
        return this.getPublicDetails();
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