// Copyright (C) 2017  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import {Database} from './Database';
import {MySQLConnection} from './MySQLConnection';
import * as MySQL from 'mysql';
import {getApplicationLogger} from './instance';

export class MySQLDatabase extends Database {
    private cluster: MySQL.PoolCluster;

    constructor() {
        super();
        this.cluster = MySQL.createPoolCluster();
        this.cluster.on('enqueue', function () {
            getApplicationLogger().warn('Waiting for available connection...');
        });
    }

    public escape(value: any): string {
        return MySQLDatabase.escape(value);
    }

    public static escape(value: any): string {
        return MySQL.escape(value);
    }

    protected _addNode(nodeID: string, config: MySQL.PoolConfig): void {
        getApplicationLogger().trace(`Adding node to connection pool: "${nodeID}"`);
        this.cluster.add(nodeID, config);
    }

    protected _removeNode(nodeID: string): void {
        getApplicationLogger().trace(`Removing node to connection pool: "${nodeID}"`);
        this.cluster.remove(nodeID);
    }

    protected _getConnection(query: string, requireWriteAccess: boolean): Promise<MySQLConnection> {
        getApplicationLogger().trace(`Querying connection pool for "${query}".`);
        return new Promise<MySQLConnection>((resolve, reject) => {
            let instantationStack: string = new Error().stack;
            this.cluster.getConnection(query, (error: MySQL.MysqlError, connection: MySQL.PoolConnection) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(new MySQLConnection(connection, instantationStack, !requireWriteAccess));
            });
        });
    }
}
