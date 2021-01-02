
export {Logger} from '@arashi/logger';

// // Copyright (C) 2017  Norman Breau

// // This program is free software: you can redistribute it and/or modify
// // it under the terms of the GNU General Public License as published by
// // the Free Software Foundation, either version 3 of the License, or
// // (at your option) any later version.

// // This program is distributed in the hope that it will be useful,
// // but WITHOUT ANY WARRANTY; without even the implied warranty of
// // MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// // GNU General Public License for more details.

// // You should have received a copy of the GNU General Public License
// // along with this program.  If not, see <http://www.gnu.org/licenses/>.

// /* eslint-disable prefer-rest-params */

// import {EventEmitter} from 'events';
// import {LogSeverity} from './LogSeverity';
// import {LogEvent} from './LogEvent';
// import {ILogEvent} from './ILogEvent';
// import * as utils from 'util';
// import {getInstance} from './instance';
// import { IConfig } from './IConfig';
// import { Application } from './Application';
// import {Writable} from 'stream';

// export class Logger extends EventEmitter {
//     private _name: string;
//     private _logLevel: LogSeverity;
//     private _useStdErrForErrors: boolean;
//     private _filters: Array<RegExp>;
//     private _logStream: Writable;
//     private _errorStream: Writable;

//     public constructor(name: string = '', logLevel?: LogSeverity, useStdErrForErrors: boolean = false) {
//         super();

//         this._name = name;

//         this._logStream = this._getDefaultLogStream();
//         this._errorStream = this._getDefaultErrorStream();

//         this._logLevel = LogSeverity.DEBUG       |
//                         LogSeverity.INFO        |
//                         LogSeverity.WARNING     |
//                         LogSeverity.ERROR       |
//                         LogSeverity.FATAL;
        
//         if (logLevel) {
//             this._logLevel = logLevel;
//         }

//         this._filters = this._getDefaultLogFilters();

//         this._useStdErrForErrors = useStdErrForErrors;
//     }

//     protected _getDefaultLogStream(): Writable {
//         return process.stdout;
//     }

//     protected _getDefaultErrorStream(): Writable {
//         return process.stderr;
//     }

//     public setLogStream(writable: Writable): void {
//         this._logStream = writable;
//     }

//     public setErrorStream(writable: Writable): void {
//         this._errorStream = writable;
//     }

//     public getLogStream(): Writable {
//         return this._logStream;
//     }

//     public getErrorStream(): Writable {
//         return this._errorStream;
//     }

//     public getName(): string {
//         return this._name;
//     }

//     public addFilter(reg: RegExp): void {
//         this._filters.push(reg);
//     }

//     public removeFilter(reg: RegExp): void {
//         let index: number = this._filters.indexOf(reg);
//         if (index > -1) {
//             this._filters.splice(index, 1);
//         }
//     }

//     public setFilters(filters: Array<RegExp>): void {
//         if (filters) {
//             this._filters  = filters.slice();
//         }
//         else {
//             this._filters = [];
//         }
//     }

//     public getFilters(): Array<RegExp> {
//         return this._filters.slice();
//     }

//     public loadFilters(): void {
//         let app: Application = getInstance();
//         let config: IConfig = null;

//         if (app) {
//             config = app.getConfig();
//         }

//         if (!config) {
//             this.trace('No config for logger... Using default log filters');
//             this.setFilters(this._getDefaultLogFilters());
//             return;
//         }

//         let filters: Array<RegExp> = null;
//         if (!config.log_filters || (config.log_filters && config.log_filters.length === 0)) {
//             filters = this._getDefaultLogFilters();
//         }
//         else {
//             filters = [];
//             for (let i: number = 0; i < config.log_filters.length; i++) {
//                 let logFilter: string = config.log_filters[i];
//                 filters.push(new RegExp(this._parseRegex(logFilter)));
//             }
//         }

//         this.setFilters(filters);
//     }

//     private _parseRegex(strReg: string): RegExp {
//         let malformError: Error = new Error('Malformed regex in log_filters');
//         if (strReg[0] !== '/') {
//             throw malformError;
//         }

//         let lastSlashIndex = strReg.lastIndexOf('/');
//         if (lastSlashIndex === strReg.indexOf('/')) {
//             throw malformError;
//         }

//         let reg: string = strReg.slice(1, lastSlashIndex);
//         let flags = strReg.slice(lastSlashIndex + 1);

//         return new RegExp(reg, flags);
//     }

//     protected _getDefaultLogFilters(): Array<RegExp> {
//         return [ /TokenExpiredError/g ];
//     }

//     public setLogLevel(severity: LogSeverity): void {
//         this._logLevel = severity;
//     }

//     public getLogLevel(): LogSeverity {
//         return this._logLevel;
//     }

//     protected _formatDate(now: Date): string {
//         return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
//     }

//     protected _formatString(messages: IArguments, severity: LogSeverity): string {
//         let sevText: string = '';
//         let str: string = '';

//         switch (severity) {
//             case LogSeverity.TRACE:
//                 sevText = '[TRACE]';
//                 break;
//             case LogSeverity.DEBUG:
//                 sevText = '[DEBUG]';
//                 break;
//             case LogSeverity.INFO:
//                 sevText = '[INFO]';
//                 break;
//             case LogSeverity.WARNING:
//                 sevText = '[WARN]';
//                 break;
//             case LogSeverity.ERROR:
//                 sevText = '[ERROR]';
//                 break;
//             case LogSeverity.FATAL:
//                 sevText = '[FATAL]';
//                 break;
//             case LogSeverity.DEPRECATE:
//                 sevText = '[DEPRECATE]';
//                 break;
//             default:
//                 this.warn('Unknown Severity value used.');
//                 break;
//         }
        
//         for (let i: number = 0; i < messages.length; i++) {
//             let msg: any = messages[i];

//             if (str.length !== 0) {
//                 str += ' ';
//             }

//             if (typeof msg !== 'string') {
//                 str += utils.inspect(msg);
//             }
//             else {
//                 str += msg;
//             }

//             if (msg instanceof Error) {
//                 str = msg.stack + '\n\n';
//             }
//         }

//         return `${sevText}[${this._name}][${this._formatDate(new Date())}] ${str}\n`;
//     }

//     protected _logMessages(messages: IArguments, severity: LogSeverity): void {
//         let msg: string = this._formatString(messages, severity);
        
//         this._logMessage(msg, severity);
//     }

//     protected _logMessage(msg: string, severity: LogSeverity): void {
//         if (this._shouldLog(msg, severity)) {
//             if ((severity & (LogSeverity.ERROR | LogSeverity.FATAL)) && this._useStdErrForErrors) {
//                 this.getErrorStream().write(msg);
//             }
//             else {
//                 this.getLogStream().write(msg);
//             }
//         }
//     }

//     protected _shouldLog(msg: string, severity: LogSeverity): boolean {
//         if (severity === LogSeverity.TRACE) {
//             return true;
//         }

//         for (let i: number = 0; i < this._filters.length; i++) {
//             let filter: RegExp = this._filters[i];
//             if (filter.test(msg)) {
//                 return false;
//             }
//         }

//         return true;
//     }

//     protected log(messages: IArguments, severity: LogSeverity): void {
//         if (severity & this.getLogLevel()) {
//             this._logMessages(messages, severity);
//             let logData: ILogEvent = {
//                 severity : severity,
//                 messages : messages
//             };
//             this.emit(LogEvent.LOG, logData);
//         }
//     }

//     // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//     public trace(message: any): void {
//         this.log(arguments, LogSeverity.TRACE);
//     }

//     // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//     public debug(message: any): void {
//         this.log(arguments, LogSeverity.DEBUG);
//     }

//     // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//     public info(message: any): void {
//         this.log(arguments, LogSeverity.INFO);
//     }

//     // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//     public warn(message: any): void {
//         this.log(arguments, LogSeverity.WARNING);
//     }

//     // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//     public error(message: any): void {
//         this.log(arguments, LogSeverity.ERROR);
//     }

//     // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//     public fatal(message: any): void {
//         this.log(arguments, LogSeverity.FATAL);
//     }

//     // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//     public deprecate(alternative?: string, methodOverride?: string): void {
//         let e: Error = new Error();
//         let args: any = [];
        
//         if (!methodOverride) {
//             args.push(this._getDeprecatedMethodMessage(e));
//         }
//         else {
//             args.push(methodOverride);
//         }

//         if (alternative) {
//             args.push(this._getDeprecatedAlternativeMessage(alternative));
//         }
        
//         args.push('\n\n');
//         args.push(e.stack);
//         this.log(args, LogSeverity.DEPRECATE);
//     }

//     public deprecateParameterType(argumentLocation: number, deprecatedType: string, alternative?: string): void {
//         let e: Error = new Error();
//         let args: any = [];

//         args.push(this._getDeprecatedParameterMethodMessage(e, argumentLocation, deprecatedType));

//         if (alternative) {
//             args.push(this._getDeprecatedParameterAlternativeMessage(alternative,  argumentLocation));
//         }
        
//         args.push('\n\n');
//         args.push(e.stack);
//         this.log(args, LogSeverity.DEPRECATE);
//     }
    
//     private _getDeprecatedMethodMessage(e: Error): string {
//         let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
//         let obj: string = 'Method';
//         if (stack === "new") {
//             stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
//             obj = 'Class';
//         }
//         return `${obj} ${stack} is deprecated.`
//     }

//     private _getDeprecatedAlternativeMessage(alternative: string): string {
//         return `Use ${alternative} instead.`;
//     }

//     private _getDeprecatedParameterMethodMessage(e: Error, argumentLocation: number, parameter: string): string {
//         let stack = e.stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1');
//         let obj: string = 'Method';
//         if (stack === "new") {
//             stack = e.stack.split('\n')[2].replace(/^\s+at new\s+(.+?)\s.+/g, '$1');
//             obj = 'Class';
//         }
//         return `${obj} ${stack} ${parameter} at parameter ${argumentLocation} is deprecated.`
//     }

//     private _getDeprecatedParameterAlternativeMessage(alternative: string, argumentLocation: number): string {
//         return `Use ${alternative} at parameter ${argumentLocation} instead.`;
//     }
// }
