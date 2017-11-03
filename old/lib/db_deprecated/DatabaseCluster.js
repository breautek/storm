'use strict';

var UUID = require('uuid');

class DatabaseCluster {
	constructor() {
		this._clusterConfigMap = {};
	}

	addMaster(config) {
		if (this._clusterConfigMap['MASTER']) {
			throw new Error('Node MASTER already exists on cluster.');
		}

		this._clusterConfigMap['MASTER'] = config;
		this._addNode('MASTER', config);
	}

	removeMaster() {
		delete this._clusterConfigMap['MASTER'];
		this._removeNode('MASTER');
	}

	addSlave(slaveID, config) {
		var id = `SLAVE.${UUID.v4()}.${slaveID}`;

		this._clusterConfigMap[id] = config;
		this._addNode(id, config);

		return id;
	}

	removeSlave(nodeID) {
		if (!this._clusterConfigMap[nodeID]) {
			global._btapiframework_app_instance__.getLogger().warn(`Node ${nodeID} is not a part of this cluster.`);
			return;
		}

		delete this._clusterConfigMap[nodeID];
		this._removeNode(nodeID);
	}

	_removeNode(nodeName) {
		throw new Error('_removeNode is abstract.');
	}

	_addNode(nodeName, config) {
		throw new Error('_addNode is abstract.');
	}

	getConnection(requireWriteAccess) {
		var query = 'SLAVE*'; //MASTER or SLAVE
		if (requireWriteAccess) {
			query = 'MASTER'; //MASTER ONLY
		}

		return this._getConnection(query);
	}

	_getConnection(query) {
		throw new Error('_getConnection is abstract.');
	}
}

module.exports = DatabaseCluster;
