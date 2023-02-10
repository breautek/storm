import { DatabaseConnection } from '../../src/DatabaseConnection';
import { Readable } from 'stream';
import { CommitQuery } from '../../src/private/CommitQuery';
import { RollbackQuery } from '../../src/private/RollbackQuery';
import { StartTransactionQuery } from '../../src/private/StartTransactionQuery';
import { IsolationLevel } from '../../src/IsolationLevel';
import { SetIsolationLevelQuery } from '../../src/private/SetIsolationLevelQuery';

export class MockConnection extends DatabaseConnection<any> {
    public transaction: boolean;
    public closed: boolean;

    public constructor(readonly: boolean, instantiationStack: string) {
        super(null, readonly, instantiationStack);
        this.transaction = false;
        this.closed = false;
    }

    public async startTransaction(isolationLevel?: IsolationLevel): Promise<void> {
        this.transaction = true;
        await new SetIsolationLevelQuery(isolationLevel).execute(this);
        await new StartTransactionQuery().execute(this);
    }

    public isTransaction(): boolean {
        return this.transaction;
    }

    public async commit(): Promise<void> {
        await new CommitQuery().execute(this);
        this.transaction = false;
    }

    public async rollback(): Promise<void> {
        await new RollbackQuery().execute(this);
        this.transaction = false;
    }

    protected _close(): Promise<void> {
        this.closed = true;
        return Promise.resolve();
    }

    public async endTransaction(requiresRollback: boolean): Promise<void> {
        if (requiresRollback) {
            await this.rollback();
        }
        await this.commit();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    protected _query(query: string, params?: any): Promise<any> {
        return Promise.resolve({
            query: query,
            params: params
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    protected _stream(query: string, params?: any, streamOptions?: any): Readable {
        return null;
    }
}
