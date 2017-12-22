/// <reference types="node" />
import { EventEmitter } from 'events';
import { LogSeverity } from './LogSeverity';
export declare class Logger extends EventEmitter {
    private name;
    private logLevel;
    private useStdOutForErrors;
    constructor(name?: string, logLevel?: LogSeverity, useStdOutForErrors?: boolean);
    setLogLevel(severity: LogSeverity): void;
    getLogLevel(): LogSeverity;
    private _formatDate(now);
    private _formatString(messages, severity);
    private _log(messages, severity);
    log(messages: IArguments, severity: LogSeverity): void;
    trace(message: any): void;
    debug(message: any): void;
    info(message: any): void;
    warn(message: any): void;
    error(message: any): void;
    fatal(message: any): void;
}
