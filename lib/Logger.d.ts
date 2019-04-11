/// <reference types="node" />
import { EventEmitter } from 'events';
import { LogSeverity } from './LogSeverity';
export declare class Logger extends EventEmitter {
    private name;
    private logLevel;
    private useStdOutForErrors;
    private _filters;
    constructor(name?: string, logLevel?: LogSeverity, useStdOutForErrors?: boolean);
    addFilter(reg: RegExp): void;
    removeFilter(reg: RegExp): void;
    setFilters(filters: Array<RegExp>): void;
    protected _loadFilters(): Array<RegExp>;
    private _parseRegex;
    protected _getDefaultLogFilters(): Array<RegExp>;
    setLogLevel(severity: LogSeverity): void;
    getLogLevel(): LogSeverity;
    protected _formatDate(now: Date): string;
    protected _formatString(messages: IArguments, severity: LogSeverity): string;
    protected _log(messages: IArguments, severity: LogSeverity): void;
    protected _logMessage(msg: string, severity: LogSeverity): void;
    protected _shouldLog(msg: string, severity: LogSeverity): boolean;
    log(messages: IArguments, severity: LogSeverity): void;
    trace(message: any): void;
    debug(message: any): void;
    info(message: any): void;
    warn(message: any): void;
    error(message: any): void;
    fatal(message: any): void;
}
