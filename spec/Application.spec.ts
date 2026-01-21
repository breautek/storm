/* eslint-disable no-prototype-builtins */

import {
    TestApplication,
    ConfigTestApp
} from './support/TestApplication';
import {TokenManager} from '../src/TokenManager';
import {HTTPMethod} from '../src/HTTPMethod';
import {StatusCode} from '../src/StatusCode';
import { MockDB } from './support/MockDB';
import * as http from 'http';
import * as AppInstance from '../src/instance';
import { Command } from 'commander';
import * as ChildProcess from 'child_process';

describe('Application', () => {
    let app: TestApplication = null;

    beforeAll(async () => {
        process.argv = [];

        try {
            app = new TestApplication();
        }
        catch (ex) {
            console.error(ex);
            process.exit();
        }

        await app.start();
    });

    afterAll(async () => {
        await app.close();
    });

    it('should have HealthHandler attached', (done) => {
        let req: http.ClientRequest = http.request({
            method: HTTPMethod.GET,
            host: '127.0.0.1',
            port: app.getPort(),
            path: '/_health',
            headers: {
                'content-type': 'text/plain',
                'content-length': 0
            }
        }, (res: http.IncomingMessage): void => {
            expect(res.statusCode).toBe(StatusCode.OK);
            done();
        });
        req.end();
    });

    it('getRequestSizeLimit returns a number by default', () => {
        expect(typeof app.getRequestSizeLimit()).toBe('number');
    });

    it('getName()', () => {
        expect(app.getName()).toBe('TestApplication');
    });

    it('config has bind', () => {
        let config: Record<string, any> = app.getConfig();
        expect(config.hasOwnProperty('bind')).toBe(true);
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

    it('config has log.level', () => {
        let config: Record<string, any> = app.getConfig();
        expect(config.log.hasOwnProperty('level')).toBe(true);
    });

    it('Supports TokenManager', () => {
        let manager: TokenManager = new TokenManager('secret');
        app.setTokenManager(manager);
        expect(app.getTokenManager()).toBe(manager);
        app.setTokenManager(null);
    });

    it('getCmdLineArgs()', () => {
        // Test offers no command line args
        expect(JSON.stringify(app.getCmdLineArgs())).toBe('{"custom":{}}');
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
            path: '/echo',
            headers: {
                'content-type': 'text/plain'
            }
        }, (res: http.IncomingMessage): void => {
            expect(res.statusCode).toBe(StatusCode.OK);
            done();
        });
        req.end('test data');
    });

    it('Accepts PUT Requests', (done) => {
        let req: http.ClientRequest = http.request({
            method: HTTPMethod.PUT,
            host: '127.0.0.1',
            port: app.getPort(),
            path: '/echo',
            headers: {
                'content-type': 'text/plain'
            }
        }, (res: http.IncomingMessage): void => {
            expect(res.statusCode).toBe(StatusCode.OK);
            done();
        });
        req.end('test data');
    });

    it('Accepts DELETE Requests', (done) => {
        let body: string = 'test data';
        let req: http.ClientRequest = http.request({
            method: HTTPMethod.DELETE,
            host: '127.0.0.1',
            port: app.getPort(),
            path: '/echo',
            headers: {
                'content-type': 'text/plain',
                'content-length': body.length
            }
        }, (res: http.IncomingMessage): void => {
            expect(res.statusCode).toBe(StatusCode.OK);
            done();
        });
        req.end(body);
    });

    it('has instance set', () => {
        expect(AppInstance.getInstance()).toBe(app);
    });

    it('can close socket', (done) => {
        app.close().then(() => {
            done();
        }).catch(fail);
    });

    it('AppInstance.setInstance', () => {
        AppInstance.setInstance(null);
        expect(AppInstance.getInstance()).toBe(null);
    });

    it('has a program', () => {
        let program: Command = app.getProgram();
        expect(program).toBeTruthy();
    });

    it('Config test', () => {
        new ConfigTestApp(JSON.stringify({
            bind: null,
            port: null,
            authentication_header: 'X-BT-AUTH',
            log: {
                level: 'all',
                filters: []
            },
            backend_authentication_header: 'X-BT-BACKEND-AUTH',
            backend_authentication_secret: null
        }));
    });

    describe('CLI Support', () => {
        it('starts without parameters', () => {
            expect(() => {
                ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp');
            }).not.toThrow();
        });

        it('should throw error (expecting config)', () => {
            try {
                ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockAppWithError');
            }
            catch (ex) {
                expect(ex.stdout.toString('utf8')).toMatch(/Storm cannot find config at.+bt-config.json/);
            }
        });

        it('option --port', () => {
            let lines: string[] = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --port 0').toString().split('\n');
            let opts: any = JSON.parse(lines[lines.length - 2]);
            expect(opts.port).toEqual(0);
        });

        it('option --bind', () => {
            let lines: string[] = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --bind \'127.0.0.1\'').toString().split('\n');
            let opts: any = JSON.parse(lines[lines.length - 2]);
            expect(opts.bind).toEqual('127.0.0.1');
        });

        it('option --authentication_header', () => {
            let lines: string[] = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --authentication_header newHeader').toString().split('\n');
            let opts: any = JSON.parse(lines[lines.length - 2]);
            expect(opts.authentication_header).toEqual('newHeader');
        });

        it('option -v', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp -v').toString().trim();
            expect(buf).toMatch(/^1\.2\.3 \(Storm [0-9]\.[0-9]\.[0-9](.+)?\)$/);
        });

        it('option --version', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --version').toString().trim();
            expect(buf).toMatch(/^1\.2\.3 \(Storm [0-9]\.[0-9]\.[0-9](.+)?\)$/);
        });

        it('option -h', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp -h').toString();
            expect(buf).toMatch(/Usage: CLIMockApp/);
        });

        it('option --help', () => {
            let buf: string = ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --help').toString();
            expect(buf).toMatch(/Usage: CLIMockApp/);
        });

        it('should allow unknown options', () => {
            expect(() => {
                ChildProcess.execSync('npx ts-node ./spec/support/cli/CLIMockApp --unknownOption').toString();
            }).not.toThrow();
        });
    });
});
