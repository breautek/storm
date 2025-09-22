import { IllegalStateError } from '../../src/IllegalStateError';
import { StatusCode } from '../../src/StatusCode';
import { MockApplication } from '../support/TestApplication';

describe('IllegalStateError', () => {
    let e: IllegalStateError = null;
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });

    afterAll(async () => {
        await app.close();
    });

    beforeEach(() => {
        e = new IllegalStateError('Test State');
    });

    it('getMessage should return the constructor message', () => {
        expect(e.getMessage()).toBe('Test State');
    });

    it('getHTTPCode should be BAD REQUEST', () => {
        expect(e.getHTTPCode()).toBe(StatusCode.ERR_BAD_REQUEST);
    });

    it('getCode should return 0', () => {
        expect(e.getCode()).toBe(0);
    });

    it('getLocaleCode should return IllegalStateError/message', () => {
        expect(e.getLocaleCode()).toBe('@breautek/storm/IllegalStateError/message');
    });

    it('getLocaleParameters should return a message property', () => {
        expect(e.getLocaleParameters()).toEqual({
            message: 'Test State'
        });
    });

    it('getExitCode returns null', () => {
        expect(e.getExitCode()).toBe(null);
    });
});
