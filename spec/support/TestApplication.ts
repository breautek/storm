import {Application} from '../../src/Application';
import {Logger} from '../../src/Logger';
import {LogSeverity} from '../../src/LogSeverity';

export class TestLogger extends Logger {};

export class TestApplication extends Application {
    constructor() {
        super("TestApplication", "./spec/support/");
    }

    attachHandlers(): Promise<void> {
        return Promise.resolve();
    }

    protected _createLogger(): Logger {
        return new TestLogger(this.getName());
    }

    public getDefaultLogLevel(): LogSeverity {
        return this._getDefaultLogLevel();
    }

    protected _getDefaultLogLevel(): LogSeverity {
        return LogSeverity.TRACE;
    }
}
