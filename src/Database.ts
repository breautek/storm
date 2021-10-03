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

import { IDictionary } from '@totalpave/interfaces';
import * as UUID from 'uuid';
import {DatabaseConnection} from './DatabaseConnection';
import { getInstance } from './instance';

const MASTER_NAME: string = 'MASTER';
const TAG: string = 'Database';

export abstract class Database<TDatabaseConfig, TConnectionAPI> {
    private $clusterConfigMap: IDictionary;

    constructor() {
        this.$clusterConfigMap = {};
    }

    public addMaster(config: TDatabaseConfig): void {
        if (this.$clusterConfigMap[MASTER_NAME]) {
            throw new Error(`Node "${MASTER_NAME}" already exists.`);
        }

        this.$clusterConfigMap[MASTER_NAME] = config;
        this._addNode(MASTER_NAME, config);
    }

    public removeMaster(): void {
        delete this.$clusterConfigMap[MASTER_NAME];
        this._removeNode(MASTER_NAME);
    }

    public addSlave(slaveID: string, config: TDatabaseConfig): string {
        let id = `SLAVE.${UUID.v4()}.${slaveID}`;

        this.$clusterConfigMap[id] = config;
        this._addNode(id, config);

        return id;
    }

    public removeSlave(slaveID: string): void {
        if (!this.$clusterConfigMap[slaveID]) {
            getInstance().getLogger().warn(TAG, `Node ${slaveID} is not a part of this cluster.`);
            return;
        }

        delete this.$clusterConfigMap[slaveID];
        this._removeNode(slaveID);
    }

    public getConnection(requireWriteAccess: boolean = false, nodeID?: string): Promise<DatabaseConnection<TConnectionAPI>> {
        let query: string = 'SLAVE*';
        
        if (nodeID) {
            query = nodeID;
        }
        else if (requireWriteAccess) {
            query = 'MASTER';
        }

        return this._getConnection(query, requireWriteAccess);
    }

    public destroy(): Promise<void> {
        return this._destroy();
    }

    protected abstract _destroy(): Promise<void>;
    protected abstract _addNode(name: string, config: TDatabaseConfig): void;
    protected abstract _removeNode(name: string): void;
    protected abstract _getConnection(query: string, requireWriteAccess: boolean): Promise<DatabaseConnection<TConnectionAPI>>;
    public abstract escape(query: string): string;
}
