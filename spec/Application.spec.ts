
import {TestApplication} from './support/TestApplication';
import {Logger} from '../src/Logger';
import {TokenManager} from '../src/TokenManager';
import { LogSeverity } from '../src/LogSeverity';
import {HTTPMethod} from '../src/HTTPMethod';
import {StatusCode} from '../src/StatusCode';
import { MockDB } from './support/MockDB';
import * as http from 'http';
import * as AppInstance from '../src/instance';

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
        expect(app.getName()).toBe('TestApplication');
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
        // Test offers no command line args
        expect(JSON.stringify(app.getCmdLineArgs())).toBe('{}');
    });

    it('Sets default log properly', () => {
        expect(app.getDefaultLogLevel()).toBe(LogSeverity.TRACE);
    });

    it('it has a MockDB', () => {
        expect(app.getDB() instanceof MockDB).toBe(true);
    });

    it('Accepts GET Requests', (done) => {
        var req: http.ClientRequest = http.request({
            method: HTTPMethod.GET,
            host: '127.0.0.1',
            port: 64321,
            path: '/echo'
        }, (res: http.IncomingMessage): void => {
            expect(res.statusCode).toBe(StatusCode.OK_NO_CONTENT);
            done();
        });
        req.end();
    });

    it('has instance set', () => {
        expect(AppInstance.getInstance()).toBe(app);
    });

    it('has application logger via instance', () => {
        expect(AppInstance.getApplicationLogger()).toBe(app.getLogger());
    });
});
