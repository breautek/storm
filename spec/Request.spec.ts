
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

describe('Request', () => {
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

    it('can make request()', (done) => {
        app.attachMockHandler('/getHeaders', makeHandler((request: Request, response: Response) => {
            let headers: http.IncomingHttpHeaders = request.getHeaders();
            expect(headers.host).toBe('localhost:64321');
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
        form.submit('http://localhost:64321/form/');
    });

    it('can pipe/unpipe', (done) => {
        app.attachMockHandler('/pipes/', makeHandler((request: Request, response: Response) => {
            let writable: Writable = FileSystem.createWriteStream(Path.resolve('./dump.txt'));
            writable.on('error', (error) => {
                console.log(error);
            });

            writable.on('finish', () => {
                request.unpipe(writable);
                response.success(); 
                done();
            });

            request.pipe(writable);
        }));
        app.doMockPost('/pipes/', 'asdfasdf');
    });
});
