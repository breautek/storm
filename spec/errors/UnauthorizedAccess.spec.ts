
import * as api from '../../src/api';
import {UnauthorizedAccess} from '../../src/UnauthorizedAccess';
import {IErrorResponse} from '../../src/StormError';
import {
    MockApplication
} from '../support/TestApplication';

describe('UnauthorizedAccess', () => {
    let error: UnauthorizedAccess = null;
    let app: MockApplication = null;

    let setup = (done: any) => {
        app = new MockApplication();
        app.on('ready', () => {
            error = new UnauthorizedAccess('test');
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

    it('is exposed in public API', () => {
        expect(api.UnauthorizedAccess).toBeTruthy();
    });

    it('has message', () => {
        expect(error.getMessage()).toBe('Access Denied.');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(api.ErrorCode.UNAUTHORIZED_ACCESS);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(api.StatusCode.ERR_FORBIDDEN);
    });

    describe('getErrorResponse()', () => {
        it('name', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.name).toBe('UnauthorizedAccess');
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
