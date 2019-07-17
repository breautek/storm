/// <reference types="node" />
import { DatabaseConnection } from './DatabaseConnection';
import { IDatabaseConnection } from './IDatabaseConnection';
import { Readable } from 'stream';
export declare class ManagedDatabaseConnection implements IDatabaseConnection {
    private _connection;
    private _managed;
    private _requresWrite;
    constructor(requiresWrite?: boolean);
    setConnection(connection: DatabaseConnection): void;
    hasConnection(): boolean;
    getInstantiationStack(): string;
    isReadOnly(): boolean;
    setTimeout(timeout: number): void;
    getTimeout(): number;
    query(query: string, params?: any): Promise<any>;
    stream(query: string, params?: any, streamOptions?: any): Readable;
    close(forceClose: boolean): Promise<void>;
    startTransaction(): Promise<void>;
    isTransaction(): boolean;
    commit(): Promise<void>;
    rollback(): Promise<void>;
    private _getConnection;
    getAPI(): any;
}
