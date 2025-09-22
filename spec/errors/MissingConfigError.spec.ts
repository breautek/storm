import { ExitCode } from '../../src/ExitCode';
import { MissingConfigError } from '../../src/MissingConfigError';
import { StatusCode } from '../../src/StatusCode';
import { MockApplication } from '../support/TestApplication';

describe('MissingConfigError', () => {
    let e: MissingConfigError = null;
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
        e = new MissingConfigError('/path');
    });

    it('getMessage should return the constructor message', () => {
        expect(e.getMessage()).toBe('Storm cannot find config at /path');
    });

    it('getHTTPCode should be INTERNAL ERROR', () => {
        expect(e.getHTTPCode()).toBe(StatusCode.INTERNAL_ERROR);
    });

    it('getCode should return null', () => {
        expect(e.getCode()).toBe(null);
    });

    it('getLocaleCode should return IllegalStateError/message', () => {
        expect(e.getLocaleCode()).toBe('@breautek/storm/MissingConfigError/message');
    });

    it('getLocaleParameters should return a path property', () => {
        expect(e.getLocaleParameters()).toEqual({
            path: '/path'
        });
    });

    it('getExitCode returns MISSING_CONFIG', () => {
        expect(e.getExitCode()).toBe(ExitCode.MISSING_CONFIG);
    });
});
