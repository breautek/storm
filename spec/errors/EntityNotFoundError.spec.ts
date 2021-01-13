
import {EntityNotFoundError} from '../../src/EntityNotFoundError';
import {IErrorResponse} from '../../src/StormError';
import {
    MockApplication
} from '../support/TestApplication';
import {ErrorCode} from '../../src/ErrorCode';
import {StatusCode} from '../../src/StatusCode';

describe('EntityNotFoundError', () => {
    let error: EntityNotFoundError = null;
    let app: MockApplication = null;

    let setup = (done: any) => {
        process.argv = [];
        app = new MockApplication();
        app.on('ready', () => {
            error = new EntityNotFoundError('User');
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
        expect(error.getMessage()).toBe('User does not exists.');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(ErrorCode.INVALID_VALUE);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.ERR_NOT_FOUND);
    });

    describe('getErrorResponse()', () => {
        it('name', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.name).toBe('EntityNotFoundError');
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
