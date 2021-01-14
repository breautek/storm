
import {ManagedDatabaseConnection} from '../../src/ManagedDatabaseConnection';
import {
    MockApplication
} from '../support/TestApplication';
import {MockConnection} from '../support/MockConnection';
import { DEFAULT_QUERY_TIMEOUT, DatabaseConnection } from '../../src/DatabaseConnection';
import { getInstance } from '../../src/instance';

const ROLLBACK_WARN_EXPECTATION = 'Rolling back a transaction because setConnection was called on a ManagedDatabaseConnection in a transaction in progress.';

describe('ManagedDatabaseConnection', () => {
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

    test('constructs read / no write require', (done) => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(connection.isReadOnly()).toBe(true);
        expect(connection.isWriteRequired()).toBe(false);
        connection.close().then(() => {
            done();
        });
    });

    test('constructs read / write required', (done) => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        expect(connection.isReadOnly()).toBe(true);
        expect(connection.isWriteRequired()).toBe(true);
        connection.close().then(() => {
            done();
        });
    });

    test('originally not managed', (done) => {
        let connection: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(connection.isManaged()).toBe(false);
        connection.close().then(() => {
            done();
        });
    });

    test('can set connection', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(true, '');
        mdc.setConnection(connection);
        expect(mdc.isManaged()).toBe(true);
        mdc.close().then(() => {
            done();
        });
    });

    test('is write enabled if connection has write', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.isReadOnly()).toBe(false);
        mdc.close().then(() => {
            done();
        });
    });

    test('get instantation stack (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getInstantiationStack()).toContain('at new ManagedDatabaseConnection');
        mdc.close().then(() => {
            done();
        });
    });

    test('get instantation stack (connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, 'test stack');
        mdc.setConnection(connection);
        expect(mdc.getInstantiationStack()).toBe('test stack');
        mdc.close().then(() => {
            done();
        });
    });

    test('get timeout (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getTimeout()).toBe(null);
        mdc.close().then(() => {
            done();
        });
    });

    test('get timeout (connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.getTimeout()).toBe(DEFAULT_QUERY_TIMEOUT);
        mdc.close().then(() => {
            done();
        });
    });

    test('is transaction (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.isTransaction()).toBe(false);
        mdc.close().then(() => {
            done();
        });
    });

    test('is transaction (with connection/no transaction)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        mdc.setConnection(connection);
        expect(mdc.isTransaction()).toBe(false);
        mdc.close().then(() => {
            done();
        });
    });

    test('is transaction (with connection/transaction)', async (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        await connection.startTransaction();
        mdc.setConnection(connection);
        expect(mdc.isTransaction()).toBe(true);
        mdc.close().then(() => {
            done();
        });
    });

    test('get api (no connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        expect(mdc.getAPI()).toBe(null);
        mdc.close().then(() => {
            done();
        });
    });

    test('get api (connection)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let connection: MockConnection = new MockConnection(false, '');
        spyOn(connection, 'getAPI').and.returnValues({});
        mdc.setConnection(connection);
        expect(mdc.getAPI()).toEqual({});
        mdc.close().then(() => {
            done();
        });
    });

    test('can set connection over connection (no transaction)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();

        mdc.setConnection(conn2);

        expect((<any>mdc)._connection).toBe(conn2);
        expect(spy).toHaveBeenCalled();
        mdc.close().then(() => {
            done();
        });
    });

    test('can set connection over connection (transaction rollsback successfully)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        spyOn(conn1, 'isTransaction').and.returnValue(true);
        let rollbackSpy: jasmine.Spy = spyOn(conn1, 'rollback').and.returnValue(Promise.resolve());
        let warnSpy: jasmine.Spy = spyOn(getInstance().getLogger(), 'warn');
        let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();

        mdc.setConnection(conn2);

        setTimeout(() => {
            expect(warnSpy).toHaveBeenCalledWith('ManagedDatabaseConnection', ROLLBACK_WARN_EXPECTATION);
            expect(rollbackSpy).toHaveBeenCalled();
            expect((<any>mdc)._connection).toBe(conn2);
            expect(spy).toHaveBeenCalled();
            mdc.close().then(() => {
                done();
            });
        }, 100);
    });

    test('can set connection over connection (transaction rollsback ignored)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        let conn2: MockConnection = new MockConnection(false, '');

        mdc.setConnection(conn1);

        spyOn(conn1, 'isTransaction').and.returnValue(true);
        let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();

        mdc.setConnection(conn2);

        setTimeout(() => {
            expect((<any>mdc)._connection).toBe(conn2);
            expect(spy).toHaveBeenCalled();
            mdc.close().then(() => {
                done();
            });
        }, 100);
    });

    test('can set connection over connection (transaction rollsback failure)', (done) => {
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

        setTimeout(() => {
            expect(rollbackSpy).toHaveBeenCalled();
            expect(warnSpy).toHaveBeenCalledWith('ManagedDatabaseConnection', ROLLBACK_WARN_EXPECTATION);
            expect(logSpy).toHaveBeenCalledWith('ManagedDatabaseConnection', testError);
            expect((<any>mdc)._connection).toBe(conn2);
            expect(spy).toHaveBeenCalledWith(true);
            mdc.close().then(() => {
                done();
            });
        }, 100);
    });

    test('will create a connection automatically', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((<any>mdc)._connection instanceof DatabaseConnection).toBe(true);
            mdc.close().then(() => {
                done();
            });
        }, 100);
    });

    test('will create a connection automatically with write access', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection(true);
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((<any>mdc)._connection instanceof DatabaseConnection).toBe(true);
            expect((<any>mdc)._connection.isReadOnly()).toBe(false);
            mdc.close().then(() => {
                done();
            });
        }, 100);
    });

    test('_getConnection will return existing connection', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        mdc.setTimeout(1000);
        setTimeout(() => {
            expect((<any>mdc)._connection).toBe(conn1);
            mdc.close().then(() => {
                done();
            });
        }, 100);
    });

    test('can query', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'query').and.returnValue(Promise.resolve());
        mdc.query('test query').then(() => {
            expect(spy).toHaveBeenCalledWith('test query', undefined);
            mdc.close().then(() => {
                done();
            });
        });
    });

    test('stream should throw (not supported/implemented)', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        expect(() => {
            mdc.stream('');
        }).toThrowError('stream is not supported on Managed Connections');
        mdc.close().then(() => {
            done();
        });
    });

    test('can close managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();
        mdc.close().then(() => {
            expect(spy).not.toHaveBeenCalled();
            done();
        });
    });

    test('can close managed forcefully', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'close').and.callThrough();
        mdc.close(true).then(() => {
            expect(spy).not.toHaveBeenCalled();
            done();
        });
    });

    test('can close unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection<any> = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'close').and.callThrough();
            mdc.close().then(() => {
                expect(spy).toHaveBeenCalled();
                done();
            });
        }, 100);
    });

    test('can close unmanaged forcefully', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection<any> = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'close').and.callThrough();
            mdc.close(true).then(() => {
                expect(spy).toHaveBeenCalledWith(true);
                done();
            });
        }, 100);
    });

    test('can start transaction managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'startTransaction').and.returnValue(Promise.resolve());

        mdc.startTransaction().then(() => {
            mdc.close().then(() => {
                expect(spy).not.toHaveBeenCalled();
                done();
            });
        });
    });

    test('can start transaction unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection<any> = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'startTransaction').and.returnValue(Promise.resolve());
            mdc.startTransaction().then(() => {
                expect(spy).toHaveBeenCalled();
                mdc.close(true);
                done();
            });
        }, 100);
    });

    test('can commit managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'commit').and.returnValue(Promise.resolve());

        mdc.commit().then(() => {
            expect(spy).not.toHaveBeenCalled();
            mdc.close();
            done();
        });
    });

    test('can commit unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection<any> = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'commit').and.returnValue(Promise.resolve());
            mdc.commit().then(() => {
                expect(spy).toHaveBeenCalled();
                mdc.close();
                done();
            });
        }, 100);
    });

    test('can rollback managed', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        let conn1: MockConnection = new MockConnection(false, '');
        mdc.setConnection(conn1);
        let spy: jasmine.Spy = spyOn(conn1, 'rollback').and.returnValue(Promise.resolve());

        mdc.rollback().then(() => {
            expect(spy).not.toHaveBeenCalled();
            mdc.close();
            done();
        });
    });

    test('can rollback unmanaged', (done) => {
        let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
        mdc.setTimeout(1000);

        setTimeout(() => {
            let conn: DatabaseConnection<any> = (<any>mdc)._connection;
            let spy: jasmine.Spy = spyOn(conn, 'rollback').and.returnValue(Promise.resolve());
            mdc.rollback().then(() => {
                expect(spy).toHaveBeenCalled();
                mdc.close();
                done();
            });
        }, 100);
    });

    // test('can close multiple times gracefully', (done) => {
    //     let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
    //     let conn1: MockConnection = new MockConnection(false, '');
    //     mdc.setConnection(conn1);
    //     mdc.close().then(() => {
    //         return mdc.close();
    //     }).then(() => {
    //         done();
    //     }).catch((error) => {
    //         fail(error.toString());
    //     });
    // });

    // test('can start query after close', (done) => {
    //     let mdc: ManagedDatabaseConnection = new ManagedDatabaseConnection();
    //     let conn1: MockConnection = new MockConnection(false, '');
    //     // let spy: jasmine.Spy = null;
    //     mdc.setConnection(conn1);
    //     mdc.close().then(() => {
    //         // spy = spyOn(getInstance().getDB(), 'getConnection').and.callThrough();
    //         // return mdc.query('SELECT 1');
    //     // }).then(() => {
    //         // expect(spy).toHaveBeenCalled();
    //         done();
    //     }).catch((error: any) => {
    //         fail(error.toString());
    //     });
    // });
});
