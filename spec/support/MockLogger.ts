
import {Logger} from '../../src/Logger';
import { LogSeverity } from '../../src/LogSeverity';
import {DumpStream} from '../../src/DumpStream';
import {Writable} from 'stream';

export class MockLogger extends Logger {

    protected _getDefaultLogStream(): Writable {
        return DumpStream.getWritable();
    }

    protected _getDefaultErrorStream(): Writable {
        return DumpStream.getWritable();
    }

    public formatString(messages: any, severity: LogSeverity): string {
        return this._formatString(messages, severity);
    }
}
