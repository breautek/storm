// tslint:disable

import {Application} from '../../src/Application';
import {Database} from '../../src/Database';
import {IConfig} from '../../src/IConfig';
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

    protected _put(request: Request, response: Response): void {
        response.send(request.getBody());
    }

    protected _delete(request: Request, response: Response): void {
        response.send(request.getBody());
    }
}

const ERRORS_ONLY: LogSeverity = LogSeverity.ERROR | LogSeverity.FATAL;

export class TestApplication extends Application {
    constructor(severity?: LogSeverity) {
        super("TestApplication", "./spec/support/", severity === undefined ? ERRORS_ONLY : severity);
    }

    protected attachHandlers(): Promise<void> {
        this.attachHandler('/echo', TestHandler);
        return Promise.resolve();
    }

    protected _createLogger(): Logger {
        return new TestLogger(this.getName());
    }

    public initDB(config: IConfig): Promise<Database> {
        return Promise.resolve(new MockDB());
    }

    public getDefaultLogLevel(): LogSeverity {
        return this._getDefaultLogLevel();
    }

    protected _getDefaultLogLevel(): LogSeverity {
        return LogSeverity.TRACE;
    }
}

export class NoServerApp extends Application {
    constructor() {
        super('NoServerApp', './spec/support/', null);
    }

    protected attachHandlers(): Promise<void> {
        this.attachHandler('/echo', TestHandler);
        return Promise.resolve();
    }

    public shouldListen(): boolean {
        return false;
    }

    public llStrToSeverity(ll: string): LogSeverity {
        return this._llStrToSeverity(ll);
    }
}

export class ConfigTestApp extends Application {
    public testConfig: IConfig;

    constructor(jsonConfig: string) {
        super('ConfigTestApp', jsonConfig, null);
    }

    protected attachHandlers(): Promise<void> {
        this.attachHandler('/echo', TestHandler);
        return Promise.resolve();
    }

    protected _createLogger(): Logger {
        return super._createLogger();
    }

    public shouldListen(): boolean {
        return false;
    }

    public loadConfig(path: string): Promise<IConfig> {
        return Promise.resolve(JSON.parse(path));
    }

    public llStrToSeverity(ll: string): LogSeverity {
        return this._llStrToSeverity(ll);
    }
}
