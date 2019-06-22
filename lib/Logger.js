"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const LogSeverity_1 = require("./LogSeverity");
const LogEvent_1 = require("./LogEvent");
const utils = require("util");
const instance_1 = require("./instance");
class Logger extends events_1.EventEmitter {
    constructor(name = '', logLevel, useStdErrForErrors = false) {
        super();
        this.name = name;
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
    getName() {
        return this.name;
    }
    addFilter(reg) {
        this._filters.push(reg);
    }
    removeFilter(reg) {
        var index = this._filters.indexOf(reg);
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
        var app = instance_1.getInstance();
        var config = null;
        if (app) {
            config = app.getConfig();
        }
        if (!config) {
            this.trace('No config for logger... Using default log filters');
            this.setFilters(this._getDefaultLogFilters());
            return;
        }
        var filters = null;
        if (!config.log_filters || (config.log_filters && config.log_filters.length === 0)) {
            filters = this._getDefaultLogFilters();
        }
        else {
            filters = [];
            for (var i = 0; i < config.log_filters.length; i++) {
                var logFilter = config.log_filters[i];
                console.log(logFilter);
                filters.push(new RegExp(this._parseRegex(logFilter)));
            }
        }
        this.setFilters(filters);
    }
    _parseRegex(strReg) {
        var malformError = new Error('Malformed regex in log_filters');
        if (strReg[0] !== '/') {
            throw malformError;
        }
        var lastSlashIndex = strReg.lastIndexOf('/');
        if (lastSlashIndex === strReg.indexOf('/')) {
            throw malformError;
        }
        var reg = strReg.slice(1, lastSlashIndex);
        var flags = strReg.slice(lastSlashIndex + 1);
        return new RegExp(reg, flags);
    }
    _getDefaultLogFilters() {
        return [
            /TokenExpiredError/g
        ];
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
        var sevText = '';
        var str = '';
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
            default:
                this.warn('Unknown Severity value used.');
                break;
        }
        for (var i = 0; i < messages.length; i++) {
            var msg = messages[i];
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
    _log(messages, severity) {
        var msg = this._formatString(messages, severity);
        this._logMessage(msg, severity);
    }
    _logMessage(msg, severity) {
        if (this._shouldLog(msg, severity)) {
            if ((severity & (LogSeverity_1.LogSeverity.ERROR | LogSeverity_1.LogSeverity.FATAL)) && this.useStdErrForErrors) {
                process.stderr.write(msg);
            }
            else {
                process.stdout.write(msg);
            }
        }
    }
    _shouldLog(msg, severity) {
        if (severity === LogSeverity_1.LogSeverity.TRACE) {
            return true;
        }
        for (var i = 0; i < this._filters.length; i++) {
            var filter = this._filters[i];
            if (filter.test(msg)) {
                return false;
            }
        }
        return true;
    }
    log(messages, severity) {
        if (severity & this.getLogLevel()) {
            this._log(messages, severity);
            var logData = {
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
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map