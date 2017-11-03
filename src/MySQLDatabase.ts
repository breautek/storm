
import {Database} from './Database';
import {MySQLConnection} from './MySQLConnection';
import * as MySQL from 'mysql';

export class MySQLDatabase extends Database {
    private cluster: MySQL.PoolCluster;

    constructor() {
        super();
        this.cluster = MySQL.createPoolCluster();
    }

    protected _addNode(nodeID: string, config: MySQL.PoolConfig): void {
        this.cluster.add(nodeID, config);
    }

    protected _removeNode(nodeID: string): void {
        this.cluster.remove(nodeID);
    }

    protected async _getConnection(query: string): Promise<MySQLConnection> {
        return await new Promise((resolve, reject) => {
            this.cluster.getConnection(query, (error: MySQL.MysqlError, connection: MySQL.PoolConnection) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(new MySQLConnection(connection));
            })
        });
    }
}
