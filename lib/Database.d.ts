import { DatabaseConnection } from './DatabaseConnection';
export declare abstract class Database {
    private clusterConfigMap;
    constructor();
    addMaster(config: any): void;
    removeMaster(): void;
    addSlave(slaveID: string, config: any): string;
    removeSlave(slaveID: string): void;
    getConnection(requireWriteAccess?: boolean, nodeID?: string): Promise<DatabaseConnection>;
    protected abstract _addNode(name: string, config: any): void;
    protected abstract _removeNode(name: string): void;
    protected abstract _getConnection(query: string, requireWriteAccess: boolean): Promise<DatabaseConnection>;
    abstract escape(query: string): string;
}
