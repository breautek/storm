/// <reference types="node" />
import { DatabaseConnection } from './DatabaseConnection';
import * as MySQL from 'mysql';
import { Readable } from 'stream';
export declare class MySQLConnection extends DatabaseConnection {
    private transaction;
    private _opened;
    constructor(connection: MySQL.PoolConnection, instantiationStack: string, isReadOnly?: boolean);
    isTransaction(): boolean;
    isOpen(): boolean;
    protected _query(query: string, params?: any): Promise<any>;
    protected _stream(query: string, params?: any, streamOptions?: any): Readable;
    startTransaction(): Promise<void>;
    endTransaction(requiresRollback?: boolean): Promise<void>;
    rollback(): Promise<void>;
    commit(): Promise<void>;
    protected _close(forceClose: boolean): Promise<void>;
}
