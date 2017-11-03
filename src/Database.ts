
import * as UUID from 'uuid';
import {DatabaseConnection} from './DatabaseConnection';
import {getInstance} from './instance';

const MASTER_NAME: string = 'MASTER';

export abstract class Database {
    private clusterConfigMap: any;

    constructor() {
        this.clusterConfigMap = {};
    }

    public addMaster(config: any): void {
        if (this.clusterConfigMap[MASTER_NAME]) {
            throw new Error(`Node "${MASTER_NAME}" already exists.`);
        }

        this.clusterConfigMap[MASTER_NAME] = config;
        this._addNode(MASTER_NAME, config);
    }

    public removeMaster(): void {
        delete this.clusterConfigMap[MASTER_NAME];
        this._removeNode(MASTER_NAME);
    }

    public addSlave(slaveID: string, config: any): string {
        var id = `SLAVE.${UUID.v4()}.${slaveID}`;

        this.clusterConfigMap[id] = config;
        this._addNode(id, config);

        return id;
    }

    public removeSlave(slaveID: string): void {
        if (!this.clusterConfigMap[slaveID]) {
            getInstance().getLogger().warn(`Node ${slaveID} is not a part of this cluster.`);
            return;
        }

        delete this.clusterConfigMap[slaveID];
        this._removeNode(slaveID);
    }

    public getConnection(requireWriteAccess: boolean = false): Promise<DatabaseConnection<void>> {
        var query: string = 'SLAVE*';
        if (requireWriteAccess) {
            query = 'MASTER';
        }

        return this._getConnection(query);
    }

    protected abstract _addNode(name: string, config: any): void;
    protected abstract _removeNode(name: string): void;
    protected abstract async _getConnection(query: string): Promise<DatabaseConnection<void>>;
}