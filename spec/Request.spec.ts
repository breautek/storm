
import {
    MockApplication
} from './support/TestApplication';

import {Request} from '../src/Request';
import {Response} from '../src/Response';
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

type HandlerCallback = (request: Request, response: Response) => void;

let makeHandler = (callback: HandlerCallback) => {
    return class MockHandler extends Handler {
        private $handleRequest(request: Request, response: Response): void {
            callback(request, response);
        }
        
        protected _get(request: Request, response: Response): Promise<void> {
            this.$handleRequest(request, response);
            return Promise.resolve();
        }

        protected _post(request: Request, response: Response): Promise<void> {
            this.$handleRequest(request, response);
            return Promise.resolve();
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

    it('can make request()', (done) => {
        app.attachMockHandler('/getHeaders', makeHandler((request: Request, response: Response) => {
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
            response.success();
            done();
        }));
        app.doMockGet('/getHeaders?test=1');
    });

    it('can make parameter request()', (done) => {
        app.attachMockHandler('/param/:name/', makeHandler((request: Request, response: Response) => {
            expect(request.getParams()).toEqual({name:'bob'});
            expect(request.getParam('name')).toBe('bob');
            response.success();
            done();
        }));
        app.doMockGet('/param/bob/');
    });

    it('can make form data requests', (done) => {
        app.attachMockHandler('/form/', makeHandler((request: Request, response: Response) => {
            request.getForm().then((formData: IFormData) => {
                expect(formData.fields.key).toBe('value');
                expect(request.getHeader('Content-Type').indexOf('multipart/form-data')).toBeGreaterThan(-1);
                response.success();
                done();
            });
        }));

        let form = new FormData();
        form.append('key', 'value');
        form.submit(`http://localhost:${app.getPort()}/form/`);
    });

    it('can pipe/unpipe', (done) => {
        app.attachMockHandler('/pipes/', makeHandler((request: Request, response: Response) => {
            let dumpFile: string = Path.resolve('./dump.txt');
            let writable: Writable = FileSystem.createWriteStream(dumpFile);

            writable.on('finish', () => {
                request.unpipe(writable);
                response.success();
                FileSystem.unlinkSync(dumpFile);
                done();
            });

            request.pipe(writable);
        }));
        app.doMockPost('/pipes/', 'asdfasdf');
    });

    describe('getAuthenticationToken', () => {
        it('can successfully get authentication token', (done) => {
            app.signToken({
                test: '123'
            }).then((token: Token) => {
                app.attachMockHandler('/auth/', makeHandler(async (request: Request, response: Response) => {
                    try {
                        let tokenData: any = await request.getAuthenticationToken();
                        expect(tokenData.test).toBe('123');
                        response.success();
                        done();
                    }
                    catch (ex) {
                        fail(ex);
                    }
                }));
                app.doMockGet('/auth/', {
                    'X-BT-AUTH': token.getSignature()
                });
            }).catch((error: any) => {
                fail(error);
            });
        });

        it('can handles invalid tokens', (done) => {
            let tm: TokenManager = new TokenManager('badsecret');
            tm.sign({
                test: '123'
            }, '1d').then((token: Token) => {
                app.attachMockHandler('/auth/test1', makeHandler(async (request: Request, response: Response) => {
                    try {
                        await request.getAuthenticationToken();
                        response.success();
                        fail('Unexpected success');
                    }
                    catch (ex) {
                        expect(ex).toBeInstanceOf(ResponseData);
                        expect((<ResponseData>ex).getStatus()).toBe(StatusCode.ERR_UNAUTHORIZED);
                        expect((<ResponseData>ex).getData()).toEqual({
                            code: JWTError.ERR_GENERIC,
                            reason: 'invalid signature'
                        });
                        response.success();
                        done();
                    }
                }));
                app.doMockGet('/auth/test1', {
                    'X-BT-AUTH': token.getSignature()
                });
            }).catch((error: any) => {
                fail(error);
            });
        });

        it('can handles expired tokens', (done) => {
            let tm: TokenManager = getInstance().getTokenManager();
            tm.sign({
                test: '123'
            }, '1s').then((token: Token) => {
                setTimeout(() => {
                    app.attachMockHandler('/auth/test2', makeHandler(async (request: Request, response: Response) => {
                        try {
                            await request.getAuthenticationToken();
                            response.success();
                            fail('Unexpected success');
                        }
                        catch (ex) {
                            expect(ex).toBeInstanceOf(ResponseData);
                            expect((<ResponseData>ex).getStatus()).toBe(StatusCode.ERR_UNAUTHORIZED);
                            expect((<ResponseData>ex).getData()).toEqual({
                                code: JWTError.ERR_EXPIRED,
                                reason: 'jwt expired'
                            });
                            response.success();
                            done();
                        }
                    }));
                    app.doMockGet('/auth/test2', {
                        'X-BT-AUTH': token.getSignature()
                    });
                }, 1100);
            }).catch((error: any) => {
                fail(error);
            });
        });

        it('produces InternalError on uncaught errors', (done) => {
            let tm: TokenManager = getInstance().getTokenManager();
            spyOn(tm, 'verify').and.callFake(() => {
                return Promise.reject(new Error('test'));
            });
            tm.sign({
                test: '123'
            }, '1s').then((token: Token) => {
                app.attachMockHandler('/auth/test3', makeHandler(async (request: Request, response: Response) => {
                    try {
                        await request.getAuthenticationToken();
                        response.success();
                        fail('Unexpected success');
                    }
                    catch (ex) {
                        expect(ex).toBeInstanceOf(ResponseData);
                        expect((<ResponseData>ex).getStatus()).toBe(StatusCode.INTERNAL_ERROR);
                        expect((<ResponseData>ex).getData()).toEqual({
                            code: 0,
                            reason: 'An internal server error has occured. Please try again.'
                        });
                        response.success();
                        done();
                    }
                }));
                app.doMockGet('/auth/test3', {
                    'X-BT-AUTH': token.getSignature()
                });
            }).catch((error: any) => {
                fail(error);
            });
        });
    });
});
