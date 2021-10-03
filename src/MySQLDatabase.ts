/*
   Copyright 2017-2021 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import {Database} from './Database';
import {MySQLConnection} from './MySQLConnection';
import * as MySQL from 'mysql';
import {getInstance} from './instance';

const TAG: string = 'MySQLDatabase';

export class MySQLDatabase extends Database<MySQL.PoolConfig, MySQL.PoolConnection> {
    private $cluster: MySQL.PoolCluster;

    constructor() {
        super();
        // TODO: Maybe one day this may be exposed via a bt config setting.
        this.$cluster = MySQL.createPoolCluster({
            removeNodeErrorCount: Infinity,
            restoreNodeTimeout: 1000
        });
        this.$cluster.on('enqueue', () => {
            getInstance().getLogger().warn(TAG, 'Waiting for available connection...');
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public escape(value: any): string {
        return MySQLDatabase.escape(value);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public static escape(value: any): string {
        return MySQL.escape(value);
    }

    protected _addNode(nodeID: string, config: MySQL.PoolConfig): void {
        getInstance().getLogger().trace(TAG, `Adding node to connection pool: "${nodeID}"`);
        this.$cluster.add(nodeID, config);
    }

    protected _removeNode(nodeID: string): void {
        getInstance().getLogger().trace(TAG, `Removing node to connection pool: "${nodeID}"`);
        this.$cluster.remove(nodeID);
    }

    protected _destroy(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.$cluster.end((err: MySQL.MysqlError) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve();
            });
        });
    }

    protected _getConnection(query: string, requireWriteAccess: boolean): Promise<MySQLConnection> {
        getInstance().getLogger().trace(TAG, `Querying connection pool for "${query}".`);
        return new Promise<MySQLConnection>((resolve, reject) => {
            let instantationStack: string = new Error().stack;
            this.$cluster.getConnection(query, (error: MySQL.MysqlError, connection: MySQL.PoolConnection) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(new MySQLConnection(connection, instantationStack, !requireWriteAccess));
            });
        });
    }
}
