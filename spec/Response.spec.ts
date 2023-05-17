
import {
    MockApplication,
    IMockResponse
} from './support/TestApplication';

import {Request} from '../src/Request';
import {Handler} from '../src/Handler';
import * as FileSystem from 'fs';
import * as Path from 'path';
import {ResponseData} from '../src/ResponseData';
import {MockError} from './support/MockError';
import { StatusCode } from '../src/StatusCode';

type HandlerCallback = (request: Request) => Promise<any>;

let makeHandler = (callback: HandlerCallback) => {
    return class MockHandler extends Handler {
        private async $handleRequest(request: Request): Promise<any> {
            return callback(request);
        }
        
        protected async _get(request: Request): Promise<any> {
            return this.$handleRequest(request);
        }

        protected async _post(request: Request): Promise<any> {
            return this.$handleRequest(request);
        }
    };
};

describe('Response', () => {
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

    it('can respond', async () => {
        app.attachMockHandler('/success', makeHandler(async (request: Request) => {}));
        await app.doMockGet('/success').then((response: IMockResponse) => {
            expect(response.status).toBe(204);
        });
    });

    it('can respond with data', async () => {
        app.attachMockHandler('/successWithData', makeHandler(async (request: Request) => {
            return 'hello';
        }));
        await app.doMockGet('/successWithData').then((response: IMockResponse) => {
            expect(response.status).toBe(200);
            expect(response.data).toBe('hello');
        });
    });

    it('can send string', async () => {
        app.attachMockHandler('/sendString', makeHandler(async (request: Request) => {
            return 'hello123';
        }));
        await app.doMockGet('/sendString').then((response: IMockResponse) => {
            expect(response.status).toBe(200);
            expect(response.data).toBe('hello123');
        });
    });

    it('can send number', async () => {
        app.attachMockHandler('/sendNumber', makeHandler(async (request: Request) => {
            return 123;
        }));
        await app.doMockGet('/sendNumber').then((response: IMockResponse) => {
            expect(response.status).toBe(200);
            expect(response.data).toBe("123");
        });
    });

    it('can send ResponseData', async () => {
        app.attachMockHandler('/withResponseData', makeHandler(async (request: Request) => {
            let responseData: ResponseData = new ResponseData(400, 'test123');
            return responseData;
        }));
        await app.doMockGet('/withResponseData').then((response: IMockResponse) => {
            expect(response.status).toBe(400);
            expect(response.data).toBe('test123');
        });
    });

    it('can send stormError', async () => {
        app.attachMockHandler('/stormError', makeHandler(async (request: Request) => {
            let mockError: MockError = new MockError('mockerror');
            return mockError;
        }));
        await app.doMockGet('/stormError').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            let data: any = JSON.parse(response.data);
            expect(data.message).toBe('This is a mock error');
            expect(data.code).toBe(1);
            expect(data.details.mock).toBe(true);
        });
    });

    it('can throw stormError', async () => {
        app.attachMockHandler('/stormError', makeHandler(async (request: Request) => {
            let mockError: MockError = new MockError('mockerror');
            throw mockError;
        }));
        await app.doMockGet('/stormError').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            let data: any = JSON.parse(response.data);
            expect(data.message).toBe('This is a mock error');
            expect(data.code).toBe(1);
            expect(data.details.mock).toBe(true);
        });
    });

    it('can redirect', async () => {
        app.attachMockHandler('/redirect', makeHandler(async (request: Request) => {
            let response: ResponseData = new ResponseData(StatusCode.REDIR_FOUND);
            response.redirect('http://google.com');
            return response;
        }));
        await app.doMockGet('/redirect').then((response: IMockResponse) => {
            expect(response.status).toBe(302);
            expect(response.data).toBe('Found. Redirecting to http://google.com');
        });
    });

    it('can set header', async () => {
        app.attachMockHandler('/headers', makeHandler(async (request: Request) => {
            let response: ResponseData = new ResponseData(StatusCode.OK_NO_CONTENT);
            response.setHeader('headerTest', 'headerValue');
            response.setHeader('X-Mock', 'true');
            response.setHeader('X-Header-Test', 'blah');
            return response;
        }));
        await app.doMockGet('/headers').then((response: IMockResponse) => {
            expect(response.status).toBe(204);
            expect(response.headers.headertest).toBe('headerValue');
            expect(response.headers['x-mock']).toBe('true');
            expect(response.headers['x-header-test']).toBe('blah');
        });
    });

    it('can error (no provided data)', async () => {
        app.attachMockHandler('/error1', makeHandler((request: Request) => {
            throw new Error();
        }));
        await app.doMockGet('/error1').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            let data: any = JSON.parse(response.data);
            expect(data.message).toBe('An internal server error has occured. Please try again.');
            expect(data.code).toBe(0);
        });
    });

    it('can error (provided string)', async () => {
        app.attachMockHandler('/error2', makeHandler(async (request: Request) => {
            throw 'mockerror';
        }));
        await app.doMockGet('/error2').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            let data: any = JSON.parse(response.data);
            expect(data.message).toBe('An internal server error has occured. Please try again.');
            expect(data.code).toBe(0);
        });
    });

    it('can error (provided StormError)', async () => {
        app.attachMockHandler('/error3', makeHandler(async (request: Request) => {
            throw new MockError('mock');
        }));
        await app.doMockGet('/error3').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            let data: any = JSON.parse(response.data);
            expect(data.message).toBe('This is a mock error');
            expect(data.code).toBe(1);
        });
    });

    it('can error (provided ResponseData)', async () => {
        app.attachMockHandler('/error4', makeHandler((request: Request) => {
            throw new ResponseData(404, 'not found');
        }));
        await app.doMockGet('/error4').then((response: IMockResponse) => {
            expect(response.status).toBe(404);
            expect(response.data).toBe('not found');
        });
    });

    it('can send Error', async () => {
        app.attachMockHandler('/internal', makeHandler((request: Request) => {
            throw new Error('test');
        }));
        await app.doMockGet('/internal').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
        });
    });

    it('can pipe', async () => {
        app.attachMockHandler('/pipe', makeHandler(async (request: Request) => {
            let response: ResponseData = new ResponseData(StatusCode.OK, FileSystem.createReadStream(Path.resolve('./spec/support/sample.txt')));
            return response;
        }));
        await app.doMockGet('/pipe').then((response: IMockResponse) => {
            expect(response.status).toBe(200);
            expect(response.data).toBe('this is some text');
        });
    })
});
