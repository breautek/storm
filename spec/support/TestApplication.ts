
import {Application} from '../../src/Application';
import {Database} from '../../src/Database';
import {IConfig} from '../../src/IConfig';
import {Logger} from '@arashi/logger';
import {Handler} from '../../src/Handler';
import { MockDB } from './MockDB';
import { Request } from '../../src/Request';
import { Response } from '../../src/Response';
import {IHandler} from '../../src/IHandler';
import {StatusCode} from '../../src/StatusCode';
import {HTTPMethod} from '../../src/HTTPMethod';
// import {MockLogger} from './MockLogger';
import * as http from 'http';
import { TokenManager } from '../../src/TokenManager';
import { Token } from '../../src/Token';

jest.mock('@arashi/logger');

export class TestLogger extends Logger {}

export interface IMockResponse {
    status: StatusCode;
    data: string;
    headers: any;
}

class TestHandler extends Handler {
    public constructor(app: Application) {
        super(app);
    }

    protected _get(request: Request, response: Response): Promise<void> {
        response.success();
        return Promise.resolve();
    }

    protected _post(request: Request, response: Response): Promise<void> {
        response.setStatus(200).send(request.getBody());
        return Promise.resolve();
    }

    protected _put(request: Request, response: Response): Promise<void> {
        response.setStatus(200).send(request.getBody());
        return Promise.resolve();
    }

    protected _delete(request: Request, response: Response): Promise<void> {
        response.setStatus(200).send(request.getBody());
        return Promise.resolve();
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

    public initDB(config: IConfig): Promise<Database<any, any>> {
        return Promise.resolve(new MockDB());
    }
}

export class MockApplication extends Application {
    constructor() {
        super("TestApplication", "./spec/support/");

        const VERY_SECRET_KEY: string = 'secret';

        this.setTokenManager(new TokenManager(VERY_SECRET_KEY));
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public async signToken(payload?: any): Promise<Token> {
        return await this.getTokenManager().sign(payload, '1d');
    }

    protected attachHandlers(): Promise<void> {
        this.attachHandler('/echo', TestHandler);
        this.attachHandler('/api/mock/v1/echo', TestHandler);
        return Promise.resolve();
    }

    public attachMockHandler(url: string, handler: IHandler): void {
        this.attachHandler(url, handler);
    }

    private _doMock(method: HTTPMethod, url: string, data?: any, headers?: any): Promise<IMockResponse> {
        return new Promise<IMockResponse>((resolve, reject) => {
            let request: http.ClientRequest = http.request(new URL(url, `http://localhost:${this.getPort()}`), {
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

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public doMockGet(url: string, headers?: any): Promise<IMockResponse> {
        return this._doMock(HTTPMethod.GET, url, null, headers);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public doMockPost(url: string, data?: any): Promise<IMockResponse> {
        return this._doMock(HTTPMethod.POST, url, data);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public doMockPut(url: string, data?: any): Promise<IMockResponse> {
        return this._doMock(HTTPMethod.PUT, url, data);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public doMockDelete(url: string, data?: any): Promise<IMockResponse> {
        return this._doMock(HTTPMethod.DELETE, url, data);
    }

    protected _createLogger(): Logger {
        return new TestLogger(this.getName());
    }

    public initDB(config: IConfig): Promise<Database<any, any>> {
        return Promise.resolve(new MockDB());
    }
}

export class NoServerApp extends Application {
    constructor() {
        super('NoServerApp', './spec/support/');
    }

    protected attachHandlers(): Promise<void> {
        this.attachHandler('/echo', TestHandler);
        return Promise.resolve();
    }

    public shouldListen(): boolean {
        return false;
    }
}

export class ConfigTestApp extends Application {
    public testConfig: IConfig;

    constructor(jsonConfig: string) {
        super('ConfigTestApp', jsonConfig);
    }

    protected attachHandlers(): Promise<void> {
        this.attachHandler('/echo', TestHandler);
        return Promise.resolve();
    }

    public shouldListen(): boolean {
        return false;
    }

    public loadConfig(path: string): Promise<IConfig> {
        return Promise.resolve(JSON.parse(path));
    }
}
