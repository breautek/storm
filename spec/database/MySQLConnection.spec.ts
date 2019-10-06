
import {
    MockApplication,
} from '../support/TestApplication';
import { MySQLConnection } from '../../src/MySQLConnection';
import { DatabaseQueryError } from '../../src/DatabaseQueryError';
import {DEFAULT_QUERY_TIMEOUT} from '../../src/DatabaseConnection';

describe('MySQLConnection', () => {
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

    let mockAPI: any = null;
    let conn: MySQLConnection = null;

    beforeEach(() => {
        mockAPI = {
            config: jasmine.createSpy('config'),
            query: jasmine.createSpy('query').and.returnValue({sql: 'test query'}),
            stream: jasmine.createSpy('stream')
        };
        conn = new MySQLConnection(mockAPI, 'test stack');
    });

    it('sets queryFormat', () => {
        expect(mockAPI.config.queryFormat).toBeTruthy();
    });

    it('getAPI', () => {
        expect(conn.getAPI()).toBe(mockAPI);
    });

    it('can query successfully', (done) => {
        mockAPI.query.and.callFake((obj: any, params: any, callback: any) => {
            callback(null, [1]);
            return {
                sql: 'test sql'
            };
        });
        conn.query('test').then((results: Array<any>) => {
            expect(results).toEqual([1]);
            done();
        });
    });

    it('query handles errors', (done) => {
        mockAPI.query.and.callFake((obj: any, params: any, callback: any) => {
            setTimeout(() => {
                callback(new Error('query error'));
            }, 10);
            return {
                sql: 'test sql'
            };
        });
        conn.query('test').catch((error: any) => {
            console.log(error);
            expect(error instanceof DatabaseQueryError).withContext(error).toBe(true);
            done();
        });
    });

    it('isOpen', () => {
        expect(conn.isOpen()).toBe(true);
    });

    it('can stream (default options)', () => {
        let streamSpy: jasmine.Spy = jasmine.createSpy('stream');
        mockAPI.query.and.returnValue({
            sql: 'test',
            stream: streamSpy
        });

        conn.stream('test query', null);

        expect(streamSpy).toHaveBeenCalledWith({
            highWatermark: 512
        });
    });

    it('can stream', () => {
        let streamSpy: jasmine.Spy = jasmine.createSpy('stream');
        mockAPI.query.and.returnValue({
            sql: 'test',
            stream: streamSpy
        });

        let streamOptions: any = {
            streamTest: 1
        };

        conn.stream('test query', null, streamOptions);

        expect(streamSpy).toHaveBeenCalledWith(streamOptions);
    });

    it('isTransaction', () => {
        expect(conn.isTransaction()).toBe(false);
    });

    it('can start transaction (readonly failure)', (done) => {
        conn.startTransaction().catch((error: Error) => {
            expect(error.message).toBe('A readonly connection cannot start a transaction.');
            done();
        });
    });

    it('can start transaction (isTransaction failure)', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            callback(null, []);
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().then(() => {
            return conn.startTransaction();
        }).catch((error: Error) => {
            expect(error.message).toBe('Connection is already in a transaction.');
            done();
        });
    });

    it('can start transaction successfully', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            callback(null, []);
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().then(() => {
            expect(conn.isTransaction()).toBe(true);
            expect(mockAPI.query).toHaveBeenCalledWith({
                sql: 'START TRANSACTION',
                timeout: DEFAULT_QUERY_TIMEOUT,
            }, undefined, jasmine.any(Function));
            done();
        });
    });
});
