import { LogSeverity } from './LogSeverity';
export declare enum LogEvent {
    LOG = "log",
}
export interface LogEventInterface {
    severity: LogSeverity;
    messages: IArguments;
}
