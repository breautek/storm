
import {MockApplication, IMockResponse} from './support/TestApplication';
import {Request} from '../src/Request';
import {Handler} from '../src/Handler';
import {HTTPMethod} from '../src/HTTPMethod';
import {StatusCode} from '../src/StatusCode';

type HandlerCallback = (handler: Handler, request: Request, method: HTTPMethod) => Promise<any>;

let makeHandler = (callback: HandlerCallback): any => {
    return class MockHandler extends Handler {
        private async $handleRequest(request: Request, method: HTTPMethod): Promise<any> {
            return callback(this, request, method);
        }
        
        protected async _get(request: Request): Promise<any> {
            return this.$handleRequest(request, HTTPMethod.GET);
        }

        protected async _post(request: Request): Promise<any> {
            return this.$handleRequest(request, HTTPMethod.POST);
        }

        protected async _delete(request: Request): Promise<any> {
            return this.$handleRequest(request, HTTPMethod.DELETE);
        }

        protected async _put(request: Request): Promise<any> {
            return this.$handleRequest(request, HTTPMethod.PUT);
        }
    };
}

describe('Handler', () => {
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });

    afterAll(async () => {
        await app.close();
    });

    it('it has access token', async () => {
        app.attachMockHandler('/access', makeHandler(async (handler: Handler, request: Request, method: HTTPMethod) => {
            expect(handler.getAccessToken(request)).toBe('secretToken');
        }));
        await app.doMockGet('/access', {
            'X-BT-Auth': 'secretToken'
        });
    });

    it('it has access to app', async () => {
        app.attachMockHandler('/app', makeHandler(async (handler: Handler, request: Request, method: HTTPMethod) => {
            expect(handler.getApplication() instanceof MockApplication).toBe(true);
        }));
        await app.doMockGet('/app');
    });

    it('can put', async () => {
        app.attachMockHandler('/put', makeHandler(async (handler: Handler, request: Request, method: HTTPMethod) => {
            expect(method).toBe(HTTPMethod.PUT);
        }));
        await app.doMockPut('/put');
    });

    it('can get', async () => {
        app.attachMockHandler('/get', makeHandler(async (handler: Handler, request: Request, method: HTTPMethod) => {
            expect(method).toBe(HTTPMethod.GET);
        }));
        await app.doMockGet('/get');
    });

    it('can post', async () => {
        app.attachMockHandler('/post', makeHandler(async (handler: Handler, request: Request, method: HTTPMethod) => {
            expect(method).toBe(HTTPMethod.POST);
        }));
        await app.doMockPost('/post');
    });

    it('can delete', async () => {
        app.attachMockHandler('/delete', makeHandler(async (handler: Handler, request: Request, method: HTTPMethod) => {
            expect(method).toBe(HTTPMethod.DELETE);
        }));
        await app.doMockDelete('/delete');
    });

    it('get not impl', async () => {
        app.attachMockHandler('/getNotImpl', Handler);
        await app.doMockGet('/getNotImpl').then((response: IMockResponse) => {
            expect(response.status).toBe(StatusCode.INTERNAL_NOT_IMPLEMENTED);
        });
    });

    it('post not impl', async () => {
        app.attachMockHandler('/postNotImpl', Handler);
        await app.doMockPost('/postNotImpl').then((response: IMockResponse) => {
            expect(response.status).toBe(StatusCode.INTERNAL_NOT_IMPLEMENTED);
        });
    });

    it('delete not impl', async () => {
        app.attachMockHandler('/deleteNotImpl', Handler);
        await app.doMockDelete('/deleteNotImpl').then((response: IMockResponse) => {
            expect(response.status).toBe(StatusCode.INTERNAL_NOT_IMPLEMENTED);
        });
    });

    it('put not impl', async () => {
        app.attachMockHandler('/putNotImpl', Handler);
        await app.doMockPut('/putNotImpl').then((response: IMockResponse) => {
            expect(response.status).toBe(StatusCode.INTERNAL_NOT_IMPLEMENTED);
        });
    });
});
