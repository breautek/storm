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
    protected _formatDate(now: Date): string;
    protected _formatString(messages: IArguments, severity: LogSeverity): string;
    protected _log(messages: IArguments, severity: LogSeverity): void;
    protected _logMessage(msg: string, severity: LogSeverity): void;
    log(messages: IArguments, severity: LogSeverity): void;
    trace(message: any): void;
    debug(message: any): void;
    info(message: any): void;
    warn(message: any): void;
    error(message: any): void;
    fatal(message: any): void;
}
