
import {
    MockApplication
} from './support/TestApplication';

import {Request} from '../src/Request';
import {Handler} from '../src/Handler';
import {HTTPMethod} from '../src/HTTPMethod';
import {IFormData} from '../src/IFormData';
import * as FileSystem from 'fs';
import {Writable} from 'stream';
import * as http from 'http';
import * as Path from 'path';
import FormData = require('form-data');
import { Token } from '../src/Token';
import { TokenManager } from '../src/TokenManager';
import { ResponseData } from '../src/ResponseData';
import { JWTError } from '../src/JWTError';
import { StatusCode } from '../src/StatusCode';
import { getInstance } from '../src/instance';

type HandlerCallback = (request: Request) => Promise<void>;

let makeHandler = (callback: HandlerCallback) => {
    return class MockHandler extends Handler {
        private async $handleRequest(request: Request): Promise<void> {
            return callback(request);
        }
        
        protected async _get(request: Request): Promise<void> {
            return this.$handleRequest(request);
        }

        protected async _post(request: Request): Promise<void> {
            return this.$handleRequest(request);
        }
    };
};

describe('Request', () => {
    let app: MockApplication = null;

    beforeAll((done) => {
        process.argv = [];
        app = new MockApplication();
        app.on('ready', () => {
            done();
        });
    });

    afterAll((done) => {
        app.close().then(() => {
            app = null;
            done();
        });
    });

    it('can make request()', async () => {
        app.attachMockHandler('/getHeaders', makeHandler(async (request: Request) => {
            let headers: http.IncomingHttpHeaders = request.getHeaders();
            expect(headers.host).toBe(`localhost:${app.getPort()}`);
            expect(request.isSecure()).toBe(false);
            expect(request.getMethod()).toBe(HTTPMethod.GET);
            expect(request.getIP()).toBe('127.0.0.1');
            expect(request.getHostname()).toBe('localhost');
            expect(request.getQueryVariables().test).toBe('1');
            expect(request.getRequestSource()).toBeTruthy();
            expect(request.getForwardedIP()).toBe(null);
            expect(request.getParams()).toEqual({});
            expect(request.getHeader('Content-Type')).toBe(null);
        }));
        await app.doMockGet('/getHeaders?test=1');
    });

    it('can make parameter request()', async () => {
        app.attachMockHandler('/param/:name/', makeHandler(async (request: Request) => {
            expect(request.getParams()).toEqual({name:'bob'});
            expect(request.getParam('name')).toBe('bob');
        }));
        await app.doMockGet('/param/bob/');
    });

    it('can make form data requests', (done) => {
        app.attachMockHandler('/form/', makeHandler(async (request: Request) => {
            request.getForm().then((formData: IFormData) => {
                expect(formData.fields.key).toBe('value');
                expect(request.getHeader('Content-Type').indexOf('multipart/form-data')).toBeGreaterThan(-1);
                done();
            });
        }));

        let form = new FormData();
        form.append('key', 'value');
        form.submit(`http://localhost:${app.getPort()}/form/`);
    });

    it('can pipe/unpipe', (done) => {
        app.attachMockHandler('/pipes/', makeHandler(async (request: Request) => {
            return new Promise<void>((resolve, reject) => {
                let dumpFile: string = Path.resolve('./dump.txt');
                let writable: Writable = FileSystem.createWriteStream(dumpFile);

                writable.on('finish', () => {
                    request.unpipe(writable);
                    FileSystem.unlinkSync(dumpFile);
                    done();
                });

                request.pipe(writable);
            });
        }));
        app.doMockPost('/pipes/', 'asdfasdf');
    });

    describe('getAuthenticationToken', () => {
        let sleep = function (ms: number): Promise<void> {
            return new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, ms);
            });
        }

        it('can successfully get authentication token', async () => {
            let token: Token = await app.signToken({
                test: '123'
            });

            app.attachMockHandler('/auth/', makeHandler(async (request: Request) => {
                try {
                    let tokenData: any = await request.getAuthenticationToken();
                    expect(tokenData.test).toBe('123');
                }
                catch (ex) {
                    fail(ex);
                }
            }));
            await app.doMockGet('/auth/', {
                'X-BT-AUTH': token.getSignature()
            });
        });

        it('can handles invalid tokens', async () => {
            let tm: TokenManager = new TokenManager('badsecret');
            let token: Token = await tm.sign({
                test: '123'
            }, '1d')
            app.attachMockHandler('/auth/test1', makeHandler(async (request: Request) => {
                try {
                    await request.getAuthenticationToken();
                    fail('Unexpected success');
                }
                catch (ex) {
                    expect(ex).toBeInstanceOf(ResponseData);
                    expect((<ResponseData>ex).getStatus()).toBe(StatusCode.ERR_UNAUTHORIZED);
                    expect((<ResponseData>ex).getData()).toEqual({
                        code: JWTError.ERR_GENERIC,
                        reason: 'invalid signature'
                    });
                }
            }));
            await app.doMockGet('/auth/test1', {
                'X-BT-AUTH': token.getSignature()
            });
        });

        it('can handles expired tokens', async () => {
            let tm: TokenManager = getInstance().getTokenManager();
            let token: Token = await tm.sign({
                test: '123'
            }, '1s');

            app.attachMockHandler('/auth/test2', makeHandler(async (request: Request) => {
                try {
                    await request.getAuthenticationToken();
                    fail('Unexpected success');
                }
                catch (ex) {
                    expect(ex).toBeInstanceOf(ResponseData);
                    expect((<ResponseData>ex).getStatus()).toBe(StatusCode.ERR_UNAUTHORIZED);
                    expect((<ResponseData>ex).getData()).toEqual({
                        code: JWTError.ERR_EXPIRED,
                        reason: 'jwt expired'
                    });
                }
            }));
            await sleep(1100);
            await app.doMockGet('/auth/test2', {
                'X-BT-AUTH': token.getSignature()
            });
        });

        it('produces InternalError on uncaught errors', async () => {
            let tm: TokenManager = getInstance().getTokenManager();
            spyOn(tm, 'verify').and.callFake(() => {
                return Promise.reject(new Error('test'));
            });
            let token: Token = await tm.sign({
                test: '123'
            }, '1s')
            app.attachMockHandler('/auth/test3', makeHandler(async (request: Request) => {
                try {
                    await request.getAuthenticationToken();
                    fail('Unexpected success');
                }
                catch (ex) {
                    expect(ex).toBeInstanceOf(ResponseData);
                    expect((<ResponseData>ex).getStatus()).toBe(StatusCode.INTERNAL_ERROR);
                    expect((<ResponseData>ex).getData()).toEqual({
                        code: 0,
                        reason: 'An internal server error has occured. Please try again.'
                    });
                }
            }));
            await app.doMockGet('/auth/test3', {
                'X-BT-AUTH': token.getSignature()
            });
        });
    });
});
