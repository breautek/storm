/* eslint-disable no-prototype-builtins */

import {
    TestApplication,
    NoServerApp,
    ConfigTestApp
} from './support/TestApplication';
import {Logger} from '../src/Logger';
import {TokenManager} from '../src/TokenManager';
import { LogSeverity } from '../src/LogSeverity';
import {HTTPMethod} from '../src/HTTPMethod';
import {StatusCode} from '../src/StatusCode';
import { MockDB } from './support/MockDB';
import * as http from 'http';
import * as AppInstance from '../src/instance';
import { CommanderStatic } from 'commander';
import * as ChildProcess from 'child_process';

describe('Application', () => {
    let app: TestApplication = null;
    let originalLogger: Logger = null;

    beforeAll((done) => {
        app = new TestApplication();
        app.on('ready', () => {
            originalLogger = app.getLogger();
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
        let config: Record<string, any> = app.getConfig();
        expect(config.hasOwnProperty('binding_ip')).toBe(true);
    });

    it('config has port', () => {
        let config: Record<string, any> = app.getConfig();
        expect(config.hasOwnProperty('port')).toBe(true);
    });

    it('config has authentication_header', () => {
        let config: Record<string, any> = app.getConfig();
        expect(config.hasOwnProperty('authentication_header')).toBe(true);
    });

    it('config has backend_authentication_header', () => {
        let config: Record<string, any> = app.getConfig();
        expect(config.hasOwnProperty('backend_authentication_header')).toBe(true);
    });

    it('config has backend_authentication_secret', () => {
        let config: Record<string, any> = app.getConfig();
        expect(config.hasOwnProperty('backend_authentication_secret')).toBe(true);
    });

    it('config has log_level', () => {
        let config: Record<string, any> = app.getConfig();
        expect(config.hasOwnProperty('log_level')).toBe(true);
    });

    it('Supports TokenManager', () => {
        let manager: TokenManager = new TokenManager('secret');
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
        let req: http.ClientRequest = http.request({
            method: HTTPMethod.GET,
            host: '127.0.0.1',
            port: app.getPort(),
            path: '/echo'
        }, (res: http.IncomingMessage): void => {
            expect(res.statusCode).toBe(StatusCode.OK_NO_CONTENT);
            done();
        });
        req.end();
    });

    it('Accepts POST Requests', (done) => {
        let req: http.ClientRequest = http.request({
            method: HTTPMethod.POST,
            host: '127.0.0.1',
            port: app.getPort(),
            path: '/echo'
        }, (res: http.IncomingMessage): void => {
            expect(res.statusCode).toBe(StatusCode.OK);
            done();
        });
        req.end();
    });

    it('Accepts PUT Requests', (done) => {
        let req: http.ClientRequest = http.request({
            method: HTTPMethod.PUT,
            host: '127.0.0.1',
            port: app.getPort(),
            path: '/echo'
        }, (res: http.IncomingMessage): void => {
            expect(res.statusCode).toBe(StatusCode.OK);
            done();
        });
        req.end();
    });

    it('Accepts DELETE Requests', (done) => {
        let req: http.ClientRequest = http.request({
            method: HTTPMethod.DELETE,
            host: '127.0.0.1',
            port: app.getPort(),
            path: '/echo'
        }, (res: http.IncomingMessage): void => {
            expect(res.statusCode).toBe(StatusCode.OK);
            done();
        });
        req.end();
    });

    it('has instance set', () => {
        expect(AppInstance.getInstance()).toBe(app);
    });

    it('can close socket', (done) => {
        app.close().then(() => {
            done();
        });
    });

    it('has application logger via instance', () => {
        expect(AppInstance.getApplicationLogger()).toBe(app.getLogger());
    });

    it('AppInstance.setInstance', () => {
        AppInstance.setInstance(null);
        expect(AppInstance.getInstance()).toBe(null);
    });

    it('getApplicationLogger returns generic logger', () => {
        AppInstance.setInstance(null);
        let logger: Logger = AppInstance.getApplicationLogger();
        expect(logger.getName()).toBe('Generic');
    });

    it('Default log config', (done) => {
        let a: NoServerApp = new NoServerApp();
        let logger: Logger = a.getLogger();
        expect(logger.getLogLevel()).toBe(LogSeverity.INFO | LogSeverity.WARNING | LogSeverity.ERROR | LogSeverity.FATAL);
        a.close().then(() => {
            done();
        });
    });

    it('has a program', () => {
        let program: CommanderStatic = app.getProgram();
        expect(program).toBeTruthy();
    });

    it('LogSeverity Parsing', () => {
        let a: NoServerApp = new NoServerApp();
        expect(a.llStrToSeverity('all')).toBe(LogSeverity.ALL);
        expect(a.llStrToSeverity('trace')).toBe(LogSeverity.TRACE);
        expect(a.llStrToSeverity('debug')).toBe(LogSeverity.DEBUG);
        expect(a.llStrToSeverity('info')).toBe(LogSeverity.INFO);
        expect(a.llStrToSeverity('warning')).toBe(LogSeverity.WARNING);
        expect(a.llStrToSeverity('error')).toBe(LogSeverity.ERROR);
        expect(a.llStrToSeverity('fatal')).toBe(LogSeverity.FATAL);
        expect(a.llStrToSeverity('SomethingThatDoesntExists')).toBe(null);
    });

    it('Config test', () => {
        new ConfigTestApp(JSON.stringify({
            binding_ip: null,
            port: null,
            authentication_header: 'X-BT-AUTH',
            log_level: 'all',
            backend_authentication_header: 'X-BT-BACKEND-AUTH',
            backend_authentication_secret: null,
            log_filters: []
        }));
    });

    it('Can set logger', () => {
        const LOGGER_NAME: string = 'this is a test logger';
        let logger: Logger = new Logger(LOGGER_NAME);
        app.setLogger(logger);
        expect(app.getLogger()).toBe(logger);
        app.setLogger(originalLogger);
    });

    describe('CLI Support', () => {
        it('starts without parameters', () => {
            expect(() => {
                ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp')
            }).not.toThrow();
        });

        it('should throw error (expecting config)', () => {
            expect(() => {
                ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockAppWithError')
            }).toThrowMatching((thrown: any): boolean => {
                console.log(thrown.stdout.toString());
                return /Missing.+bt-config.json/.test(thrown.stdout.toString());
            });
        });

        it('option --port', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --port 0').toString();
            let opts: any = JSON.parse(buf);
            expect(opts).toEqual({
                port: '0'
            });
        });

        it('option --binding', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --binding 123.456.789.0').toString();
            let opts: any = JSON.parse(buf);
            expect(opts).toEqual({
                binding_ip: '123.456.789.0'
            });
        });

        it('option --authentication_header', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --authentication_header newHeader').toString();
            let opts: any = JSON.parse(buf);
            expect(opts).toEqual({
                authentication_header: 'newHeader'
            });
        });

        it('option -v', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp -v').toString();
            expect(buf).toBe(require('../package.json').version + '\n');
        });

        it('option --version', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --version').toString();
            expect(buf).toBe(require('../package.json').version + '\n');
        });

        it('option -h', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp -h').toString();
            expect(buf).toMatch(/Usage: CLIMockApp/);
        });

        it('option --help', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --help').toString();
            expect(buf).toMatch(/Usage: CLIMockApp/);
        });
    });
});
