"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const LogSeverity_1 = require("./LogSeverity");
const LogEvent_1 = require("./LogEvent");
const utils = require("util");
class Logger extends events_1.EventEmitter {
    constructor(name = '', logLevel, useStdOutForErrors = false) {
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
        this.useStdOutForErrors = useStdOutForErrors;
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
                str = '\n\n' + msg.stack + '\n\n';
            }
        }
        return `${sevText}[${this.name}][${this._formatDate(new Date())}] ${str}\n`;
    }
    _log(messages, severity) {
        var msg = this._formatString(messages, severity);
        if ((severity & (LogSeverity_1.LogSeverity.ERROR | LogSeverity_1.LogSeverity.FATAL)) && this.useStdOutForErrors) {
            process.stderr.write(msg);
        }
        else {
            process.stdout.write(msg);
        }
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