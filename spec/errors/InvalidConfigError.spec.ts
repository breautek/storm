
import {InvalidConfigError} from '../../src/InvalidConfigError';
import {IErrorResponse} from '../../src/StormError';
import {
    MockApplication
} from '../support/TestApplication';
import {StatusCode} from '../../src/StatusCode';
import { ExitCode } from '../../src/ExitCode';
import { IConfig } from '../../src/IConfig';

describe('InvalidConfigError', () => {
    let error: InvalidConfigError<IConfig> = null;
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
        error = new InvalidConfigError(app.getConfig(), []);
    });
    afterAll(async () => {
        await app.close();
    });

    it('has message', () => {
        expect(error.getMessage()).toMatch(/Storm config has issues:/);
    });

    it('has code', () => {
        expect(error.getCode()).toBe(null);
    });

    it('has HTTP code', () => {
        expect(error.getHTTPCode()).toBe(StatusCode.INTERNAL_ERROR);
    });

    it('has exit code', () => {
        expect(error.getExitCode()).toBe(ExitCode.INVALID_CONFIG);
    });

    describe('getErrorResponse()', () => {
        it('name', () => {
            let r: IErrorResponse = error.getErrorResponse();
            expect(r.name).toBe('InvalidConfigError');
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
