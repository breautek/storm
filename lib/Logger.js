"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const events_1 = require("events");
const LogSeverity_1 = require("./LogSeverity");
const LogEvent_1 = require("./LogEvent");
const utils = require("util");
const instance_1 = require("./instance");
class Logger extends events_1.EventEmitter {
    constructor(name = '', logLevel, useStdErrForErrors = false) {
        super();
        this.name = name;
        this._logStream = this._getDefaultLogStream();
        this._errorStream = this._getDefaultErrorStream();
        this.logLevel = LogSeverity_1.LogSeverity.DEBUG |
            LogSeverity_1.LogSeverity.INFO |
            LogSeverity_1.LogSeverity.WARNING |
            LogSeverity_1.LogSeverity.ERROR |
            LogSeverity_1.LogSeverity.FATAL;
        if (logLevel) {
            this.logLevel = logLevel;
        }
        this._filters = this._getDefaultLogFilters();
        this.useStdErrForErrors = useStdErrForErrors;
    }
    _getDefaultLogStream() {
        return process.stdout;
    }
    _getDefaultErrorStream() {
        return process.stderr;
    }
    setLogStream(writable) {
        this._logStream = writable;
    }
    setErrorStream(writable) {
        this._errorStream = writable;
    }
    getLogStream() {
        return this._logStream;
    }
    getErrorStream() {
        return this._errorStream;
    }
    getName() {
        return this.name;
    }
    addFilter(reg) {
        this._filters.push(reg);
    }
    removeFilter(reg) {
        let index = this._filters.indexOf(reg);
        if (index > -1) {
            this._filters.splice(index, 1);
        }
    }
    setFilters(filters) {
        if (filters) {
            this._filters = filters.slice();
        }
        else {
            this._filters = [];
        }
    }
    getFilters() {
        return this._filters.slice();
    }
    loadFilters() {
        let app = instance_1.getInstance();
        let config = null;
        if (app) {
            config = app.getConfig();
        }
        if (!config) {
            this.trace('No config for logger... Using default log filters');
            this.setFilters(this._getDefaultLogFilters());
            return;
        }
        let filters = null;
        if (!config.log_filters || (config.log_filters && config.log_filters.length === 0)) {
            filters = this._getDefaultLogFilters();
        }
        else {
            filters = [];
            for (let i = 0; i < config.log_filters.length; i++) {
                let logFilter = config.log_filters[i];
                filters.push(new RegExp(this._parseRegex(logFilter)));
            }
        }
        this.setFilters(filters);
    }
    _parseRegex(strReg) {
        let malformError = new Error('Malformed regex in log_filters');
        if (strReg[0] !== '/') {
            throw malformError;
        }
        let lastSlashIndex = strReg.lastIndexOf('/');
        if (lastSlashIndex === strReg.indexOf('/')) {
            throw malformError;
        }
        let reg = strReg.slice(1, lastSlashIndex);
        let flags = strReg.slice(lastSlashIndex + 1);
        return new RegExp(reg, flags);
    }
    _getDefaultLogFilters() {
        return [/TokenExpiredError/g];
    }
    setLogLevel(severity) {
        this.logLevel = severity;
    }
    getLogLevel() {
        return this.logLevel;
    }
    _formatDate(now) {
        return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }
    _formatString(messages, severity) {
        let sevText = '';
        let str = '';
        switch (severity) {
            case LogSeverity_1.LogSeverity.TRACE:
                sevText = '[TRACE]';
                break;
            case LogSeverity_1.LogSeverity.DEBUG:
                sevText = '[DEBUG]';
                break;
            case LogSeverity_1.LogSeverity.INFO:
                sevText = '[INFO]';
                break;
            case LogSeverity_1.LogSeverity.WARNING:
                sevText = '[WARN]';
                break;
            case LogSeverity_1.LogSeverity.ERROR:
                sevText = '[ERROR]';
                break;
            case LogSeverity_1.LogSeverity.FATAL:
                sevText = '[FATAL]';
                break;
            case LogSeverity_1.LogSeverity.DEPRECATE:
                sevText = '[DEPRECATE]';
                break;
            default:
                this.warn('Unknown Severity value used.');
                break;
        }
        for (let i = 0; i < messages.length; i++) {
            let msg = messages[i];
            if (str.length !== 0) {
                str += ' ';
            }
            if (typeof msg !== 'string') {
                str += utils.inspect(msg);
            }
            else {
                str += msg;
            }
            if (msg instanceof Error) {
                str = msg.stack + '\n\n';
            }
        }
        return `${sevText}[${this.name}][${this._formatDate(new Date())}] ${str}\n`;
    }
    _logMessages(messages, severity) {
        let msg = this._formatString(messages, severity);
        this._logMessage(msg, severity);
    }
    _logMessage(msg, severity) {
        if (this._shouldLog(msg, severity)) {
            if ((severity & (LogSeverity_1.LogSeverity.ERROR | LogSeverity_1.LogSeverity.FATAL)) && this.useStdErrForErrors) {
                this.getErrorStream().write(msg);
            }
            else {
                this.getLogStream().write(msg);
            }
        }
    }
    _shouldLog(msg, severity) {
        if (severity === LogSeverity_1.LogSeverity.TRACE) {
            return true;
        }
        for (let i = 0; i < this._filters.length; i++) {
            let filter = this._filters[i];
            if (filter.test(msg)) {
                return false;
            }
        }
        return true;
    }
    log(messages, severity) {
        if (severity & this.getLogLevel()) {
            this._logMessages(messages, severity);
            let logData = {
                severity: severity,
                messages: messages
            };
            this.emit(LogEvent_1.LogEvent.LOG, logData);
        }
    }
    trace(message) {
        this.log(arguments, LogSeverity_1.LogSeverity.TRACE);
    }
    debug(message) {
        this.log(arguments, LogSeverity_1.LogSeverity.DEBUG);
    }
    info(message) {
        this.log(arguments, LogSeverity_1.LogSeverity.INFO);
    }
    warn(message) {
        this.log(arguments, LogSeverity_1.LogSeverity.WARNING);
    }
    error(message) {
        this.log(arguments, LogSeverity_1.LogSeverity.ERROR);
    }
    fatal(message) {
        this.log(arguments, LogSeverity_1.LogSeverity.FATAL);
    }
    deprecate(alternative, methodOverride) {
        let e = new Error();
        let args = [];
        if (!methodOverride) {
            args.push(this._getDeprecatedMethodMessage(e));
        }
        else {
            args.push(methodOverride);
        }
        if (alternative) {
            args.push(this._getDeprecatedAlternativeMessage(alternative));
        }
        args.push('\n\n');
        args.push(e.stack);
        this.log(args, LogSeverity_1.LogSeverity.DEPRECATE);
    }
    deprecateParameterType(argumentLocation, deprecatedType, alternative) {
        let e = new Error();
        let args = [];
        args.push(this._getDeprecatedParameterMethodMessage(e, argumentLocation, deprecatedType));
        if (alternative) {
            args.push(this._getDeprecatedParameterAlternativeMessage(alternative, argumentLocation));
        }
        args.push('\n\n');
        args.push(e.stack);
        this.log(args, LogSeverity_1.LogSeverity.DEPRECATE);
    }
    _getDeprecatedMethodMessage(e) {
        let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
        let obj = 'Method';
        if (stack === "new") {
            stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
            obj = 'Class';
        }
        return `${obj} ${stack} is deprecated.`;
    }
    _getDeprecatedAlternativeMessage(alternative) {
        return `Use ${alternative} instead.`;
    }
    _getDeprecatedParameterMethodMessage(e, argumentLocation, parameter) {
        let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
        let obj = 'Method';
        if (stack === "new") {
            stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
            obj = 'Class';
        }
        return `${obj} ${stack} ${parameter} at parameter ${argumentLocation} is deprecated.`;
    }
    _getDeprecatedParameterAlternativeMessage(alternative, argumentLocation) {
        return `Use ${alternative} at parameter ${argumentLocation} instead.`;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map