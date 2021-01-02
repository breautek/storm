
import {
    MockApplication,
    IMockResponse
} from './support/TestApplication';

import {Request} from '../src/Request';
import {Response} from '../src/Response';
import {Handler} from '../src/Handler';
import * as FileSystem from 'fs';
import * as Path from 'path';
import {ResponseData} from '../src/ResponseData';
import {MockError} from './support/MockError';

type HandlerCallback = (request: Request, response: Response) => void;

let makeHandler = (callback: HandlerCallback) => {
    return class MockHandler extends Handler {
        private _handleRequest(request: Request, response: Response): void {
            callback(request, response);
        }
        
        protected _get(request: Request, response: Response): Promise<void> {
            this._handleRequest(request, response);
            return Promise.resolve();
        }

        protected _post(request: Request, response: Response): Promise<void> {
            this._handleRequest(request, response);
            return Promise.resolve();
        }
    };
};

describe('Response', () => {
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

    it('can respond', (done) => {
        app.attachMockHandler('/success', makeHandler((request: Request, response: Response) => {
            response.success();
        }));
        app.doMockGet('/success').then((response: IMockResponse) => {
            expect(response.status).toBe(204);
            done();
        });
    });

    it('can respond with data', (done) => {
        app.attachMockHandler('/successWithData', makeHandler((request: Request, response: Response) => {
            response.success('hello');
        }));
        app.doMockGet('/successWithData').then((response: IMockResponse) => {
            expect(response.status).toBe(200);
            expect(response.data).toBe('hello');
            done();
        });
    });

    it('can send string', (done) => {
        app.attachMockHandler('/sendString', makeHandler((request: Request, response: Response) => {
            response.send('hello123');
        }));
        app.doMockGet('/sendString').then((response: IMockResponse) => {
            expect(response.status).toBe(200);
            expect(response.data).toBe('hello123');
            done();
        });
    });

    it('can send ResponseData', (done) => {
        app.attachMockHandler('/withResponseData', makeHandler((request: Request, response: Response) => {
            let responseData: ResponseData = new ResponseData(400, 'test123');
            response.send(responseData);
        }));
        app.doMockGet('/withResponseData').then((response: IMockResponse) => {
            expect(response.status).toBe(400);
            expect(response.data).toBe('test123');
            done();
        });
    });

    it('can send stormError', (done) => {
        app.attachMockHandler('/stormError', makeHandler((request: Request, response: Response) => {
            let mockError: MockError = new MockError('mockerror');
            response.send(mockError);
        }));
        app.doMockGet('/stormError').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            let data: any = JSON.parse(response.data);
            expect(data.message).toBe('This is a mock error');
            expect(data.code).toBe(1);
            expect(data.details.mock).toBe(true);
            done();
        });
    });

    it('can redirect', (done) => {
        app.attachMockHandler('/redirect', makeHandler((request: Request, response: Response) => {
            response.redirect('http://google.com');
        }));
        app.doMockGet('/redirect').then((response: IMockResponse) => {
            expect(response.status).toBe(302);
            expect(response.data).toBe('Found. Redirecting to http://google.com');
            done();
        });
    });

    it('can set header', (done) => {
        app.attachMockHandler('/headers', makeHandler((request: Request, response: Response) => {
            response.setHeader('headerTest', 'headerValue');
            response.setHeaders({
                'X-Mock': 'true',
                'X-Header-Test': 'blah'
            });
            expect(response.isHeadersSent()).toBe(false);
            response.success();
            expect(response.isHeadersSent()).toBe(true);
        }));
        app.doMockGet('/headers').then((response: IMockResponse) => {
            expect(response.status).toBe(204);
            expect(response.headers.headertest).toBe('headerValue');
            expect(response.headers['x-mock']).toBe('true');
            expect(response.headers['x-header-test']).toBe('blah');
            done();
        });
    });

    it('can error (no provided data)', (done) => {
        app.attachMockHandler('/error1', makeHandler((request: Request, response: Response) => {
            response.error();
        }));
        app.doMockGet('/error1').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            let data: any = JSON.parse(response.data);
            expect(data.message).toBe('An internal server error has occured. Please try again.');
            expect(data.code).toBe(0);
            done();
        });
    });

    it('can error (provided string)', (done) => {
        app.attachMockHandler('/error2', makeHandler((request: Request, response: Response) => {
            response.error('mockerror');
        }));
        app.doMockGet('/error2').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            let data: any = JSON.parse(response.data);
            expect(data.message).toBe('An internal server error has occured. Please try again.');
            expect(data.code).toBe(0);
            done();
        });
    });

    it('can error (provided StormError)', (done) => {
        app.attachMockHandler('/error3', makeHandler((request: Request, response: Response) => {
            response.error(new MockError('mock'));
        }));
        app.doMockGet('/error3').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            let data: any = JSON.parse(response.data);
            expect(data.message).toBe('This is a mock error');
            expect(data.code).toBe(1);
            done();
        });
    });

    it('can error (provided ResponseData)', (done) => {
        app.attachMockHandler('/error4', makeHandler((request: Request, response: Response) => {
            response.error(new ResponseData(404, 'not found'));
        }));
        app.doMockGet('/error4').then((response: IMockResponse) => {
            expect(response.status).toBe(404);
            expect(response.data).toBe('not found');
            done();
        });
    });

    it('can send Error', (done) => {
        app.attachMockHandler('/internal', makeHandler((request: Request, response: Response) => {
            response.error(new Error('test'));
        }));
        app.doMockGet('/internal').then((response: IMockResponse) => {
            expect(response.status).toBe(500);
            done();
        });
    });

    it('can pipe', (done) => {
        app.attachMockHandler('/pipe', makeHandler((request: Request, response: Response) => {
            response.pipe(FileSystem.createReadStream(Path.resolve('./spec/support/sample.txt')));
        }));
        app.doMockGet('/pipe').then((response: IMockResponse) => {
            expect(response.status).toBe(200);
            expect(response.data).toBe('this is some text');
            done();
        });
    })
});
