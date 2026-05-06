
import {TimeoutError} from '../../src/TimeoutError';
import {MockApplication} from '../support/TestApplication';
import {ErrorCode} from '../../src/ErrorCode';
import {StatusCode} from '../../src/StatusCode';

describe('TimeoutError', () => {
    let error: TimeoutError = null;
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
        error = new TimeoutError();
    });
    afterAll(async () => {
        await app.close();
    });

    it('has message', () => {
        expect(error.getMessage()).toBe('The requested resource could not be reached in time.');
    });

    it('has code', () => {
        expect(error.getCode()).toBe(ErrorCode.INTERNAL);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.ERR_REQUEST_TIMEOUT);
    });

    it('has locale code', () => {
        expect(error.getLocaleCode()).toBe('@breautek/storm/TimeoutError/message');
    });
});
