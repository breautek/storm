"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./Logger");
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
var getApplicationLogger = () => {
    if (instance) {
        return instance.getLogger();
    }
    else {
        return new Logger_1.Logger('Generic');
    }
};
exports.getApplicationLogger = getApplicationLogger;
//# sourceMappingURL=instance.js.map