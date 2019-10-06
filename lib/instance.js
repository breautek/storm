"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./Logger");
const LogSeverity_1 = require("./LogSeverity");
let instance;
let genericLogger;
const setInstance = (app) => {
    if (instance) {
        instance.getLogger().warn('Storm application already initialized');
    }
    instance = app;
};
exports.setInstance = setInstance;
const getInstance = () => {
    return instance;
};
exports.getInstance = getInstance;
const getApplicationLogger = () => {
    if (instance) {
        return instance.getLogger();
    }
    else {
        if (!genericLogger) {
            genericLogger = new Logger_1.Logger('Generic');
            genericLogger.info('Using generic logger. Only errors will be reported.');
            genericLogger.setLogLevel(LogSeverity_1.LogSeverity.ERROR | LogSeverity_1.LogSeverity.FATAL);
        }
        return genericLogger;
    }
};
exports.getApplicationLogger = getApplicationLogger;
//# sourceMappingURL=instance.js.map