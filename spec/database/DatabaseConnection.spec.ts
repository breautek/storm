
import {DEFAULT_QUERY_TIMEOUT} from '../../src/DatabaseConnection';
import {
    MockApplication,
} from '../support/TestApplication';
import {MockConnection} from '../support/MockConnection';
import { getInstance } from '../../src/instance';
import { Application } from '../../src/Application';
import { IConfig } from '../../src/IConfig';

describe('DatabaseConnection', () => {
    let app: MockApplication = null;

    let setup = (done: any) => {
        app = new MockApplication();
        app.on('ready', () => {
            done();
        });
    };

    let deconstruct = (done: any) => {
        app.close().then(() => {
            app = null;
            done();
        });
    };

    beforeAll(setup);
    afterAll(deconstruct);

    let originalJasmineTimeout: number = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    });

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeout;
    });

    it('api', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        //because this is a mock, but returning null still means this is working
        expect(connection.getAPI()).toBe(null);
    });

    it('is opened', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.isClosed()).toBe(false);
    });

    it('is closed', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        connection.close();
        expect(connection.isClosed()).toBe(true);
    });

    it('constructs read', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.isReadOnly()).toBe(true);
    });

    it('constructs read/write', () => {
        let connection: MockConnection = new MockConnection(false, 'test stack');
        expect(connection.isReadOnly()).toBe(false);
    });

    it('defaults to default timeout on invalid timeout setting', () => {
        let app: Application = getInstance();
        spyOn(app, 'getConfig').and.returnValue(<IConfig>({query_timeout: NaN}));
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.getTimeout()).toBe(DEFAULT_QUERY_TIMEOUT);
    });

    it('has instantiation stack', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.getInstantiationStack()).toBe('test stack');
    });

    it('set timeout', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        connection.setTimeout(50);
        expect(connection.getTimeout()).toBe(50);
    });

    it('set timeout throws error on invalid value', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(() => {
            connection.setTimeout(NaN);
        }).toThrowError('setTimeout expects a number in parameter 1.');
    });

    it('does trigger linger warning', () => {
        jasmine.clock().install();
        let app: Application = getInstance();
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn(app.getLogger(), 'warn');
        connection.query('');
        jasmine.clock().tick(10001);
        expect(spy).toHaveBeenCalledWith(jasmine.any(String));
        jasmine.clock().uninstall();
    });

    it('can close', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn(global, 'clearTimeout').and.callThrough();
        connection.close();
        expect(spy).toHaveBeenCalled();
    });

    it('can force close', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn(<any>connection, '_close');
        connection.close(true);
        expect(spy).toHaveBeenCalledWith(true);
    });

    it('query arms linger warning', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn(<any>connection, '_armLingerWarning');
        connection.query('');
        expect(spy).toHaveBeenCalled();
    });

    it('stream arms linger warming', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn(<any>connection, '_armLingerWarning');
        connection.stream('');
        expect(spy).toHaveBeenCalled();
    });
});
