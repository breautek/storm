"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instance;
var setInstance = (app) => {
    if (instance) {
    }
    instance = app;
};
exports.setInstance = setInstance;
var getInstance = () => {
    return instance;
};
exports.getInstance = getInstance;
//# sourceMappingURL=instance.js.map