
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
        protected _post(request: Request, response: Response): void {
            callback(request, response);
        }
    };
};

describe('Application', () => {
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
        app.attachMockHandler(makeHandler((request: Request, response: Response) => {
            var headers: http.IncomingHttpHeaders = request.getHeaders();
            process.stdout.write(JSON.stringify(headers));
            done();
        }));
        app.doMockRequest();
    });
});
