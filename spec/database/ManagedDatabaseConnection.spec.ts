
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

    it('constructs read / no write require', (done) => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(connection.isReadOnly()).toBe(true);
        expect(connection.isWriteRequired()).toBe(false);
        connection.close().then(() => {
            done();
        }).catch(fail);
    });

    it('constructs read / write required', (done) => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        expect(connection.isReadOnly()).toBe(true);
        expect(connection.isWriteRequired()).toBe(true);
        connection.close().then(() => {
            done();
        }).catch(fail);
    });

    it('originally not managed', (done) => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(connection.isManaged()).toBe(false);
        connection.close().then(() => {
            done();
        }).catch(fail);
    });

    it('can set connection', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(true, '');
        mdc.setConnection(connection);
        expect(mdc.isManaged()).toBe(true);
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('is write enabled if connection has write', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.isReadOnly()).toBe(false);
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('get instantation stack (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getInstantiationStack()).toContain('at new ManagedDatabaseConnection');
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('get instantation stack (connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, 'test stack');
        mdc.setConnection(connection);
        expect(mdc.getInstantiationStack()).toBe('test stack');
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('get timeout (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getTimeout()).toBe(null);
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('get timeout (connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.getTimeout()).toBe(DEFAULT_QUERY_TIMEOUT);
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('is transaction (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.isTransaction()).toBe(false);
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('is transaction (with connection/no transaction)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.isTransaction()).toBe(false);
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('is transaction (with connection/transaction)', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        await connection.startTransaction();
        mdc.setConnection(connection);
        expect(mdc.isTransaction()).toBe(true);
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('get api (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getAPI()).toBe(null);
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('get api (connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        spyOn(connection, 'getAPI').and.returnValues({});
        mdc.setConnection(connection);
        expect(mdc.getAPI()).toEqual({});
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('can set connection over connection (no transaction)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();

        mdc.setConnection(conn2);

        expect((mdc as any).$connection).toBe(conn2);
        expect(spy).toHaveBeenCalled();
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('can set connection over connection (transaction rollback successfully)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        spyOn(conn1, 'isTransaction').and.returnValue(true);
        let rollbackSpy: jasmine.Spy = spyOn(conn1, 'rollback').and.returnValue(Promise.resolve());
        let warnSpy: jasmine.Spy = spyOn(getInstance().getLogger(), 'warn');
        let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();

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
            }).catch(fail);
        }, 100);
    });

    it('can set connection over connection (transaction rollback ignored)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        spyOn(conn1, 'isTransaction').and.returnValue(true);
        let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();

        mdc.setConnection(conn2);

        expect((mdc as any).$connection).toBe(conn2);
        expect(spy).toHaveBeenCalled();
        mdc.close().then(() => {
            done();
        }).catch(fail);
    });

    it('can set connection over connection (transaction rollback failure)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');
        let testError: Error = new Error('test');
        mdc.setConnection(conn1);

        spyOn(conn1, 'isTransaction').and.returnValue(true);
        let rollbackSpy: jasmine.Spy = spyOn(conn1, 'rollback').and.returnValue(Promise.reject(testError));
        let warnSpy: jasmine.Spy = spyOn(getInstance().getLogger(), 'warn');
        let logSpy: jasmine.Spy = spyOn(getInstance().getLogger(), 'error');
        let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();

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
            }).catch(fail);
        }, 100);
    });

    it('will create a connection automatically', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((mdc as any).$connection instanceof DatabaseConnection).toBe(true);
            mdc.close().then(() => {
                done();
            }).catch(fail);
        }, 0);
    });

    it('will create a connection automatically with write access', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((mdc as any).$connection instanceof DatabaseConnection).toBe(true);
            expect((mdc as any).$connection.isReadOnly()).toBe(false);
            mdc.close().then(() => {
                done();
            }).catch(fail);
        }, 0);
    });

    it('_getConnection will return existing connection', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((mdc as any).$connection).toBe(conn1);
            mdc.close().then(() => {
                done();
            }).catch(fail);
        }, 0);
    });

    it('can query', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'query').and.returnValue(Promise.resolve());
        let query: Query = new RawQuery('SELECT 1');
        mdc.query(query).then(() => {
            expect(spy).toHaveBeenCalledWith(query, undefined);
            mdc.close().then(() => {
                done();
            }).catch(fail);
        }).catch(fail);
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
        }).catch(fail);
    });

    it('can close managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        setTimeout(() => {
            let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();
            mdc.close().then(() => {
                expect(spy).not.toHaveBeenCalled();
                done();
            }).catch(fail);
        }, 0);
    });

    it('can close managed forcefully', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        setTimeout(() => {
            let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();
            mdc.close(true).then(() => {
                expect(spy).not.toHaveBeenCalled();
                done();
            }).catch(fail);
        }, 0);
    });

    it('can close unmanaged', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jasmine.Spy = spyOn(conn, 'close').and.callThrough();
            mdc.close().then(() => {
                expect(spy).toHaveBeenCalled();
                done();
            }).catch(fail);
        }, 0);
    });

    it('can close unmanaged forcefully', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jasmine.Spy = spyOn(conn, 'close').and.callThrough();
            mdc.close(true).then(() => {
                expect(spy).toHaveBeenCalledWith(true);
                done();
            }).catch(fail);
        }, 0);
    });

    it('can start transaction managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'startTransaction').and.returnValue(Promise.resolve());

        mdc.startTransaction().then(() => {
            mdc.close().then(() => {
                expect(spy).not.toHaveBeenCalled();
                done();
            }).catch(fail);
        }).catch(fail);
    });

    it('can start transaction unmanaged', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jasmine.Spy = spyOn(conn, 'startTransaction').and.returnValue(Promise.resolve());
            mdc.startTransaction().then(() => {
                expect(spy).toHaveBeenCalled();
                void mdc.close(true);
                done();
            }).catch(fail);
        }, 0);
    });

    it('can commit managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'commit').and.returnValue(Promise.resolve());

        mdc.commit().then(() => {
            expect(spy).not.toHaveBeenCalled();
            void mdc.close();
            done();
        }).catch(fail);
    });

    it('can commit unmanaged', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jasmine.Spy = spyOn(conn, 'commit').and.returnValue(Promise.resolve());
            mdc.commit().then(() => {
                expect(spy).toHaveBeenCalled();
                void mdc.close();
                done();
            }).catch(fail);
        }, 0);
    });

    it('can rollback managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'rollback').and.returnValue(Promise.resolve());

        mdc.rollback().then(() => {
            expect(spy).not.toHaveBeenCalled();
            void mdc.close();
            done();
        }).catch(fail);
    });

    it('can rollback unmanaged', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection<any> = (mdc as any).$connection;
            let spy: jasmine.Spy = spyOn(conn, 'rollback').and.returnValue(Promise.resolve());
            mdc.rollback().then(() => {
                expect(spy).toHaveBeenCalled();
                void mdc.close();
                done();
            }).catch(fail);
        }, 0);
    });
});
