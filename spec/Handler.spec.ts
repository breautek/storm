
import {MockApplication, IMockResponse} from './support/TestApplication';
import {Request} from '../src/Request';
import {Response} from '../src/Response';
import {Handler} from '../src/Handler';
import {MockDB} from './support/MockDB';
import {HTTPMethod} from '../src/HTTPMethod';
import {StatusCode} from '../src/StatusCode';

type HandlerCallback = (handler: Handler, request: Request, response: Response, method: HTTPMethod) => void;

let makeHandler = (callback: HandlerCallback) => {
    return class MockHandler extends Handler {
        private _handleRequest(request: Request, response: Response, method: HTTPMethod): void {
            callback(this, request, response, method);
        }
        
        protected _get(request: Request, response: Response): Promise<void> {
            this._handleRequest(request, response, HTTPMethod.GET);
            return Promise.resolve();
        }

        protected _post(request: Request, response: Response): Promise<void> {
            this._handleRequest(request, response, HTTPMethod.POST);
            return Promise.resolve();
        }

        protected _delete(request: Request, response: Response): Promise<void> {
            this._handleRequest(request, response, HTTPMethod.DELETE);
            return Promise.resolve();
        }

        protected _put(request: Request, response: Response): Promise<void> {
            this._handleRequest(request, response, HTTPMethod.PUT);
            return Promise.resolve();
        }
    };
}

describe('Handler', () => {
    let app: MockApplication = null;

    beforeAll((done) => {
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

    it('it has access token', (done) => {
        app.attachMockHandler('/access', makeHandler((handler: Handler, request: Request, response: Response, method: HTTPMethod) => {
            expect(handler.getAccessToken(request)).toBe('secretToken');
            response.success();
            done();
        }));
        app.doMockGet('/access', {
            'X-BT-Auth': 'secretToken'
        });
    });

    it('it has access to DB', (done) => {
        app.attachMockHandler('/db', makeHandler((handler: Handler, request: Request, response: Response, method: HTTPMethod) => {
            expect(handler.getDB() instanceof MockDB).toBe(true);
            response.success();
            done();
        }));
        app.doMockGet('/db');
    });

    it('can put', (done) => {
        app.attachMockHandler('/put', makeHandler((handler: Handler, request: Request, response: Response, method: HTTPMethod) => {
            expect(method).toBe(HTTPMethod.PUT);
            response.success();
            done();
        }));
        app.doMockPut('/put');
    });

    it('can get', (done) => {
        app.attachMockHandler('/get', makeHandler((handler: Handler, request: Request, response: Response, method: HTTPMethod) => {
            expect(method).toBe(HTTPMethod.GET);
            response.success();
            done();
        }));
        app.doMockGet('/get');
    });

    it('can post', (done) => {
        app.attachMockHandler('/post', makeHandler((handler: Handler, request: Request, response: Response, method: HTTPMethod) => {
            expect(method).toBe(HTTPMethod.POST);
            response.success();
            done();
        }));
        app.doMockPost('/post');
    });

    it('can delete', (done) => {
        app.attachMockHandler('/delete', makeHandler((handler: Handler, request: Request, response: Response, method: HTTPMethod) => {
            expect(method).toBe(HTTPMethod.DELETE);
            response.success();
            done();
        }));
        app.doMockDelete('/delete');
    });

    it('get not impl', (done) => {
        app.attachMockHandler('/getNotImpl', Handler);
        app.doMockGet('/getNotImpl').then((response: IMockResponse) => {
            expect(response.status).toBe(StatusCode.INTERNAL_NOT_IMPLEMENTED);
            done();
        });
    });

    it('post not impl', (done) => {
        app.attachMockHandler('/postNotImpl', Handler);
        app.doMockPost('/postNotImpl').then((response: IMockResponse) => {
            expect(response.status).toBe(StatusCode.INTERNAL_NOT_IMPLEMENTED);
            done();
        });
    });

    it('delete not impl', (done) => {
        app.attachMockHandler('/deleteNotImpl', Handler);
        app.doMockDelete('/deleteNotImpl').then((response: IMockResponse) => {
            expect(response.status).toBe(StatusCode.INTERNAL_NOT_IMPLEMENTED);
            done();
        });
    });

    it('put not impl', (done) => {
        app.attachMockHandler('/putNotImpl', Handler);
        app.doMockPut('/putNotImpl').then((response: IMockResponse) => {
            expect(response.status).toBe(StatusCode.INTERNAL_NOT_IMPLEMENTED);
            done();
        });
    });
});
