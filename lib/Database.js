"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID = require("uuid");
const instance_1 = require("./instance");
const MASTER_NAME = 'MASTER';
class Database {
    constructor() {
        this.clusterConfigMap = {};
    }
    addMaster(config) {
        if (this.clusterConfigMap[MASTER_NAME]) {
            throw new Error(`Node "${MASTER_NAME}" already exists.`);
        }
        this.clusterConfigMap[MASTER_NAME] = config;
        this._addNode(MASTER_NAME, config);
    }
    removeMaster() {
        delete this.clusterConfigMap[MASTER_NAME];
        this._removeNode(MASTER_NAME);
    }
    addSlave(slaveID, config) {
        let id = `SLAVE.${UUID.v4()}.${slaveID}`;
        this.clusterConfigMap[id] = config;
        this._addNode(id, config);
        return id;
    }
    removeSlave(slaveID) {
        if (!this.clusterConfigMap[slaveID]) {
            instance_1.getApplicationLogger().warn(`Node ${slaveID} is not a part of this cluster.`);
            return;
        }
        delete this.clusterConfigMap[slaveID];
        this._removeNode(slaveID);
    }
    getConnection(requireWriteAccess = false, nodeID) {
        let query = 'SLAVE*';
        if (nodeID) {
            query = nodeID;
        }
        else if (requireWriteAccess) {
            query = 'MASTER';
        }
        return this._getConnection(query, requireWriteAccess);
    }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map