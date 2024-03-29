
import {ExpiredTokenError} from '../../src/ExpiredTokenError';
import {IErrorResponse} from '../../src/StormError';
import {
    MockApplication
} from '../support/TestApplication';
import {ErrorCode} from '../../src/ErrorCode';
import {StatusCode} from '../../src/StatusCode';

describe('ExpiredTokenError', () => {
    let error: ExpiredTokenError = null;
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
        error = new ExpiredTokenError();
    });
    afterAll(async () => {
        await app.close();
    });

    it('has message', () => {
        expect(error.getMessage()).toBe('Your login session has expired.');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(ErrorCode.EXPIRED_TOKEN);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.ERR_UNAUTHORIZED);
    });

    describe('getErrorResponse()', () => {
        it('name', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.name).toBe('ExpiredTokenError');
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
