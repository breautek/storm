"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StormError = void 0;
const instance_1 = require("./instance");
const StatusCode_1 = require("./StatusCode");
class StormError extends Error {
    constructor(details) {
        super();
        this.details = details;
        const instance = instance_1.getInstance();
        instance.getLogger().error(`${this.getMessage()}... See details below:`);
        instance.getLogger().info(this.getPrivateDetails());
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
    getErrorResponse() {
        let details = null;
        if (this['getAdditionalDetails']) {
            instance_1.getInstance().getLogger().deprecate('getPublicDetails', `${this.constructor.name}.getAdditionalDetails()`);
            details = this['getAdditionalDetails']();
        }
        else {
            details = this.getPublicDetails();
        }
        return {
            name: this.constructor.name,
            message: this.getMessage(),
            code: this.getCode(),
            details: details
        };
    }
}
exports.StormError = StormError;
//# sourceMappingURL=StormError.js.map