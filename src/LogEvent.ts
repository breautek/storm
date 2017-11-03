import {LogSeverity} from './LogSeverity';

export enum LogEvent {
    LOG = "log"
}

export interface LogEventInterface {
    severity: LogSeverity;
    messages: IArguments;
}
