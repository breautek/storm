import {Application} from '../../src/Application';
import {Database} from '../../src/Database';
import {Config} from '../../src/Config';
import {Logger} from '../../src/Logger';
import {LogSeverity} from '../../src/LogSeverity';
import {Handler} from '../../src/Handler';
import { MockDB } from './MockDB';
import { Request } from '../../src/Request';
import { Response } from '../../src/Response';

export class TestLogger extends Logger {};

class TestHandler extends Handler {
    public constructor(app: Application) {
        super(app);
    }

    protected _get(request: Request, response: Response): void {
        response.success();
    }

    protected _post(request: Request, response: Response): void {
        response.send(request.getBody());
    }
}

export class TestApplication extends Application {
    constructor() {
        super("TestApplication", "./spec/support/");
    }

    protected attachHandlers(): Promise<void> {
        this.attachHandler('/echo', TestHandler);
        return Promise.resolve();
    }

    protected _createLogger(): Logger {
        return new TestLogger(this.getName());
    }

    public initDB(config: Config): Promise<Database> {
        return Promise.resolve(new MockDB());
    }

    public getDefaultLogLevel(): LogSeverity {
        return this._getDefaultLogLevel();
    }

    protected _getDefaultLogLevel(): LogSeverity {
        return LogSeverity.TRACE;
    }
}
