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

import { IDictionary } from '@totalpave/interfaces';
import * as UUID from 'uuid';
import {DatabaseConnection} from './DatabaseConnection';
import { getInstance } from './instance';

const MASTER_NAME: string = 'MASTER';

export abstract class Database<TDatabaseConfig, TConnectionAPI> {
    private _clusterConfigMap: IDictionary;

    constructor() {
        this._clusterConfigMap = {};
    }

    public addMaster(config: TDatabaseConfig): void {
        if (this._clusterConfigMap[MASTER_NAME]) {
            throw new Error(`Node "${MASTER_NAME}" already exists.`);
        }

        this._clusterConfigMap[MASTER_NAME] = config;
        this._addNode(MASTER_NAME, config);
    }

    public removeMaster(): void {
        delete this._clusterConfigMap[MASTER_NAME];
        this._removeNode(MASTER_NAME);
    }

    public addSlave(slaveID: string, config: TDatabaseConfig): string {
        let id = `SLAVE.${UUID.v4()}.${slaveID}`;

        this._clusterConfigMap[id] = config;
        this._addNode(id, config);

        return id;
    }

    public removeSlave(slaveID: string): void {
        if (!this._clusterConfigMap[slaveID]) {
            getInstance().getLogManager().getLogger(this.constructor.name).warn(`Node ${slaveID} is not a part of this cluster.`);
            return;
        }

        delete this._clusterConfigMap[slaveID];
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

    protected abstract _addNode(name: string, config: TDatabaseConfig): void;
    protected abstract _removeNode(name: string): void;
    protected abstract _getConnection(query: string, requireWriteAccess: boolean): Promise<DatabaseConnection<TConnectionAPI>>;
    public abstract escape(query: string): string;
}
