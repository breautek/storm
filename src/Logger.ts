// Copyright (C) 2017  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import {EventEmitter} from 'events';
import {LogSeverity} from './LogSeverity';
import {LogEvent} from './LogEvent';
import {ILogEvent} from './ILogEvent';
import * as utils from 'util';
import {getInstance} from './instance';
import { IConfig } from './IConfig';
import { Application } from './Application';

export class Logger extends EventEmitter {
    private name: string;
    private logLevel: LogSeverity;
    private useStdErrForErrors: boolean;
    private _filters: Array<RegExp>;

    public constructor(name: string = '', logLevel?: LogSeverity, useStdErrForErrors: boolean = false) {
        super();

        this.name = name;

        this.logLevel = LogSeverity.DEBUG       |
                        LogSeverity.INFO        |
                        LogSeverity.WARNING     |
                        LogSeverity.ERROR       |
                        LogSeverity.FATAL;
        
        if (logLevel) {
            this.logLevel = logLevel;
        }

        this._filters = this._getDefaultLogFilters();

        this.useStdErrForErrors = useStdErrForErrors;
    }

    public getName(): string {
        return this.name;
    }

    public addFilter(reg: RegExp): void {
        this._filters.push(reg);
    }

    public removeFilter(reg: RegExp): void {
        var index: number = this._filters.indexOf(reg);
        if (index > -1) {
            this._filters.splice(index, 1);
        }
    }

    public setFilters(filters: Array<RegExp>): void {
        if (filters) {
            this._filters  = filters.slice();
        }
        else {
            this._filters = [];
        }
    }

    public getFilters(): Array<RegExp> {
        return this._filters.slice();
    }

    public loadFilters(): void {
        var app: Application = getInstance();
        var config: IConfig = null;

        if (app) {
            config = app.getConfig();
        }

        if (!config) {
            this.trace('No config for logger... Using default log filters');
            this.setFilters(this._getDefaultLogFilters());
            return;
        }

        var filters: Array<RegExp> = null;
        if (!config.log_filters || (config.log_filters && config.log_filters.length === 0)) {
            filters = this._getDefaultLogFilters();
        }
        else {
            filters = [];
            for (var i: number = 0; i < config.log_filters.length; i++) {
                var logFilter: string = config.log_filters[i];
                console.log(logFilter);
                filters.push(new RegExp(this._parseRegex(logFilter)));
            }
        }

        this.setFilters(filters);
    }

    private _parseRegex(strReg: string): RegExp {
        var malformError: Error = new Error('Malformed regex in log_filters');
        if (strReg[0] !== '/') {
            throw malformError;
        }

        var lastSlashIndex = strReg.lastIndexOf('/');
        if (lastSlashIndex === strReg.indexOf('/')) {
            throw malformError;
        }

        var reg: string = strReg.slice(1, lastSlashIndex);
        var flags = strReg.slice(lastSlashIndex + 1);

        return new RegExp(reg, flags);
    }

    protected _getDefaultLogFilters(): Array<RegExp> {
        return [
            /TokenExpiredError/g
        ];
    }

    public setLogLevel(severity: LogSeverity): void {
        this.logLevel = severity;
    }

    public getLogLevel(): LogSeverity {
        return this.logLevel;
    }

    protected _formatDate(now: Date): string {
        return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }

    protected _formatString(messages: IArguments, severity: LogSeverity): string {
        var sevText: string = '';
        var str: string = '';

        switch (severity) {
            case LogSeverity.TRACE:
                sevText = '[TRACE]';
                break;
            case LogSeverity.DEBUG:
                sevText = '[DEBUG]';
                break;
            case LogSeverity.INFO:
                sevText = '[INFO]';
                break;
            case LogSeverity.WARNING:
                sevText = '[WARN]';
                break;
            case LogSeverity.ERROR:
                sevText = '[ERROR]';
                break;
            case LogSeverity.FATAL:
                sevText = '[FATAL]';
                break;
            default:
                this.warn('Unknown Severity value used.');
                break;
        }
        
        for (var i: number = 0; i < messages.length; i++) {
            var msg: any = messages[i];

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

    protected _log(messages: IArguments, severity: LogSeverity): void {
        var msg: string = this._formatString(messages, severity);
        
        this._logMessage(msg, severity);
    }

    protected _logMessage(msg: string, severity: LogSeverity): void {
        if (this._shouldLog(msg, severity)) {
            if ((severity & (LogSeverity.ERROR | LogSeverity.FATAL)) && this.useStdErrForErrors) {
                process.stderr.write(msg);
            }
            else {
                process.stdout.write(msg);
            }
        }
    }

    protected _shouldLog(msg: string, severity: LogSeverity): boolean {
        if (severity === LogSeverity.TRACE) {
            return true;
        }

        for (var i: number = 0; i < this._filters.length; i++) {
            var filter: RegExp = this._filters[i];
            if (filter.test(msg)) {
                return false;
            }
        }

        return true;
    }

    public log(messages: IArguments, severity: LogSeverity): void {
        if (severity & this.getLogLevel()) {
            this._log(messages, severity);
            var logData: ILogEvent = {
                severity : severity,
                messages : messages
            };
            this.emit(LogEvent.LOG, logData);
        }
    }

    public trace(message: any): void {
        this.log(arguments, LogSeverity.TRACE);
    }

    public debug(message: any): void {
        this.log(arguments, LogSeverity.DEBUG);
    }

    public info(message: any): void {
        this.log(arguments, LogSeverity.INFO);
    }

    public warn(message: any): void {
        this.log(arguments, LogSeverity.WARNING);
    }

    public error(message: any): void {
        this.log(arguments, LogSeverity.ERROR);
    }

    public fatal(message: any): void {
        this.log(arguments, LogSeverity.FATAL);
    }
}
