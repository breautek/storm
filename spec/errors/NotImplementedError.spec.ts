
import {NotImplementedError} from '../../src/NotImplementedError';
import { HTTPMethod } from '../../src/HTTPMethod';
import {IErrorResponse} from '../../src/StormError';
import {
    MockApplication
} from '../support/TestApplication';
import {ErrorCode} from '../../src/ErrorCode';
import {StatusCode} from '../../src/StatusCode';

describe('NotImplementedError', () => {
    let error: NotImplementedError = null;
    let app: MockApplication = null;

    let setup = (done: any) => {
        process.argv = [];
        app = new MockApplication();
        app.on('ready', () => {
            error = new NotImplementedError(HTTPMethod.GET);
            done();
        });
    };

    let deconstruct = (done: any) => {
        app.close().then(() => {
            app = null;
            error = null;
            done();
        });
    };

    beforeAll(setup);
    afterAll(deconstruct);

    it('GET has error message', () => {
        expect(new NotImplementedError(HTTPMethod.GET).getMessage()).toBe('Handler does not implement "GET".');
    });

    it('PUT has error message', () => {
        expect(new NotImplementedError(HTTPMethod.PUT).getMessage()).toBe('Handler does not implement "PUT".');
    });
    it('POST has error message', () => {
        expect(new NotImplementedError(HTTPMethod.POST).getMessage()).toBe('Handler does not implement "POST".');
    });
    it('DELETE has error message', () => {
        expect(new NotImplementedError(HTTPMethod.DELETE).getMessage()).toBe('Handler does not implement "DELETE".');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(ErrorCode.INTERNAL);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.INTERNAL_NOT_IMPLEMENTED);
    });

    describe('getErrorResponse()', () => {
        it('name', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.name).toBe('NotImplementedError');
        });

        it('message', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.message).toBe(error.getMessage());
        });

        it('code', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.code).toBe(error.getCode());
        });

        it('details', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.details).toEqual(error.getPublicDetails());
        });
    });
});
