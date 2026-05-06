
import {ForbiddenError} from '../../src/ForbiddenError';
import {MockApplication} from '../support/TestApplication';
import {StatusCode} from '../../src/StatusCode';

describe('ForbiddenError', () => {
    let error: ForbiddenError = null;
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
        error = new ForbiddenError();
    });
    afterAll(async () => {
        await app.close();
    });

    it('has message', () => {
        expect(error.getMessage()).toBe('Access Denied.');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(0);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.ERR_FORBIDDEN);
    });

    it('has locale code', () => {
        expect(error.getLocaleCode()).toBe('@breautek/storm/ForbiddenError/message');
    });
});
