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
import {LogEvent, LogEventInterface} from './LogEvent';
import * as utils from 'util';

export class Logger extends EventEmitter {
    private name: string;
    private logLevel: LogSeverity;
    private useStdOutForErrors: boolean;

    public constructor(name: string = '', logLevel?: LogSeverity, useStdOutForErrors: boolean = false) {
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

        this.useStdOutForErrors = useStdOutForErrors;
    }

    public setLogLevel(severity: LogSeverity): void {
        this.logLevel = severity;
    }

    public getLogLevel(): LogSeverity {
        return this.logLevel;
    }

    private _formatDate(now: Date): string {
        return `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }

    private _formatString(messages: IArguments, severity: LogSeverity): string {
        var sevText: string = '';
        var str: string = '';

        switch(severity) {
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

            str += utils.inspect(msg);

            if (msg instanceof Error) {
                str = '\n\n' + msg.stack + '\n\n';
            }
        }

        return `${sevText}[${this.name}][${this._formatDate(new Date())}] ${str}\n`;
    }

    private _log(messages: IArguments, severity: LogSeverity): void {
        var msg: string = this._formatString(messages, severity);

        if ((severity & (LogSeverity.ERROR | LogSeverity.FATAL)) && this.useStdOutForErrors) {
            process.stderr.write(msg);
        }
        else {
            process.stdout.write(msg);
        }
    }

    public log(messages: IArguments, severity: LogSeverity): void {
        if (severity & this.getLogLevel()) {
            this._log(messages, severity);
            var logData: LogEventInterface = {
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
