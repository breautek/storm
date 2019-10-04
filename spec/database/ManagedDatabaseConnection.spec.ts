
import {ManagedDatabaseConnection} from '../../src/ManagedDatabaseConnection';
import {
    MockApplication,
} from '../support/TestApplication';
import {MockConnection} from '../support/MockConnection';
import { DEFAULT_QUERY_TIMEOUT, DatabaseConnection } from '../../src/DatabaseConnection';
import { getInstance } from '../../src/instance';

const ROLLBACK_WARN_EXPECTATION = 'Rolling back a transaction because setConnection was called on a ManagedDatabaseConnection in a progress transaction.';

describe('ManagedDatabaseConnection', () => {
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

    it('constructs read / no write require', () => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(connection.isReadOnly()).toBe(true);
        expect(connection.isWriteRequired()).toBe(false);
    });

    it('constructs read / write required', () => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        expect(connection.isReadOnly()).toBe(true);
        expect(connection.isWriteRequired()).toBe(true);
    });

    it('originally not managed', () => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(connection.isManaged()).toBe(false);
    });

    it('can set connection', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(true, '');
        mdc.setConnection(connection);
        expect(mdc.isManaged()).toBe(true);
    });

    it('is write enabled if connection has write', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.isReadOnly()).toBe(false);
    });

    it('get instantation stack (no connection)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getInstantiationStack()).toBe(null);
    });

    it('get instantation stack (connection)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, 'test stack');
        mdc.setConnection(connection);
        expect(mdc.getInstantiationStack()).toBe('test stack');
    });

    it('get timeout (no connection)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getTimeout()).toBe(null);
    });

    it('get timeout (connection)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.getTimeout()).toBe(DEFAULT_QUERY_TIMEOUT);
    });

    it('is transaction (no connection)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.isTransaction()).toBe(false);
    });

    it('is transaction (with connection/no transaction)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.isTransaction()).toBe(false);
    });

    it('is transaction (with connection/transaction)', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        await connection.startTransaction();
        mdc.setConnection(connection);
        expect(mdc.isTransaction()).toBe(true);
        done();
    });

    it('get api (no connection)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getAPI()).toBe(null);
    });

    it('get api (connection)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        spyOn(connection, 'getAPI').and.returnValues({});
        mdc.setConnection(connection);
        expect(mdc.getAPI()).toEqual({});
    });

    it('can set connection over connection (no transaction)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        let spy: jasmine.Spy = spyOn(conn1, 'close');

        mdc.setConnection(conn2);

        expect((<any>mdc)._connection).toBe(conn2);
        expect(spy).toHaveBeenCalled();
    });

    it('can set connection over connection (transaction rollsback successfully)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        spyOn(conn1, 'isTransaction').and.returnValue(true);
        let rollbackSpy: jasmine.Spy = spyOn(conn1, 'rollback').and.returnValue(Promise.resolve());
        let warnSpy: jasmine.Spy = spyOn(getInstance().getLogger(), 'warn');
        let spy: jasmine.Spy = spyOn(conn1, 'close');

        mdc.setConnection(conn2);

        setTimeout(() => {
            expect(warnSpy).toHaveBeenCalledWith(ROLLBACK_WARN_EXPECTATION);
            expect(rollbackSpy).toHaveBeenCalled();
            expect((<any>mdc)._connection).toBe(conn2);
            expect(spy).toHaveBeenCalled();
            done();
        }, 100);
    });

    it('can set connection over connection (transaction rollsback failure)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');
        let testError: Error = new Error('test');
        mdc.setConnection(conn1);

        spyOn(conn1, 'isTransaction').and.returnValue(true);
        let rollbackSpy: jasmine.Spy = spyOn(conn1, 'rollback').and.returnValue(Promise.reject(testError));
        let warnSpy: jasmine.Spy = spyOn(getInstance().getLogger(), 'warn');
        let logSpy: jasmine.Spy = spyOn(getInstance().getLogger(), 'error');
        let spy: jasmine.Spy = spyOn(conn1, 'close');

        mdc.setConnection(conn2);

        setTimeout(() => {
            expect(rollbackSpy).toHaveBeenCalled();
            expect(warnSpy).toHaveBeenCalledWith(ROLLBACK_WARN_EXPECTATION);
            expect(logSpy).toHaveBeenCalledWith(testError);
            expect((<any>mdc)._connection).toBe(conn2);
            expect(spy).toHaveBeenCalledWith(true);
            done();
        }, 100);
    });

    it('will create a connection automatically', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((<any>mdc)._connection instanceof DatabaseConnection).toBe(true);
            done();
        }, 100);
    });

    it('will create a connection automatically with write access', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((<any>mdc)._connection instanceof DatabaseConnection).toBe(true);
            expect((<any>mdc)._connection.isReadOnly()).toBe(false);
            done();
        }, 100);
    });

    it('_getConnection will return existing connection', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((<any>mdc)._connection).toBe(conn1);
            done();
        }, 100);
    });

    it('can query', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'query').and.returnValue(Promise.resolve());
        mdc.query('test query').then(() => {
            expect(spy).toHaveBeenCalledWith('test query', undefined);
            done();
        });
    });

    it('stream should throw (not supported/implemented)', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        expect(() => {
            mdc.stream('');
        }).toThrowError('stream is not supported on Managed Connections');
    });

    it('can close managed', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'close');
        mdc.close();
        expect(spy).not.toHaveBeenCalled();
    });

    it('can close managed forcefully', () => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'close');
        mdc.close(true);
        expect(spy).not.toHaveBeenCalled();
    });

    it('can close unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'close');
            mdc.close();
            expect(spy).toHaveBeenCalled();
            done();
        }, 100);
    });

    it('can close unmanaged forcefully', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'close');
            mdc.close(true);
            expect(spy).toHaveBeenCalledWith(true);
            done();
        }, 100);
    });

    it('can start transaction managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'startTransaction').and.returnValue(Promise.resolve());

        mdc.startTransaction().then(() => {
            expect(spy).not.toHaveBeenCalled();
            done();
        });
    });

    it('can start transaction unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'startTransaction').and.returnValue(Promise.resolve());
            mdc.startTransaction().then(() => {
                expect(spy).toHaveBeenCalled();
                done();
            });
        }, 100);
    });

    it('can commit managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'commit').and.returnValue(Promise.resolve());

        mdc.commit().then(() => {
            expect(spy).not.toHaveBeenCalled();
            done();
        });
    });

    it('can commit unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'commit').and.returnValue(Promise.resolve());
            mdc.commit().then(() => {
                expect(spy).toHaveBeenCalled();
                done();
            });
        }, 100);
    });

    it('can rollback managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'rollback').and.returnValue(Promise.resolve());

        mdc.rollback().then(() => {
            expect(spy).not.toHaveBeenCalled();
            done();
        });
    });

    it('can rollback unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'rollback').and.returnValue(Promise.resolve());
            mdc.rollback().then(() => {
                expect(spy).toHaveBeenCalled();
                done();
            });
        }, 100);
    });
});
