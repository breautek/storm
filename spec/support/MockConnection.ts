import { DatabaseConnection } from '../../src/DatabaseConnection';
import { Readable } from 'stream';

export class MockConnection extends DatabaseConnection {
    public transaction: boolean;
    public closed: boolean;

    public constructor(readonly: boolean, instantiationStack: string) {
        super(null, readonly, instantiationStack);
        this.transaction = false;
        this.closed = false;
    }

    public startTransaction(): Promise<void> {
        this.transaction = true;
        return Promise.resolve();
    }

    public isTransaction(): boolean {
        return this.transaction;
    }

    public commit(): Promise<void> {
        this.transaction = false;
        return Promise.resolve();
    }

    public rollback(): Promise<void> {
        this.transaction = false;
        return Promise.resolve();
    }

    protected _close(): Promise<void> {
        this.closed = true;
        return Promise.resolve();
    }

    public async endTransaction(requiresRollback: boolean): Promise<void> {
        if (requiresRollback) {
            await this.rollback();
        }
        this.transaction = false;
        return Promise.resolve();
    }

    protected _query(query: string, params?: any): Promise<any> {
        return Promise.resolve({
            query: query,
            params: params
        });
    }

    protected _stream(query: string, params?: any, streamOptions?: any): Readable {
        throw new Error('Stream not supported');
    }
}