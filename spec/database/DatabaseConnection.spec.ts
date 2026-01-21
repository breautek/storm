
import {DEFAULT_QUERY_TIMEOUT, DatabaseConnection} from '../../src/DatabaseConnection';
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
    let triggerSpy: jest.SpyInstance = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });
    afterAll(async () => {
        await app.close();
    });

    let originalJasmineTimeout: number = jasmine.DEFAULT_TIMEOUT_INTERVAL;

    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
        triggerSpy = jest.spyOn((DatabaseConnection.prototype as any), '$armLingerWarning').mockImplementation(() => {});
    });

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeout;
    });

    it('api', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        //because this is a mock, but returning null still means this is working
        expect(connection.getAPI()).toBe(null);
        void connection.close();
    });

    it('is opened', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.isClosed()).toBe(false);
        void connection.close();
    });

    it('is closed', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        void connection.close();
        expect(connection.isClosed()).toBe(true);
    });

    it('constructs read', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.isReadOnly()).toBe(true);
        void connection.close();
    });

    it('constructs read/write', () => {
        let connection: MockConnection = new MockConnection(false, 'test stack');
        expect(connection.isReadOnly()).toBe(false);
        void connection.close();
    });

    it('defaults to default timeout on invalid timeout setting', () => {
        let app: Application = getInstance();
        spyOn(app, 'getConfig').and.returnValue(({database: {query_timeout: NaN}} as IConfig));
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.getTimeout()).toBe(DEFAULT_QUERY_TIMEOUT);
        void connection.close();
    });

    it('has instantiation stack', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(connection.getInstantiationStack()).toBe('test stack');
        void connection.close();
    });

    it('set timeout', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        connection.setTimeout(50);
        expect(connection.getTimeout()).toBe(50);
        void connection.close();
    });

    it('set timeout throws error on invalid value', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        expect(() => {
            connection.setTimeout(NaN);
        }).toThrow('setTimeout expects a number in parameter 1.');
        void connection.close();
    });

    it('does trigger linger warning', () => {
        jest.useFakeTimers();
        triggerSpy.mockRestore();
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn(getInstance().getLogger(), 'warn');
        void connection.query(new DummyQuery());
        jest.advanceTimersByTime(60001);
        expect(spy).toHaveBeenCalledWith('DatabaseConnection', expect.any(String));
        void connection.close();
    });

    it('can close', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn(global, 'clearTimeout').and.callThrough();
        void connection.close();
        expect(spy).toHaveBeenCalled();
    });

    it('can force close', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn((connection as any), '_close');
        void connection.close(true);
        expect(spy).toHaveBeenCalledWith(true);
    });

    it('query arms linger warning', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn((connection as any), '$armLingerWarning');
        void connection.query(new DummyQuery());
        expect(spy).toHaveBeenCalled();
        void connection.close();
    });

    it('stream arms linger warming', () => {
        let connection: MockConnection = new MockConnection(true, 'test stack');
        let spy: jasmine.Spy = spyOn((connection as any), '$armLingerWarning');
        void connection.query(new DummyQuery());
        expect(spy).toHaveBeenCalled();
        void connection.close();
    });
});
