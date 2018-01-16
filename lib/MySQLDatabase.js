"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./Database");
const MySQLConnection_1 = require("./MySQLConnection");
const MySQL = require("mysql");
const instance_1 = require("./instance");
class MySQLDatabase extends Database_1.Database {
    constructor() {
        super();
        this.cluster = MySQL.createPoolCluster();
    }
    escape(query) {
        return MySQL.escape(query);
    }
    _addNode(nodeID, config) {
        instance_1.getApplicationLogger().trace(`Adding node to connection pool: "${nodeID}"`);
        this.cluster.add(nodeID, config);
    }
    _removeNode(nodeID) {
        instance_1.getApplicationLogger().trace(`Removing node to connection pool: "${nodeID}"`);
        this.cluster.remove(nodeID);
    }
    _getConnection(query, requireWriteAccess) {
        instance_1.getApplicationLogger().trace(`Querying connection pool for "${query}".`);
        return new Promise((resolve, reject) => {
            this.cluster.getConnection(query, (error, connection) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(new MySQLConnection_1.MySQLConnection(connection, new Error().stack, !requireWriteAccess));
            });
        });
    }
}
exports.MySQLDatabase = MySQLDatabase;
//# sourceMappingURL=MySQLDatabase.js.map