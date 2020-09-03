import { Database } from './Database';
import { MySQLConnection } from './MySQLConnection';
import * as MySQL from 'mysql';
export declare class MySQLDatabase extends Database {
    private cluster;
    constructor();
    escape(query: string): string;
    static escape(query: string): string;
    protected _addNode(nodeID: string, config: MySQL.PoolConfig): void;
    protected _removeNode(nodeID: string): void;
    protected _getConnection(query: string, requireWriteAccess: boolean): Promise<MySQLConnection>;
}
