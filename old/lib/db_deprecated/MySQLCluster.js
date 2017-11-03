'use strict';

var DatabaseCluser = require('./DatabaseCluster');
var MySQLConnection = require('./MySQLConnection');
var mysql = require('mysql');

class MySQLCluster extends DatabaseCluser {
	constructor() {
		super();
		this._cluster = mysql.createPoolCluster();
	}

	_addNode(nodeID, config) {
		this._cluster.add(nodeID, config);
	}

	_removeNode(nodeID) {
		this._cluster.remove(nodeID);
	}

	_getConnection(query) {
		return new Promise((resolve, reject) => {
			this._cluster.getConnection(query, (error, connection) => {
				if (error) {
					reject(error);
					return;
				}

				resolve(new MySQLConnection(connection));
			});
		});
	}
}

module.exports = MySQLCluster;
