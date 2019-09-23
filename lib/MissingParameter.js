"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MissingParameterError_1 = require("./MissingParameterError");
const instance_1 = require("./instance");
class MissingParameter extends MissingParameterError_1.MissingParameterError {
    constructor(parameter) {
        super(parameter);
        instance_1.getInstance().getLogger().deprecateClass('MissingParameter', 'MissingParameterError');
    }
}
exports.MissingParameter = MissingParameter;
//# sourceMappingURL=MissingParameter.js.map