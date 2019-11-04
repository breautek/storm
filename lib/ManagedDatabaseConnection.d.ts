/// <reference types="node" />
import { DatabaseConnection } from './DatabaseConnection';
import { IDatabaseConnection } from './IDatabaseConnection';
import { Readable } from 'stream';
import { Query } from './Query';
export declare class ManagedDatabaseConnection implements IDatabaseConnection {
    private _connection;
    private _managed;
    private _requiresWrite;
    constructor(requiresWrite?: boolean);
    setConnection(connection: DatabaseConnection): void;
    isWriteRequired(): boolean;
    isManaged(): boolean;
    hasConnection(): boolean;
    getInstantiationStack(): string;
    isReadOnly(): boolean;
    setTimeout(timeout: number): void;
    getTimeout(): number;
    query(query: string | Query, params?: any): Promise<any>;
    stream(query: string | Query, params?: any, streamOptions?: any): Readable;
    close(forceClose?: boolean): Promise<void>;
    startTransaction(): Promise<void>;
    isTransaction(): boolean;
    commit(): Promise<void>;
    rollback(): Promise<void>;
    private _getConnection;
    getAPI(): any;
}
