
import {
    MockApplication
} from './support/TestApplication';
import { Middleware } from '../src/Middleware';
import {Request} from '../src/Request';
import {Response, TSupportedResponseTypes} from '../src/Response';
import { IRequestResponse } from '../src/IRequestResponse';
import { Handler } from '../src/Handler';
import {EntityNotFoundError} from '../src/EntityNotFoundError';

class TestMiddleware extends Middleware {
    public name: string;

    public _execute(request: Request, response: Response<TSupportedResponseTypes>): Promise<IRequestResponse> {
        return null;
    }
}

class TestHandler extends Handler {
    public _initMiddlewares(): Middleware[] {
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
        middleware = new TestMiddleware(app);
        handler = new TestHandler(app);
        status = null;
        request = {
            getForwardedIP: jest.fn().mockReturnValue('127.0.0.1'),
            getMethod: jest.fn(),
            getURL: jest.fn(),
            getHeader: jest.fn(),
            getIP: jest.fn(),
            getRoute: jest.fn()
        };
        response = {
            error: jest.fn(),
            setStatus: jest.fn().mockImplementation((value: any) => {
                status = value;
                return response;
            }),
            send: jest.fn(),
            getStatus: jest.fn().mockImplementation(() => {
                return status;
            })
        };
    });

    it('executes single middleware', () => {
        let spy: jest.SpyInstance = jest.spyOn(middleware, '_execute');
        (handler as any).$middlewares = [ middleware ];

        void handler.get(request, response);

        expect(spy).toHaveBeenCalled();
    });

    it('executes middleware in sequence', (done) => {
        let spy: jest.SpyInstance = jest.spyOn(middleware, '_execute');

        let next: TestMiddleware = new TestMiddleware(app);
        let nextSpy: jest.SpyInstance = jest.spyOn(next, '_execute');
        (handler as any).$middlewares = [ middleware, next ];

        spy.mockImplementation((request: any, response: any) => {
            response.setStatus(500);
            return Promise.resolve({
                request,
                response
            });
        });

        nextSpy.mockImplementation((request: any, response: any) => {
            expect(response.getStatus()).toBe(500);
            return Promise.resolve({
                request,
                response
            });
        });

        handler.get(request, response).then(() => {
            expect(nextSpy).toHaveBeenCalled();
            done();
        }).catch(done);
    });

    it('handles middleware exceptions (general error)', async () => {
        let spy: jest.SpyInstance = jest.spyOn(middleware, '_execute');
        let rejectionSpy: jest.SpyInstance = jest.spyOn((handler as any), '_onMiddlewareReject').mockImplementation(() => {});
        let errorHandlerSpy: jest.SpyInstance = jest.spyOn((handler as any), '$handleResponseError');
        
        let next: TestMiddleware = new TestMiddleware(app);
        let nextSpy: jest.SpyInstance = jest.spyOn(next, '_execute');
        (handler as any).$middlewares = [ middleware, next ];

        spy.mockImplementation((request: any, response: any) => {
            return Promise.reject(new Error('test'));
        });

        nextSpy.mockImplementation((request: any, response: any) => {
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
        let spy: jest.SpyInstance = jest.spyOn(middleware, '_execute');
        let rejectionSpy: jest.SpyInstance = jest.spyOn((handler as any), '_onMiddlewareReject');
        
        let next: TestMiddleware = new TestMiddleware(app);
        let nextSpy: jest.SpyInstance = jest.spyOn(next, '_execute');
        (handler as any).$middlewares = [ middleware, next ];

        spy.mockImplementation((request: any, response: any) => {
            return Promise.reject(new EntityNotFoundError('test'));
        });

        nextSpy.mockImplementation((request: any, response: any) => {
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
