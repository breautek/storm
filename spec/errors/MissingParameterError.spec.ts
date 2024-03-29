import {MissingParameterError} from '../../src/MissingParameterError';
import {IErrorResponse} from '../../src/StormError';
import {
    MockApplication
} from '../support/TestApplication';
import {ErrorCode} from '../../src/ErrorCode';
import {StatusCode} from '../../src/StatusCode';

describe('MissingParameterError', () => {
    let error: MissingParameterError = null;
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
        error = new MissingParameterError('testParam');
    });
    afterAll(async () => {
        await app.close();
    });

    it('has message', () => {
        expect(error.getMessage()).toBe('Missing parameter (testParam).');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(ErrorCode.MISSING_PARAMETER);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.ERR_BAD_REQUEST);
    });

    describe('getErrorResponse()', () => {
        it('name', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.name).toBe('MissingParameterError');
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
