import { LogSeverity } from './LogSeverity';
export interface ILogEvent {
    severity: LogSeverity;
    messages: IArguments;
}
