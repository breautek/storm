
import {Application} from '../../src/Application';
import {Database} from '../../src/Database';
import {IConfig} from '../../src/IConfig';
import {Logger} from '@arashi/logger';
import {Handler} from '../../src/Handler';
import { MockDB } from './MockDB';
import { Request } from '../../src/Request';
import {StatusCode} from '../../src/StatusCode';
import {HTTPMethod} from '../../src/HTTPMethod';
import * as http from 'http';
import { TokenManager } from '../../src/TokenManager';
import { Token } from '../../src/Token';

jest.mock('@arashi/logger');

export interface IMockResponse {
    status: StatusCode;
    data: string;
    headers: any;
}

class TestHandler extends Handler<
    Application,
    void, void,
    string, string,
    string, string,
    string, string
> {
    public constructor(app: Application) {
        super(app);
    }

    protected override async _get(request: Request<void>): Promise<void> {}

    protected override async _post(request: Request<string>): Promise<string> {
        return request.getBody();
    }

    protected override async _put(request: Request<string>): Promise<string> {
        return request.getBody();
    }

    protected override async _delete(request: Request<string>): Promise<string> {
        return request.getBody();
    }
}

export class TestApplication extends Application {
    constructor() {
        super("TestApplication", "./spec/support/");
    }

    protected override _getVersion(): string {
        return '1.2.3';
    }

    protected override _attachHandlers(): Promise<void> {
        this.attachHandler('/echo', new TestHandler(this));
        return Promise.resolve();
    }

    protected override _createLogger(): Logger {
        return new Logger(this.getName());
    }

    protected override _initDB(config: IConfig): Promise<Database<any, any>> {
        return Promise.resolve(new MockDB());
    }
}

export class MockApplication extends Application {
    constructor() {
        super("TestApplication", "./spec/support/");

        const VERY_SECRET_KEY: string = 'secret';

        this.setTokenManager(new TokenManager(VERY_SECRET_KEY));
    }

    protected override _getVersion(): string {
        return '1.2.3';
    }

    public async signToken(payload?: any): Promise<Token> {
        return await this.getTokenManager().sign(payload, '1d');
    }

    protected override _attachHandlers(): Promise<void> {
        this.attachHandler('/echo', new TestHandler(this));
        this.attachHandler('/api/mock/v1/echo', new TestHandler(this));
        return Promise.resolve();
    }

    public attachMockHandler(url: string, handler: Handler): void {
        this.attachHandler(url, handler);
    }

    private $doMock(method: HTTPMethod, url: string, data?: any, headers?: any): Promise<IMockResponse> {
        return new Promise<IMockResponse>((resolve, reject) => {
            let request: http.ClientRequest = http.request(new URL(url, `http://127.0.0.1:${this.getPort()}`), {
                method: method
            }, (response) => {
                response.setEncoding('utf8');

                let data: string = '';

                response.on('data', (chunk: string) => {
                    data += chunk;
                });

                response.on('end', () => {
                    resolve({
                        status: response.statusCode,
                        data: data,
                        headers: response.headers
                    });
                });
            });

            if (headers) {
                for (let i in headers) {
                    request.setHeader(i, headers[i]);
                }
            }

            if (data) {
                if (typeof data === 'string') {
                    request.write(data);
                }
                else {
                    request.setHeader('Content-Type', 'multipart/form-data; boundary=' + data.getBoundary());
                    data.pipe(request);
                }
            }

            request.end();
        });
    }

    public doMockGet(url: string, headers?: any): Promise<IMockResponse> {
        return this.$doMock(HTTPMethod.GET, url, null, headers);
    }

    public doMockPost(url: string, data?: any): Promise<IMockResponse> {
        return this.$doMock(HTTPMethod.POST, url, data);
    }

    public doMockPut(url: string, data?: any): Promise<IMockResponse> {
        return this.$doMock(HTTPMethod.PUT, url, data);
    }

    public doMockDelete(url: string, data?: any): Promise<IMockResponse> {
        return this.$doMock(HTTPMethod.DELETE, url, data);
    }

    protected _createLogger(): Logger {
        return new Logger(this.getName());
    }

    protected _initDB(config: IConfig): Promise<Database<any, any>> {
        return Promise.resolve(new MockDB());
    }
}

export class NoServerApp extends Application {
    constructor() {
        super('NoServerApp', './spec/support/');
    }

    protected override _getVersion(): string {
        return '1.2.3';
    }

    protected override _attachHandlers(): Promise<void> {
        this.attachHandler('/echo', new TestHandler(this));
        return Promise.resolve();
    }

    public override shouldListen(): boolean {
        return false;
    }
}

export class ConfigTestApp extends Application {
    public testConfig: IConfig;

    public constructor(jsonConfig: string) {
        super('ConfigTestApp', jsonConfig);
    }

    protected override _getVersion(): string {
        return '1.2.3';
    }

    protected override _attachHandlers(): Promise<void> {
        this.attachHandler('/echo', new TestHandler(this));
        return Promise.resolve();
    }

    public override shouldListen(): boolean {
        return false;
    }
}
