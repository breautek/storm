
import {
    MockApplication,
} from '../support/TestApplication';
import { MySQLConnection } from '../../src/MySQLConnection';
import { DatabaseQueryError } from '../../src/DatabaseQueryError';
import {DEFAULT_QUERY_TIMEOUT} from '../../src/DatabaseConnection';
import { Query } from '../../src/Query';
import { IDatabaseConnection } from '../../src/IDatabaseConnection';

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
            stream: jasmine.createSpy('stream'),
            release: jasmine.createSpy('release')
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

    it('can start transaction (query failure)', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            setTimeout(() => {
                callback(new Error());
            }, 1);
            return {
                sql: 'test'
            };
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().catch((error) => {
            expect(conn.isTransaction()).toBe(false);
            expect(error instanceof DatabaseQueryError).toBe(true);
            done();
        });
    });

    it('end transaction calls commit', () => {
        let spy: jasmine.Spy = spyOn(conn, 'commit');
        conn.endTransaction();
        expect(spy).toHaveBeenCalled();
    });

    it('end transactinon calls rollback', () => {
        let spy: jasmine.Spy = spyOn(conn, 'rollback');
        conn.endTransaction(true);
        expect(spy).toHaveBeenCalled();
    });

    it('rollback successful', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            setTimeout(() => {
                callback(null, []);
            }, 1);
            return a;
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().then(() => {
            return conn.rollback();
        }).then(() => {
            expect(conn.isTransaction()).toBe(false);
            expect(mockAPI.query).toHaveBeenCalledWith({
                sql: 'ROLLBACK',
                timeout: DEFAULT_QUERY_TIMEOUT,
            }, undefined, jasmine.any(Function));
            done();
        });
    });

    it('rollback query failure', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            if (a.sql === 'ROLLBACK') {
                setTimeout(() => {
                    callback(new Error());
                }, 1);
            }
            else {
                setTimeout(() => {
                    callback(null, []);
                }, 1);
            }
            
            return {
                sql: 'test',
                timeout: DEFAULT_QUERY_TIMEOUT
            };
        });

        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().then(() => {
            return conn.rollback();
        }).catch((error: any) => {
            expect(conn.isTransaction()).toBe(true);
            expect(error instanceof DatabaseQueryError).toBe(true);
            done();
        });
    });

    it('rollback errors on no transaction', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            setTimeout(() => {
                callback(null, []);
            }, 1);
            return a;
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.rollback().catch((error: Error) => {
            expect(error.message).toBe('Cannot rollback when there is no active transaction.');
            done();
        });
    });

    it('commit successful', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            setTimeout(() => {
                callback(null, []);
            }, 1);
            return a;
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().then(() => {
            return conn.commit();
        }).then(() => {
            expect(conn.isTransaction()).toBe(false);
            expect(mockAPI.query).toHaveBeenCalledWith({
                sql: 'COMMIT',
                timeout: DEFAULT_QUERY_TIMEOUT,
            }, undefined, jasmine.any(Function));
            done();
        });
    });

    it('commit query failure', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            if (a.sql === 'COMMIT') {
                setTimeout(() => {
                    callback(new Error());
                }, 1);
            }
            else {
                setTimeout(() => {
                    callback(null, []);
                }, 1);
            }
            
            return {
                sql: 'test',
                timeout: DEFAULT_QUERY_TIMEOUT
            };
        });

        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().then(() => {
            return conn.commit();
        }).catch((error: any) => {
            expect(conn.isTransaction()).toBe(true);
            expect(error instanceof DatabaseQueryError).toBe(true);
            done();
        });
    });

    it('commit errors on no transaction', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            setTimeout(() => {
                callback(null, []);
            }, 1);
            return a;
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.commit().catch((error: Error) => {
            expect(error.message).toBe('Cannot commit when there is no active transaction.');
            done();
        });
    });

    it('can close connection', (done) => {
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.close().then(() => {
            expect(mockAPI.release).toHaveBeenCalled();
            done();
        });
    });

    it('cannot close on active transaction', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            setTimeout(() => {
                callback(null, []);
            }, 1);
            return a;
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().then(() => {
            return conn.close();
        }).catch((error: Error) => {
            expect(error.message).toBe('Cannot close a connection while there is an active transaction. Use commit or rollback first.');
            done();
        });
    });

    it('can force close active transaction', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            setTimeout(() => {
                callback(null, []);
            }, 1);
            return a;
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().then(() => {
            return conn.close(true);
        }).then(() => {
            expect(mockAPI.release).toHaveBeenCalled();
            done();
        });
    });

    it('can force close connection', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            setTimeout(() => {
                callback(null, []);
            }, 1);
            return a;
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.close(true).then(() => {
            expect(mockAPI.release).toHaveBeenCalled();
            done();
        });
    });

    it('force close connection with rollback error', (done) => {
        mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
            if (a.sql === 'ROLLBACK') {
                setTimeout(() => {
                    callback(new Error());
                }, 1);
            }
            else {
                setTimeout(() => {
                    callback(null, []);
                }, 1);
            }
            return a;
        });
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
        conn.startTransaction().then(() => {
            return conn.close(true);
        }).then(() => {
            expect(mockAPI.release).toHaveBeenCalled();
            done();
        });
    });

    describe('post processing', () => {
        class QueryWithPostProcessing extends Query {
            protected _getQuery(): string {
                return 'SELECT 1';
            }

            public onPostProcess(conn: IDatabaseConnection, results: any): Promise<any> {
                return Promise.resolve([1, 2, 3]);
            }
        }

        beforeEach(() => {
            mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
                callback(null, ['a', 'b', 'c'])
            });
        })

        it('return post processed results', async (done) => {
            let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
            let query: Query =  new QueryWithPostProcessing();
            spyOn(query, 'onPostProcess').and.callThrough();
            let results = await conn.query(query);
            expect(query.onPostProcess).toHaveBeenCalledWith(conn, ['a', 'b', 'c']);
            expect(results).toEqual([
                1,
                2,
                3
            ]);
            done();
        });
    });
});
