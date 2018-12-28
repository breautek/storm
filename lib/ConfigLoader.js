"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instance_1 = require("./instance");
const Logger_1 = require("./Logger");
const Path = require("path");
const ExitCode_1 = require("./ExitCode");
class ConfigLoader {
    constructor() { }
    static load(path, argv) {
        var logger = ConfigLoader._getLogger();
        return new Promise((resolve, reject) => {
            logger.trace('Configuration loaded.');
            var config = {};
            var cPath = Path.resolve(path, 'bt-config.json');
            var lPath = Path.resolve(path, 'bt-local-config.json');
            var c;
            var l;
            var defaults;
            logger.trace(`Main Config Path:\t ${cPath}`);
            logger.trace(`Local Config Path:\t ${lPath}`);
            logger.trace('Loading configuration defaults.');
            defaults = require(Path.resolve(__dirname, '../bt-config-defaults.json'));
            logger.trace('Loading main confing...');
            try {
                c = require(cPath);
                logger.trace('Main config loaded.');
            }
            catch (ex) {
                reject(`Missing ${cPath}.`);
                process.nextTick(() => {
                    reject(ExitCode_1.ExitCode.MISSING_CONFIG);
                });
            }
            logger.trace('Loading optional local config.');
            try {
                l = require(lPath);
                logger.trace('Local config loaded.');
            }
            catch (ex) {
                logger.trace('Local config could not be loaded.');
                logger.trace(ex);
            }
            if (l) {
                config = ConfigLoader._mergeConfig(defaults, ConfigLoader._mergeConfig(c, l));
            }
            else {
                config = ConfigLoader._mergeConfig(defaults, c);
            }
            logger.trace('Reading command line arguments...');
            config = ConfigLoader._mergeConfig(config, ConfigLoader._removeNaNs(argv));
            logger.trace('Configurations merged.');
            logger.trace(config);
            resolve(config);
        });
    }
    static _removeNaNs(o) {
        for (var i in o) {
            if (isNaN(o[i])) {
                delete o[i];
            }
        }
        return o;
    }
    static _getLogger() {
        var logger;
        var app = instance_1.getInstance();
        if (app) {
            logger = instance_1.getApplicationLogger();
        }
        if (!logger) {
            logger = new Logger_1.Logger('ConfigLoader');
        }
        return logger;
    }
    static _mergeConfig(o1, o2) {
        var o = o1;
        for (var i in o2) {
            var o1p = o1[i];
            var o2p = o2[i];
            if (o1p && (typeof o2p === 'object') && !(o2p instanceof Array)) {
                if (typeof o1p === 'object' && !(o1p instanceof Array)) {
                    o[i] = ConfigLoader._mergeConfig(o1p, o2p);
                }
                else {
                    o[i] = o2p;
                }
            }
            else {
                o[i] = o2p;
            }
        }
        return o;
    }
}
exports.ConfigLoader = ConfigLoader;
//# sourceMappingURL=ConfigLoader.js.map