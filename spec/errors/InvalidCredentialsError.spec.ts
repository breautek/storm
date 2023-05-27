
import {InvalidCredentialsError} from '../../src/InvalidCredentialsError';
import {IErrorResponse} from '../../src/StormError';
import {
    MockApplication
} from '../support/TestApplication';
import {ErrorCode} from '../../src/ErrorCode';
import {StatusCode} from '../../src/StatusCode';

describe('InvalidCredentialsError', () => {
    let error: InvalidCredentialsError = null;
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
        error = new InvalidCredentialsError();
    });
    afterAll(async () => {
        await app.close();
    });

    it('has message', () => {
        expect(error.getMessage()).toBe('Username or password is incorrect. Please check your username and password.');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(ErrorCode.INVALID_CREDENTIALS);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.ERR_UNAUTHORIZED);
    });

    describe('getErrorResponse()', () => {
        it('name', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.name).toBe('InvalidCredentialsError');
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
