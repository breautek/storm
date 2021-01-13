
import {DatabaseQueryError} from '../../src/DatabaseQueryError';
import {IErrorResponse} from '../../src/StormError';
import {
    MockApplication
} from '../support/TestApplication';
import {StatusCode} from '../../src/StatusCode';

describe('DatabaseQueryError', () => {
    let error: DatabaseQueryError = null;
    let app: MockApplication = null;

    let setup = (done: any) => {
        process.argv = [];
        app = new MockApplication();
        app.on('ready', () => {
            error = new DatabaseQueryError('SELECT * FROM test', 'Mock Error');
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
        expect(error.getMessage()).toBe('Internal Server Error');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(0);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.INTERNAL_ERROR);
    });

    it('private details', () => {
        expect(error.getPrivateDetails().query).toBe('SELECT * FROM test');
    });

    describe('getErrorResponse()', () => {
        it('name', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.name).toBe('DatabaseQueryError');
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
