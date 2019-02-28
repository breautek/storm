
import {TestApplication} from './support/TestApplication';
import {Logger} from '../src/Logger';
import {TokenManager} from '../src/TokenManager';
import { LogSeverity } from '../src/LogSeverity';

describe('Application', () => {
    var app: TestApplication = null;

    beforeAll((done) => {
        app = new TestApplication();
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

    it('getRequestSizeLimit returns a number by default', () => {
        expect(typeof app.getRequestSizeLimit()).toBe('number');
    });

    it('getName()', () => {
        expect(app.getName()).toBe("TestApplication");
    });

    it('getLogger() is instanceof Logger', () => {
        expect(app.getLogger() instanceof Logger).toBe(true);
    });

    it('config has binding_ip', () => {
        var config: Object = app.getConfig();
        expect(config.hasOwnProperty('binding_ip')).toBe(true);
    });

    it('config has port', () => {
        var config: Object = app.getConfig();
        expect(config.hasOwnProperty('port')).toBe(true);
    });

    it('config has authentication_header', () => {
        var config: Object = app.getConfig();
        expect(config.hasOwnProperty('authentication_header')).toBe(true);
    });

    it('config has backend_authentication_header', () => {
        var config: Object = app.getConfig();
        expect(config.hasOwnProperty('backend_authentication_header')).toBe(true);
    });

    it('config has backend_authentication_secret', () => {
        var config: Object = app.getConfig();
        expect(config.hasOwnProperty('backend_authentication_secret')).toBe(true);
    });

    it('config has log_level', () => {
        var config: Object = app.getConfig();
        expect(config.hasOwnProperty('log_level')).toBe(true);
    });

    it('Supports TokenManager', () => {
        var manager: TokenManager = new TokenManager('secret');
        app.setTokenManager(manager);
        expect(app.getTokenManager()).toBe(manager);
        app.setTokenManager(null);
    });

    it('getCmdLineArgs()', () => {
        //Test offers no command line args
        expect(JSON.stringify(app.getCmdLineArgs())).toBe('{}');
    });

    it('Sets default log properly', () => {
        expect(app.getDefaultLogLevel()).toBe(LogSeverity.TRACE);
    });
});
