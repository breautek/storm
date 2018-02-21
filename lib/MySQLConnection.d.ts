import { DatabaseConnection } from './DatabaseConnection';
import * as MySQL from 'mysql';
export declare class MySQLConnection extends DatabaseConnection {
    private transaction;
    private _opened;
    private _lingeringWarning;
    constructor(connection: MySQL.PoolConnection, instantiationStack: string, isReadOnly?: boolean);
    isTransaction(): boolean;
    isOpen(): boolean;
    protected _query(query: string, params?: any): Promise<any>;
    startTransaction(): Promise<void>;
    endTransaction(requiresRollback?: boolean): Promise<void>;
    rollback(): Promise<void>;
    commit(): Promise<void>;
    close(): Promise<void>;
}
