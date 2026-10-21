
import {ManagedDatabaseConnection} from '../../src/ManagedDatabaseConnection';
import {
    MockApplication
} from '../support/TestApplication';
import {RawQuery} from '../../src/RawQuery';
import {MockConnection} from '../support/MockConnection';
import { DEFAULT_QUERY_TIMEOUT, DatabaseConnection } from '../../src/DatabaseConnection';
import { getInstance } from '../../src/instance';
import { Query } from '../../src/Query';

const ROLLBACK_WARN_EXPECTATION = 'Rolling back a transaction because setConnection was called on a ManagedDatabaseConnection in a transaction in progress.';

describe('ManagedDatabaseConnection', () => {
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });
    afterAll(async () => {
        await app.close();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('constructs read / no write require', (done) => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(connection.isReadOnly()).toBe(true);
        expect(connection.isWriteRequired()).toBe(false);
        connection.close().then(() => {
            done();
        }).catch(done);
    });

    it('constructs read / write required', (done) => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        expect(connection.isReadOnly()).toBe(true);
        expect(connection.isWriteRequired()).toBe(true);
        connection.close().then(() => {
            done();
        }).catch(done);
    });

    it('originally not managed', (done) => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(connection.isManaged()).toBe(false);
        connection.close().then(() => {
            done();
        }).catch(done);
    });

    it('can set connection', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(true, '');
        mdc.setConnection(connection);
        expect(mdc.isManaged()).toBe(true);
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('is write enabled if connection has write', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.isReadOnly()).toBe(false);
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('get instantation stack (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getInstantiationStack()).toContain('at new ManagedDatabaseConnection');
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('get instantation stack (connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, 'test stack');
        mdc.setConnection(connection);
        expect(mdc.getInstantiationStack()).toBe('test stack');
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('get timeout (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getTimeout()).toBe(null);
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('get timeout (connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.getTimeout()).toBe(DEFAULT_QUERY_TIMEOUT);
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('is transaction (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.isTransaction()).toBe(false);
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('is transaction (with connection/no transaction)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.isTransaction()).toBe(false);
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('is transaction (with connection/transaction)', async () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        await connection.startTransaction();
        mdc.setConnection(connection);
        expect(mdc.isTransaction()).toBe(true);
        await mdc.close();
    });

    it('get api (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getAPI()).toBe(null);
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('get api (connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        jest.spyOn(connection, 'getAPI').mockReturnValueOnce({});
        mdc.setConnection(connection);
        expect(mdc.getAPI()).toEqual({});
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('can set connection over connection (no transaction)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        let spy: jest.SpyInstance = jest.spyOn(conn1, 'close');

        mdc.setConnection(conn2);

        expect((mdc as any).$connection).toBe(conn2);
        expect(spy).toHaveBeenCalled();
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('can set connection over connection (transaction rollback successfully)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        jest.spyOn(conn1, 'isTransaction').mockReturnValue(true);
        let rollbackSpy: jest.SpyInstance = jest.spyOn(conn1, 'rollback').mockReturnValue(Promise.resolve());
        let warnSpy: jest.SpyInstance = jest.spyOn(getInstance().getLogger(), 'warn').mockImplementation(() => {});
        let spy: jest.SpyInstance = jest.spyOn(conn1, 'close');

        mdc.setConnection(conn2);

        // While setConnection isn't asynchronous, the handling of the oldConnection, just the API
        // doesn't wait for it to return as quickly as possible.
        setTimeout(() => {
            expect(warnSpy).toHaveBeenCalledWith('ManagedDatabaseConnection', ROLLBACK_WARN_EXPECTATION);
            expect(rollbackSpy).toHaveBeenCalled();
            expect((mdc as any).$connection).toBe(conn2);
            expect(spy).toHaveBeenCalled();
            mdc.close().then(() => {
                done();
            }).catch(done);
        }, 100);
    });

    it('can set connection over connection (transaction rollback ignored)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        jest.spyOn(conn1, 'isTransaction').mockReturnValue(true);
        let spy: jest.SpyInstance = jest.spyOn(conn1, 'close');

        mdc.setConnection(conn2);

        expect((mdc as any).$connection).toBe(conn2);
        expect(spy).toHaveBeenCalled();
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('can set connection over connection (transaction rollback failure)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');
        let testError: Error = new Error('test');
        mdc.setConnection(conn1);

        jest.spyOn(conn1, 'isTransaction').mockReturnValue(true);
        let rollbackSpy: jest.SpyInstance = jest.spyOn(conn1, 'rollback').mockReturnValue(Promise.reject(testError));
        let warnSpy: jest.SpyInstance = jest.spyOn(getInstance().getLogger(), 'warn').mockImplementation(() => {});
        let logSpy: jest.SpyInstance = jest.spyOn(getInstance().getLogger(), 'error').mockImplementation(() => {});
        let spy: jest.SpyInstance = jest.spyOn(conn1, 'close');

        mdc.setConnection(conn2);

        // While setConnection isn't asynchronous, the handling of the oldConnection, just the API
        // doesn't wait for it to return as quickly as possible.
        setTimeout(() => {
            expect(rollbackSpy).toHaveBeenCalled();
            expect(warnSpy).toHaveBeenCalledWith('ManagedDatabaseConnection', ROLLBACK_WARN_EXPECTATION);
            expect(logSpy).toHaveBeenCalledWith('ManagedDatabaseConnection', testError);
            expect((mdc as any).$connection).toBe(conn2);
            expect(spy).toHaveBeenCalledWith(true);
            mdc.close().then(() => {
                done();
            }).catch(done);
        }, 100);
    });

    it('will create a connection automatically', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((mdc as any).$connection instanceof DatabaseConnection).toBe(true);
            mdc.close().then(() => {
                done();
            }).catch(done);
        }, 0);
    });

    it('will create a connection automatically with write access', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((mdc as any).$connection instanceof DatabaseConnection).toBe(true);
            expect((mdc as any).$connection.isReadOnly()).toBe(false);
            mdc.close().then(() => {
                done();
            }).catch(done);
        }, 0);
    });

    it('_getConnection will return existing connection', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((mdc as any).$connection).toBe(conn1);
            mdc.close().then(() => {
                done();
            }).catch(done);
        }, 0);
    });

    it('can query', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jest.SpyInstance = jest.spyOn(conn1, 'query').mockReturnValue(Promise.resolve());
        let query: Query = new RawQuery('SELECT 1');
        mdc.query(query).then(() => {
            expect(spy).toHaveBeenCalledWith(query, undefined);
            mdc.close().then(() => {
                done();
            }).catch(done);
        }).catch(done);
    });

    it('stream should throw (not supported/implemented)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        expect(() => {
            mdc.stream(new RawQuery('SELECT 1'));
        }).toThrow('stream is not supported on Managed Connections');
        mdc.close().then(() => {
            done();
        }).catch(done);
    });

    it('can close managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        setTimeout(() => {
            let spy: jest.SpyInstance = jest.spyOn(conn1, 'close');
            mdc.close().then(() => {
                expect(spy).not.toHaveBeenCalled();
                done();
            }).catch(done);
        }, 0);
    });

    it('can close managed forcefully', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        setTimeout(() => {
            let spy: jest.SpyInstance = jest.spyOn(conn1, 'close');
            mdc.close(true).then(() => {
                expect(spy).not.toHaveBeenCalled();
                done();
            }).catch(done);
        }, 0);
    });

    it('can close unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jest.SpyInstance = jest.spyOn(conn, 'close');
            mdc.close().then(() => {
                expect(spy).toHaveBeenCalled();
                done();
            }).catch(done);
        }, 0);
    });

    it('can close unmanaged forcefully', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jest.SpyInstance = jest.spyOn(conn, 'close');
            mdc.close(true).then(() => {
                expect(spy).toHaveBeenCalledWith(true);
                done();
            }).catch(done);
        }, 0);
    });

    it('can start transaction managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jest.SpyInstance = jest.spyOn(conn1, 'startTransaction').mockReturnValue(Promise.resolve());

        mdc.startTransaction().then(() => {
            mdc.close().then(() => {
                expect(spy).not.toHaveBeenCalled();
                done();
            }).catch(done);
        }).catch(done);
    });

    it('can start transaction unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jest.SpyInstance = jest.spyOn(conn, 'startTransaction').mockReturnValue(Promise.resolve());
            mdc.startTransaction().then(() => {
                expect(spy).toHaveBeenCalled();
                void mdc.close(true);
                done();
            }).catch(done);
        }, 0);
    });

    it('can commit managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jest.SpyInstance = jest.spyOn(conn1, 'commit').mockReturnValue(Promise.resolve());

        mdc.commit().then(() => {
            expect(spy).not.toHaveBeenCalled();
            void mdc.close();
            done();
        }).catch(done);
    });

    it('can commit unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jest.SpyInstance = jest.spyOn(conn, 'commit').mockReturnValue(Promise.resolve());
            mdc.commit().then(() => {
                expect(spy).toHaveBeenCalled();
                void mdc.close();
                done();
            }).catch(done);
        }, 0);
    });

    it('can rollback managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jest.SpyInstance = jest.spyOn(conn1, 'rollback').mockReturnValue(Promise.resolve());

        mdc.rollback().then(() => {
            expect(spy).not.toHaveBeenCalled();
            void mdc.close();
            done();
        }).catch(done);
    });

    it('can rollback unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jest.SpyInstance = jest.spyOn(conn, 'rollback').mockReturnValue(Promise.resolve());
            mdc.rollback().then(() => {
                expect(spy).toHaveBeenCalled();
                void mdc.close();
                done();
            }).catch(done);
        }, 0);
    });
});
