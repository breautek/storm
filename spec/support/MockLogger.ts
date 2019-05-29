
import {Logger} from '../../src/Logger';
import { LogSeverity } from '../../src/LogSeverity';

export class MockLogger extends Logger {
    public formatString(messages: any, severity: LogSeverity): string {
        return this._formatString(messages, severity);
    }
}
