
import {
    MockApplication
} from '../support/TestApplication';
import {queryFormatter} from '../../src/mysql/queryFormatter';
import { MySQLConnection } from '../../src/MySQLConnection';
import { DatabaseQueryError } from '../../src/DatabaseQueryError';
import {DEFAULT_QUERY_TIMEOUT} from '../../src/DatabaseConnection';
import { Query } from '../../src/Query';
import { IDatabaseConnection } from '../../src/IDatabaseConnection';
import {DummyQuery} from '../support/DummyQuery';
import { DatabaseConnection } from '../../src/DatabaseConnection';
import { RawQuery } from '../../src/RawQuery';
import { TransactionAccessLevel } from '../../src/TransactionAccessLevel';
import { GetMySQLVersion, IGetMySQLVersionResult } from '../../src/GetMySQLVersion';
import { GetSlavePositionQuery } from '../../src/private/GetSlavePositionQuery';
import { GetMasterPositionQuery } from '../../src/private/GetMasterPositionQuery';
import { GetPrimaryPositionQuery } from '../../src/private/GetPrimaryPositionQuery';
import { GetProcessList } from '../../src/private/GetProcessList';
import { getInstance } from '../../src/instance';

describe('MySQLConnection', () => {
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });
    afterAll(async () => {
        await app.close();
    });

    let mockAPI: any = null;
    let conn: MySQLConnection = null;

    beforeEach(() => {
        mockAPI = {
            config: jasmine.createSpy('config'),
            query: jasmine.createSpy('query').and.returnValue({sql: 'test query'}),
            stream: jasmine.createSpy('stream'),
            release: jasmine.createSpy('release'),
            format: jasmine.createSpy('format').and.callFake((sql, params) => {
                return queryFormatter(sql, params);
            })
        };
        conn = new MySQLConnection(mockAPI, 'test stack');
        jest.spyOn((DatabaseConnection.prototype as any), '$armLingerWarning').mockImplementation(() => {});
    });

    afterEach(async () => {
        await conn.close();
    });

    it('should enable breaking changes', () => {
        getInstance().getConfig().enableMySQL2BreakingChanges = true;
        new MySQLConnection(mockAPI, 'test stack', false);
        expect(mockAPI.config.typeCast).toBeInstanceOf(Function);
    });

    it('internal init - no replication', async () => {
        jest.spyOn(GetSlavePositionQuery.prototype, 'execute').mockResolvedValue(null);
        jest.spyOn(GetProcessList.prototype, 'execute').mockResolvedValue([]);

        await conn.__internal_init();

        expect((conn as any).$isMasterConnection).toBe(true);
        expect((conn as any).$hasReplicationEnabled).toBe(false);
    });

    it('sets namedPlaceholders', () => {
        expect(mockAPI.config.namedPlaceholders).toBeTruthy();
    });

    it('getAPI', () => {
        expect(conn.getAPI()).toBe(mockAPI);
    });

    it('isMaster', () => {
        expect(conn.isMaster()).toBe(true);
    });

    it('hasReplicationEnabled', () => {
        expect(conn.hasReplicationEnabled()).toBe(false);
    });

    it('can query successfully', (done) => {
        mockAPI.query.and.callFake((obj: any, params: any, callback: any) => {
            callback(null, [ 1 ]);
            return {
                sql: 'test sql'
            };
        });
        conn.query(new DummyQuery()).then((results: any[]) => {
            expect(results).toEqual([ 1 ]);
            done();
        }).catch(fail);
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
        conn.query(new DummyQuery()).catch((error: any) => {
            expect(error instanceof DatabaseQueryError).toBe(true);
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

        conn.stream(new DummyQuery(), null);

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

        conn.stream(new DummyQuery(), streamOptions);

        expect(streamSpy).toHaveBeenCalledWith(streamOptions);
    });

    it('isTransaction', () => {
        expect(conn.isTransaction()).toBe(false);
    });

    it('can start transaction (readonly failure)', (done) => {
        conn.startTransaction().catch((error: Error) => {
            expect(error.message).toBe('A readonly connection cannot start a read/write transaction.');
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
                sql: 'START TRANSACTION READ WRITE',
                timeout: DEFAULT_QUERY_TIMEOUT
            }, {
                accessLevel: TransactionAccessLevel.RW
            }, jasmine.any(Function));
            done();
        }).catch(fail);
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
        void conn.endTransaction();
        expect(spy).toHaveBeenCalled();
    });

    it('end transactinon calls rollback', () => {
        let spy: jasmine.Spy = spyOn(conn, 'rollback');
        void conn.endTransaction(true);
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
                timeout: DEFAULT_QUERY_TIMEOUT
            }, undefined, jasmine.any(Function));
            done();
        }).catch(fail);
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
                timeout: DEFAULT_QUERY_TIMEOUT
            }, undefined, jasmine.any(Function));
            done();
        }).catch(fail);
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
        }).catch(fail);
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
        }).catch(fail);
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
        }).catch(fail);
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
        }).catch(fail);
    });

    describe('post processing', () => {
        class QueryWithPostProcessing extends Query<void, 1[], number[]> {
            protected _getQuery(): string {
                return 'SELECT 1';
            }

            public onPostProcess(conn: IDatabaseConnection, results: 1[]): Promise<number[]> {
                return Promise.resolve([
                    1,
                    2,
                    3
                ]);
            }
        }

        beforeEach(() => {
            mockAPI.query.and.callFake((a: any, b: any, callback: any) => {
                callback(null, [
                    'a',
                    'b',
                    'c'
                ])
            });
        })

        it('return post processed results', async (done) => {
            let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
            let query: Query =  new QueryWithPostProcessing();
            spyOn(query, 'onPostProcess').and.callThrough();
            let results = await conn.query(query);
            expect(query.onPostProcess).toHaveBeenCalledWith(conn, [
                'a',
                'b',
                'c'
            ]);
            expect(results).toEqual([
                1,
                2,
                3
            ]);
            done();
        });

        it('execute', async () => {
            let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
            let query: QueryWithPostProcessing = new QueryWithPostProcessing();
            let results: number[] = await query.execute(conn);
            expect(results).toEqual([
                1,
                2,
                3
            ]);
        });
        
        it('can pull formatted query', async () => {
            let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);
            let query = new RawQuery('SELECT name FROM user WHERE id = :id', {
                id: '123'
            });

            expect(conn.formatQuery(query)).toBe('SELECT name FROM user WHERE id = \'123\'');
        });
    });

    it.only('getVersion show call on GetMySQLVersion query', async () => {
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);

        jest.spyOn(GetMySQLVersion.prototype, 'execute').mockImplementation((conn: IDatabaseConnection) => {
            return Promise.resolve({
                major: 8,
                minor: 0,
                patch: 0,
                version: '8.0.0'
            });
        });

        let version: IGetMySQLVersionResult = await conn.getVersion();
        expect(version).toEqual({
            major: 8,
            minor: 0,
            patch: 0,
            version: '8.0.0'
        });
    });

    it('getCurrentDatabasePosition should call on GetSlavePositionQuery on 8.0.0 replication', async () => {
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);

        jest.spyOn(conn, 'isReplication').mockReturnValue(true);
        jest.spyOn(conn, 'getVersion').mockReturnValue(Promise.resolve({
            major: 8,
            minor: 0,
            patch: 0,
            version: '8.0.0'
        }));

        let spy = jest.spyOn(GetSlavePositionQuery.prototype, 'execute').mockReturnValue(Promise.resolve(null));

        await conn.getCurrentDatabasePosition();

        expect(spy).toHaveBeenCalled();
    });

    it('getCurrentDatabasePosition should call on GetSlavePositionQuery on 8.4.0 replication', async () => {
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);

        jest.spyOn(conn, 'isReplication').mockReturnValue(true);
        jest.spyOn(conn, 'getVersion').mockReturnValue(Promise.resolve({
            major: 8,
            minor: 4,
            patch: 0,
            version: '8.4.0'
        }));

        let spy = jest.spyOn(GetSlavePositionQuery.prototype, 'execute').mockReturnValue(Promise.resolve(null));

        await conn.getCurrentDatabasePosition();

        expect(spy).toHaveBeenCalled();
    });

    it('getCurrentDatabasePosition should call on GetMasterPositionQuery on 8.0.0 primary', async () => {
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);

        jest.spyOn(conn, 'isReplication').mockReturnValue(false);
        jest.spyOn(conn, 'getVersion').mockReturnValue(Promise.resolve({
            major: 8,
            minor: 0,
            patch: 0,
            version: '8.0.0'
        }));

        let spy = jest.spyOn(GetMasterPositionQuery.prototype, 'execute').mockReturnValue(Promise.resolve(null));

        await conn.getCurrentDatabasePosition();

        expect(spy).toHaveBeenCalled();
    });

    it('getCurrentDatabasePosition should call on GetPrimaryPositionQuery on 8.4.0 primary', async () => {
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);

        jest.spyOn(conn, 'isReplication').mockReturnValue(false);
        jest.spyOn(conn, 'getVersion').mockReturnValue(Promise.resolve({
            major: 8,
            minor: 4,
            patch: 0,
            version: '8.4.0'
        }));

        let spy = jest.spyOn(GetPrimaryPositionQuery.prototype, 'execute').mockReturnValue(Promise.resolve(null));

        await conn.getCurrentDatabasePosition();

        expect(spy).toHaveBeenCalled();
    });

    it('formatQuery calls on API\'s format API', () => {
        let conn: MySQLConnection = new MySQLConnection(mockAPI, 'test stack', false);

        let spy = jest.spyOn(mockAPI, 'format');
        conn.formatQuery(new RawQuery('Select 1'));
        expect(spy).toHaveBeenCalled();
    });
});
