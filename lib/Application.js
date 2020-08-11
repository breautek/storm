"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const instance_1 = require("./instance");
const Logger_1 = require("./Logger");
const LogSeverity_1 = require("./LogSeverity");
const ApplicationEvent_1 = require("./ApplicationEvent");
const Request_1 = require("./Request");
const Response_1 = require("./Response");
const ConfigLoader_1 = require("./ConfigLoader");
const Commander = require("commander");
const Express = require("express");
const BodyParser = require("body-parser");
const http = require("http");
require('source-map-support').install();
const DEFAULT_LOG_LEVEL = LogSeverity_1.LogSeverity.INFO | LogSeverity_1.LogSeverity.WARNING | LogSeverity_1.LogSeverity.ERROR | LogSeverity_1.LogSeverity.FATAL;
class Application extends events_1.EventEmitter {
    constructor(name, configPath, logSeverity) {
        super();
        instance_1.setInstance(this);
        this._isTestEnvironment = false;
        this.$buildArgOptions();
        if (global.jasmine) {
            this._isTestEnvironment = true;
        }
        this._program.parse(process.argv);
        this.name = name;
        this.logger = this._createLogger();
        if (logSeverity) {
            this._logConfigDefaulting = false;
            this.getLogger().setLogLevel(logSeverity);
        }
        else {
            this._logConfigDefaulting = true;
            this.getLogger().setLogLevel(this._getDefaultLogLevel());
        }
        process.on('unhandledRejection', (error) => {
            this.getLogger().fatal(error);
        });
        this.configPath = configPath || process.cwd();
        this.getLogger().trace('Application is booting...');
        this.getLogger().trace('Loading Configuration...');
        this._load();
    }
    _load() {
        this.loadConfig(this.configPath).then((config) => {
            this.config = config;
            this.getLogger().trace('Configuration loaded.');
            this.emit(ApplicationEvent_1.ApplicationEvent.CONFIG_LOADED);
            this.onConfigLoad(this.config);
            return Promise.resolve();
        }).then(() => {
            if (this._logConfigDefaulting) {
                let logSeverity = this._parseLogLevelConfig(this.getConfig());
                this.logger.setLogLevel(logSeverity);
            }
            this.logger.loadFilters();
            this.getLogger().trace('Initializing DB...');
            return this.initDB(this.getConfig());
        }).then((db) => {
            if (db) {
                this.getLogger().trace('DB Initialized.');
            }
            else {
                this.getLogger().trace('DB is not initialized.');
            }
            this.db = db;
            return Promise.resolve();
        }).then(() => {
            this.getLogger().trace('Starting server...');
            this.server = Express();
            this.server.use(BodyParser.json({
                type: 'application/json',
                limit: this.getRequestSizeLimit()
            }));
            this.server.use(BodyParser.text({
                type: 'text/*',
                limit: this.getRequestSizeLimit()
            }));
            return Promise.resolve();
        }).then(() => {
            this.getLogger().trace('Attaching handlers...');
            return this.attachHandlers();
        }).then(() => {
            this.onBeforeReady();
            let bindingIP = this.getConfig().binding_ip;
            let port = this.getConfig().port;
            if (bindingIP !== null && bindingIP !== 'null') {
                if (this.shouldListen()) {
                    this.socket = http.createServer(this.server);
                    this.socket.listen(port, bindingIP, () => {
                        this.getLogger().trace(`Server started on ${bindingIP}:${this.getPort()}`);
                    });
                }
                else {
                    this.getLogger().trace('Server did not bind because shouldListen() returned false.');
                }
            }
            else {
                this.getLogger().info(`Server does not have a bounding IP set. The server will not be listening for connections.`);
            }
            this.onReady();
            this.emit('ready');
        }).catch((error) => {
            this.getLogger().fatal(error);
        });
    }
    getPort() {
        let port = null;
        if (this.socket && this.socket.listening) {
            let address = this.socket.address();
            if (typeof address !== 'string') {
                port = address.port;
            }
        }
        return port;
    }
    $buildArgOptions() {
        this._program = Commander;
        let pkg = require('../package.json');
        this._program.version(pkg.version, '-v, --version');
        this._program.option('--port <port>', 'The running port to consume');
        this._program.option('--binding <ip>', 'The binding IP to listen on');
        this._program.option('--authentication_header', 'The header name of the authentication token');
        this._buildArgOptions(this._program);
    }
    _buildArgOptions(program) { }
    getProgram() {
        return this._program;
    }
    getRequestSizeLimit() {
        return this.getConfig().request_size_limit;
    }
    attachHandler(path, HandlerClass) {
        let handler = new HandlerClass(this);
        this.server.get(path, (request, response) => {
            let r = new Request_1.Request(request);
            handler.get(r, new Response_1.Response(response, r.getURL()));
        });
        this.server.post(path, (request, response) => {
            let r = new Request_1.Request(request);
            handler.post(r, new Response_1.Response(response, r.getURL()));
        });
        this.server.put(path, (request, response) => {
            let r = new Request_1.Request(request);
            handler.put(r, new Response_1.Response(response, r.getURL()));
        });
        this.server.delete(path, (request, response) => {
            let r = new Request_1.Request(request);
            handler.delete(r, new Response_1.Response(response, r.getURL()));
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            if (this.socket && this.socket.listening) {
                this.socket.close(() => {
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }
    loadConfig(path) {
        return new Promise((resolve, reject) => {
            ConfigLoader_1.ConfigLoader.load(path).then((config) => {
                resolve(config);
            }).catch((exitCode) => {
                process.exit(exitCode);
            });
        });
    }
    getName() {
        return this.name;
    }
    setLogger(logger) {
        this.logger = logger;
    }
    getLogger() {
        return this.logger;
    }
    getConfig() {
        return this.config;
    }
    shouldListen() {
        return true;
    }
    onConfigLoad(config) { }
    setTokenManager(tokenManager) {
        this.tokenManager = tokenManager;
    }
    getTokenManager() {
        return this.tokenManager;
    }
    getDB() {
        return this.db;
    }
    getCmdLineArgs() {
        let program = this._program;
        let o = {};
        if (!program) {
            return o;
        }
        if (program.binding !== undefined) {
            o.binding_ip = program.binding;
        }
        if (program.port !== undefined) {
            o.port = program.port;
        }
        if (program.authenticationHeader !== undefined) {
            o.authentication_header = program.authenticationHeader;
        }
        return o;
    }
    initDB(config) {
        return Promise.resolve(null);
    }
    _createLogger() {
        return new Logger_1.Logger(this.getName());
    }
    _getDefaultLogLevel() {
        return DEFAULT_LOG_LEVEL;
    }
    _parseLogLevelConfig(config) {
        let llConfig = config.log_level;
        let severity = null;
        if (!llConfig) {
            return null;
        }
        llConfig = llConfig.toLowerCase().trim();
        if (llConfig.indexOf('all') > -1) {
            return LogSeverity_1.LogSeverity.ALL;
        }
        if (llConfig.indexOf('|') === -1) {
            severity = this._llStrToSeverity(llConfig);
        }
        else {
            let llParts = llConfig.split('|');
            for (let i = 0; i < llParts.length; i++) {
                let llPart = llParts[i];
                llPart = llPart.trim();
                if (llPart === '') {
                    continue;
                }
                let llSev = this._llStrToSeverity(llPart);
                if (!llSev) {
                    continue;
                }
                if (!severity) {
                    severity = llSev;
                }
                else {
                    severity = severity | llSev;
                }
            }
        }
        return severity;
    }
    _llStrToSeverity(ll) {
        switch (ll) {
            case 'all':
                return LogSeverity_1.LogSeverity.ALL;
            case 'trace':
                return LogSeverity_1.LogSeverity.TRACE;
            case 'debug':
                return LogSeverity_1.LogSeverity.DEBUG;
            case 'info':
                return LogSeverity_1.LogSeverity.INFO;
            case 'warning':
                return LogSeverity_1.LogSeverity.WARNING;
            case 'error':
                return LogSeverity_1.LogSeverity.ERROR;
            case 'fatal':
                return LogSeverity_1.LogSeverity.FATAL;
            default:
                return null;
        }
    }
    onBeforeReady() { }
    onReady() { }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map