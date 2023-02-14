
import {RawError} from '../../src/RawError';
import {IErrorResponse} from '../../src/StormError';
import {
    MockApplication
} from '../support/TestApplication';
import {StatusCode} from '../../src/StatusCode';

describe('DiskSpaceError', () => {
    let error: RawError = null;
    let app: MockApplication = null;

    let setup = (done: any) => {
        process.argv = [];
        app = new MockApplication();
        app.on('ready', () => {
            error = new RawError('test error', 123);
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

    it('has message', () => {
        expect(error.getMessage()).toBe('test error');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(123);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.INTERNAL_ERROR);
    });

    describe('getErrorResponse()', () => {
        it('name', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.name).toBe('RawError');
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
