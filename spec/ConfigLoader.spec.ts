
import {ConfigLoader} from '../src/ConfigLoader';
import {ExitCode} from '../src/ExitCode';

const TEST_DIR: string = './spec/support/configLoader/';

describe('ConfigLoader', () => {
    it('can load', (done) => {
        ConfigLoader.load(TEST_DIR + 'test1/').then((config: any) => {
            // Test the defaults
            expect(config.binding_ip).toBe('0.0.0.0');
            expect(config.port).toBe(8080);
            expect(config.authentication_header).toBe('X-BT-AUTH');
            expect(config.backend_authentication_header).toBe('X-BT-BACKEND-AUTH');
            expect(config.log_level).toBe('info | warning | error | fatal');
            expect(config.log_filters[0]).toBe('/TokenExpiredError/g');

            //Test specific configs
            expect(config.test1).toBe(true);
            expect(config.test2).toBe(false);
            expect(config.data.hello).toBe('world');
            expect(config.meta.name).toBe('test');
            expect(config.meta.debug).toBe(true);
            expect(config.meta.contributors[0]).toBe('norman');

            done();
        });
    });

    it('missing local config', (done) => {
        ConfigLoader.load(TEST_DIR + 'test2/').then((config: any) => {
            expect(config.test1).toBe(true);
            expect(config.meta.name).toBe('test');
            expect(config.meta.debug).toBe(false);
            done();
        });
    });

    it('Missing both configs', (done) => {
        ConfigLoader.load(TEST_DIR + 'test3/').catch((code: ExitCode) => {
            expect(code).toBe(ExitCode.MISSING_CONFIG);
            done();
        });
    });
});
