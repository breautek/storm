
import {
    MockApplication
} from './support/TestApplication';
import { Middleware } from '../src/Middleware';
import {Request} from '../src/Request';
import {Response} from '../src/Response';
import { IRequestResponse } from '../src/IRequestResponse';
import { Handler } from '../src/Handler';
import { InternalError } from '../src/InternalError';
import {EntityNotFoundError} from '../src/EntityNotFoundError';

class TestMiddleware extends Middleware {
    public name: string;

    public _execute(request: Request, response: Response): Promise<IRequestResponse> {
        return null;
    }
}

class TestHandler extends Handler {
    public _initMiddlewares(): Array<Middleware> {
        return [];
    }
}

describe('Middlewares', () => {
    let app: MockApplication = null;

    let setup = (done: any) => {
        process.argv = [];
        app = new MockApplication();
        app.on('ready', () => {
            done();
        });
    };

    let deconstruct = (done: any) => {
        app.close().then(() => {
            app = null;
            done();
        });
    };

    beforeAll(setup);
    afterAll(deconstruct);

    let middleware: TestMiddleware = null;
    let request: any = null;
    let response: any = null;
    let handler: TestHandler = null;
    let status: any = null;

    beforeEach(() => {
        middleware = new TestMiddleware();
        handler = new TestHandler(app);
        status = null;
        request = {
            getForwardedIP: jasmine.createSpy('getForwardedIP').and.returnValue('127.0.0.1'),
            getMethod: jasmine.createSpy('getMethod'),
            getURL: jasmine.createSpy('getURL'),
            getHeader: jasmine.createSpy('user-agent'),
            getIP: jasmine.createSpy('getIP')
        };
        response = {
            error: jasmine.createSpy('error'),
            setStatus: jasmine.createSpy('setStatus').and.callFake((value: any) => {
                status = value;
                return response;
            }),
            send: jasmine.createSpy('send'),
            getStatus: jasmine.createSpy('getStatus').and.callFake(() => {
                return status;
            })
        };
    });

    it('executes single middleware', () => {
        let spy: jasmine.Spy = spyOn(middleware, '_execute');
        (<any>handler)._middlewares = [ middleware ];

        handler.get(request, response);

        expect(spy).toHaveBeenCalled();
    });

    it('executes middleware in sequence', (done) => {
        let spy: jasmine.Spy = spyOn(middleware, '_execute');

        let next: TestMiddleware = new TestMiddleware();
        let nextSpy: jasmine.Spy = spyOn(next, '_execute');
        (<any>handler)._middlewares = [ middleware, next ];

        spy.and.callFake((request: any, response: any) => {
            response.setStatus(500);
            return Promise.resolve({
                request,
                response
            });
        });

        nextSpy.and.callFake((request: any, response: any) => {
            expect(response.getStatus()).toBe(500);
            return Promise.resolve({
                request,
                response
            });
        });

        handler.get(request, response).then(() => {
            expect(nextSpy).toHaveBeenCalled();
            done();
        });
    });

    it('handles middleware exceptions (general error)', (done) => {
        let spy: jasmine.Spy = spyOn(middleware, '_execute');
        let rejectionSpy: jasmine.Spy = spyOn(<any>handler, '_onMiddlewareReject');
        
        let next: TestMiddleware = new TestMiddleware();
        let nextSpy: jasmine.Spy = spyOn(next, '_execute');
        (<any>handler)._middlewares = [ middleware, next ];

        spy.and.callFake((request: any, response: any) => {
            return Promise.reject(new Error('test'));
        });

        nextSpy.and.callFake((request: any, response: any) => {
            return Promise.resolve({
                request,
                response
            });
        });

        handler.get(request, response).catch((error: any) => {
            expect(error instanceof InternalError).toBe(true);
            expect(rejectionSpy).toHaveBeenCalled();
            done();
        });
    });

    it('handles middleware exceptions (storm error)', (done) => {
        let spy: jasmine.Spy = spyOn(middleware, '_execute');
        let rejectionSpy: jasmine.Spy = spyOn(<any>handler, '_onMiddlewareReject').and.callThrough();
        
        let next: TestMiddleware = new TestMiddleware();
        let nextSpy: jasmine.Spy = spyOn(next, '_execute');
        (<any>handler)._middlewares = [ middleware, next ];

        spy.and.callFake((request: any, response: any) => {
            return Promise.reject(new EntityNotFoundError('test'));
        });

        nextSpy.and.callFake((request: any, response: any) => {
            return Promise.resolve({
                request,
                response
            });
        });

        handler.get(request, response).catch((error: any) => {
            console.error('ERROR', error);
            expect(error instanceof EntityNotFoundError).toBe(true);
            expect(rejectionSpy).toHaveBeenCalled();
            expect(response.error).toHaveBeenCalled();
            return handler.post(request, response);
        }).catch((error: any) => {
            expect(error instanceof EntityNotFoundError).toBe(true);
            expect(rejectionSpy).toHaveBeenCalled();
            expect(response.error).toHaveBeenCalled();
            return handler.put(request, response);
        }).catch((error: any) => {
            expect(error instanceof EntityNotFoundError).toBe(true);
            expect(rejectionSpy).toHaveBeenCalled();
            expect(response.error).toHaveBeenCalled();
            return handler.delete(request, response);
        }).catch((error: any) => {
            expect(error instanceof EntityNotFoundError).toBe(true);
            expect(rejectionSpy).toHaveBeenCalled();
            expect(response.error).toHaveBeenCalled();
            done();
        });
    });
});
