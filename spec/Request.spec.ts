
import {
    MockApplication
} from './support/TestApplication';

import {Request} from '../src/Request';
import {Response} from '../src/Response';
import {Handler} from '../src/Handler';
import * as http from 'http';

type HandlerCallback = (request: Request, response: Response) => void;

var makeHandler = (callback: HandlerCallback) => {
    return class MockHandler extends Handler {
        private _handleRequest(request: Request, response: Response): void {
            callback(request, response);
        }
        
        protected _get(request: Request, response: Response): void {
            this._handleRequest(request, response);
        }

        protected _post(request: Request, response: Response): void {
            this._handleRequest(request, response);
        }
    };
};

describe('Request', () => {
    var app: MockApplication = null;

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

    /*
    it('getHeaders()', (done) => {
        app.attachMockHandler(makeHandler((request: Request, response: Response) => {

        }));
        app.doMockRequest();
    });
    */

    it('getHeaders()', (done) => {
        app.attachMockHandler('/getHeaders', makeHandler((request: Request, response: Response) => {
            var headers: http.IncomingHttpHeaders = request.getHeaders();
            expect(headers.host).toBe('localhost:64321');
            done();
        }));
        app.doMockGet('/getHeaders');
    });
});
