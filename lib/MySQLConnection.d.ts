import { DatabaseConnection } from './DatabaseConnection';
import * as MySQL from 'mysql';
export declare class MySQLConnection extends DatabaseConnection {
    private transaction;
    constructor(connection: MySQL.PoolConnection, isReadOnly?: boolean);
    isTransaction(): boolean;
    query(query: string, params?: any): Promise<any>;
    startTransaction(): Promise<void>;
    endTransaction(requiresRollback?: boolean): Promise<void>;
    rollback(): Promise<void>;
    commit(): Promise<void>;
    close(): Promise<void>;
}
