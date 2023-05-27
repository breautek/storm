
import {
    MockApplication
} from './support/TestApplication';
import { Middleware } from '../src/Middleware';
import {Request} from '../src/Request';
import {Response} from '../src/Response';
import { IRequestResponse } from '../src/IRequestResponse';
import { Handler } from '../src/Handler';
// import { InternalError } from '../src/InternalError';
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

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });
    afterAll(async () => {
        await app.close();
    });

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
        (<any>handler).$middlewares = [ middleware ];

        handler.get(request, response);

        expect(spy).toHaveBeenCalled();
    });

    it('executes middleware in sequence', (done) => {
        let spy: jasmine.Spy = spyOn(middleware, '_execute');

        let next: TestMiddleware = new TestMiddleware();
        let nextSpy: jasmine.Spy = spyOn(next, '_execute');
        (<any>handler).$middlewares = [ middleware, next ];

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

    it('handles middleware exceptions (general error)', async () => {
        let spy: jasmine.Spy = spyOn(middleware, '_execute');
        let rejectionSpy: jasmine.Spy = spyOn(<any>handler, '_onMiddlewareReject');
        let errorHandlerSpy: jasmine.Spy = spyOn(<any>handler, '$handleResponseError').and.callThrough();
        
        let next: TestMiddleware = new TestMiddleware();
        let nextSpy: jasmine.Spy = spyOn(next, '_execute');
        (<any>handler).$middlewares = [ middleware, next ];

        spy.and.callFake((request: any, response: any) => {
            return Promise.reject(new Error('test'));
        });

        nextSpy.and.callFake((request: any, response: any) => {
            return Promise.resolve({
                request,
                response
            });
        });

        await handler.get(request, response);
        expect(rejectionSpy).toHaveBeenCalled();
        expect(errorHandlerSpy).toHaveBeenCalled();
    });

    it('handles middleware exceptions (storm error)', async () => {
        let spy: jasmine.Spy = spyOn(middleware, '_execute');
        let rejectionSpy: jasmine.Spy = spyOn(<any>handler, '_onMiddlewareReject').and.callThrough();
        
        let next: TestMiddleware = new TestMiddleware();
        let nextSpy: jasmine.Spy = spyOn(next, '_execute');
        (<any>handler).$middlewares = [ middleware, next ];

        spy.and.callFake((request: any, response: any) => {
            return Promise.reject(new EntityNotFoundError('test'));
        });

        nextSpy.and.callFake((request: any, response: any) => {
            return Promise.resolve({
                request,
                response
            });
        });

        await handler.get(request, response);
        expect(rejectionSpy).toHaveBeenCalled();
        expect(response.error).toHaveBeenCalled();
        await handler.post(request, response);
        expect(rejectionSpy).toHaveBeenCalled();
        expect(response.error).toHaveBeenCalled();
        await handler.put(request, response);
        expect(rejectionSpy).toHaveBeenCalled();
        expect(response.error).toHaveBeenCalled();
        await handler.delete(request, response);
        expect(rejectionSpy).toHaveBeenCalled();
        expect(response.error).toHaveBeenCalled();
    });
});
