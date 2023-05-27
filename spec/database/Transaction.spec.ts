
import { RawQuery } from '../../src/RawQuery';
import {Transaction} from '../../src/Transaction';
import {Query} from '../../src/Query';
import {
    MockApplication
} from '../support/TestApplication';
import { IDatabaseConnection } from '../../src/IDatabaseConnection';
import { InvalidValueError } from '../../src/InvalidValueError';
import { InternalError } from '../../src/InternalError';
import { SetIsolationLevelQuery } from '../../src/private/SetIsolationLevelQuery';
import { StartTransactionQuery } from '../../src/private/StartTransactionQuery';
import { CommitQuery } from '../../src/private/CommitQuery';
import { DeadLockError } from '../../src/DeadLockError';
import { RollbackQuery } from '../../src/private/RollbackQuery';

describe('Transaction', () => {
    let app: MockApplication = null;

    beforeAll(async () => {
        process.argv = [];
        app = new MockApplication();
        await app.start();
    });
    afterAll(async () => {
        await app.close();
    });

    describe('APIs should simply return null', () => {
        let t: Transaction = null;

        beforeEach(() => {
            t = new Transaction(app, async () => {});
        });

        it('getQuery', () => {
            expect(t.getQuery(null)).toBe(null);
        });

        it('getParametersForQuery', () => {
            expect(t.getParametersForQuery()).toBe(null);
        });

        it('onPostProcess', async () => {
            expect(await t.onPostProcess(null, null)).toBe(null);
        });
    });

    it('retryLimit must be greater than 0', () => {
        expect(() => {
            new Transaction(app, async () => {}, 0);
        }).toThrowError(InvalidValueError);
    });

    describe('retryLimit should default to Infinity if null/undefined', () => {
        it('null', () => {
            let t: Transaction = new Transaction(app, async () => {}, null);
            expect((<any>t).$retryLimit).toBe(Infinity);
        });

        it('undefined', () => {
            let t: Transaction = new Transaction(app, async () => undefined);
            expect((<any>t).$retryLimit).toBe(Infinity);
        });
    });

    it('should throw InternalError if connection is already in transaction state', async () => {
        let t: Transaction = new Transaction(app, async () => {});
        let conn: IDatabaseConnection = await app.getDB().getConnection(true);
        await conn.startTransaction();
        expect(async () => {
            await t.execute(conn);
        }).rejects.toThrowError(InternalError);
    });

    it('can execute simple transaction', async () => {
        spyOn(SetIsolationLevelQuery.prototype, 'execute').and.callThrough();
        spyOn(StartTransactionQuery.prototype, 'execute').and.callThrough();
        spyOn(CommitQuery.prototype, 'execute').and.callThrough();
        let query: Query = new RawQuery('SELECT 1');
        let transaction: Transaction = new Transaction(app, async (connection: IDatabaseConnection) => {
            await query.execute(connection);
        });
        
        spyOn(query, 'execute').and.callThrough();

        let conn: IDatabaseConnection = await app.getDB().getConnection(true);
        await transaction.execute(conn);

        expect(SetIsolationLevelQuery.prototype.execute).toHaveBeenCalled();
        expect(StartTransactionQuery.prototype.execute).toHaveBeenCalled();
        expect(query.execute).toHaveBeenCalled();
        expect(CommitQuery.prototype.execute).toHaveBeenCalled();
    });

    it('should retry automatically on DeadLockError', async () => {
        let query: Query = new RawQuery('SELECT 1');
        let transaction: Transaction = new Transaction(app, async (conn: IDatabaseConnection) => {
            await query.execute(conn);
        });
        let conn: IDatabaseConnection = await app.getDB().getConnection(true);
        
        let shouldThrowError: boolean = true;
        spyOn(query, 'execute').and.callFake(() => {
            if (shouldThrowError) {
                shouldThrowError = false;
                return Promise.reject(new DeadLockError(query.getQuery(conn), new Error('dummy error')));
            }
            else {
                return Query.prototype.execute.call(query, conn);
            }
        });

        await transaction.execute(conn);

        expect(query.execute).toHaveBeenCalledTimes(2);
    });

    it('should rollback on retry limit', async () => {
        let query: Query = new RawQuery('SELECT 1');
        let transaction: Transaction = new Transaction(app, async (conn: IDatabaseConnection) => {
            await query.execute(conn);
        }, 3);
        let conn: IDatabaseConnection = await app.getDB().getConnection(true);
        
        spyOn(RollbackQuery.prototype, 'execute').and.callThrough();
        spyOn(query, 'execute').and.callFake(() => {
            return Promise.reject(new DeadLockError(query.getQuery(conn), new Error('dummy error')));
        });

        await expect(async () => {
            await transaction.execute(conn);
        }).rejects.toThrowError(DeadLockError);

        expect(query.execute).toHaveBeenCalledTimes(3);
        expect(RollbackQuery.prototype.execute).toHaveBeenCalled();
    });

    it('should fail gracefully if transaction cannot be started', async () => {
        spyOn(StartTransactionQuery.prototype, 'execute').and.returnValue(Promise.reject({
            code: 'PROTOCOL_ENQUEUE_AFTER_QUIT',
            fatal: false
        }));

        let query: Query = new RawQuery('SELECT 1');
        let transaction: Transaction = new Transaction(app, async (conn: IDatabaseConnection) => {
            await query.execute(conn);
        });
        let conn: IDatabaseConnection = await app.getDB().getConnection(true);

        try {
            await transaction.execute(conn);
            fail('Should not have resolved');
        }
        catch (ex) {
            // intentionally empty
        }
    });
});
