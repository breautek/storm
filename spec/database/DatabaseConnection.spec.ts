
import {DEFAULT_QUERY_TIMEOUT} from '../../src/DatabaseConnection';
import {
    MockApplication
} from '../support/TestApplication';
import {MockConnection} from '../support/MockConnection';
import { getInstance } from '../../src/instance';
import { Application } from '../../src/Application';
import { IConfig } from '../../src/IConfig';
import {DummyQuery} from '../support/DummyQuery';

describe('DatabaseConnection', () => {
    let app: MockApplication = null;

    let setup = (done: any) => {
        process.argv = [];
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
        connection.close();
    });

    it('is opened', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.isClosed()).toBe(false);
        connection.close();
    });

    it('is closed', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        connection.close();
        expect(connection.isClosed()).toBe(true);
    });

    it('constructs read', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.isReadOnly()).toBe(true);
        connection.close();
    });

    it('constructs read/write', () => {
        let connection: MockConnection = new MockConnection(false, 'test stack');
        expect(connection.isReadOnly()).toBe(false);
        connection.close();
    });

    it('defaults to default timeout on invalid timeout setting', () => {
        let app: Application = getInstance();
        spyOn(app, 'getConfig').and.returnValue(<IConfig>({database: {query_timeout: NaN}}));
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.getTimeout()).toBe(DEFAULT_QUERY_TIMEOUT);
        connection.close();
    });

    it('has instantiation stack', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.getInstantiationStack()).toBe('test stack');
        connection.close();
    });

    it('set timeout', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        connection.setTimeout(50);
        expect(connection.getTimeout()).toBe(50);
        connection.close();
    });

    it('set timeout throws error on invalid value', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(() => {
            connection.setTimeout(NaN);
        }).toThrowError('setTimeout expects a number in parameter 1.');
        connection.close();
    });

    it('does trigger linger warning', () => {
        jest.useFakeTimers();
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn(getInstance().getLogManager().getLogger(connection.constructor.name), 'warn');
        connection.query(new DummyQuery());
        jest.advanceTimersByTime(10001);
        expect(spy).toHaveBeenCalledWith(expect.any(String));
        connection.close();
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
        connection.query(new DummyQuery());
        expect(spy).toHaveBeenCalled();
        connection.close();
    });

    it('stream arms linger warming', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn(<any>connection, '_armLingerWarning');
        connection.query(new DummyQuery());
        expect(spy).toHaveBeenCalled();
        connection.close();
    });
});
