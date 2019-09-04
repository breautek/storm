
import * as api from '../../src/api';
import {UnauthorizedAccess} from '../../src/UnauthorizedAccess';

import {
    MockApplication
} from '../support/TestApplication';

describe('UnauthorizedAccess', () => {
    const error: UnauthorizedAccess = new UnauthorizedAccess('test');
    let app: MockApplication = null;

    beforeAll((done) => {
        app = new MockApplication();
        app.on('ready', () => {
            done();
        });
    });

    afterAll((done) => {
        app.close().then(() => {
            app = null;
            done();
        });
    });

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
});
