"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLDatabase = void 0;
const Database_1 = require("./Database");
const MySQLConnection_1 = require("./MySQLConnection");
const MySQL = require("mysql");
const instance_1 = require("./instance");
class MySQLDatabase extends Database_1.Database {
    constructor() {
        super();
        this.cluster = MySQL.createPoolCluster();
    }
    escape(value) {
        return MySQLDatabase.escape(value);
    }
    static escape(value) {
        return MySQL.escape(value);
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
            let instantationStack = new Error().stack;
            this.cluster.getConnection(query, (error, connection) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(new MySQLConnection_1.MySQLConnection(connection, instantationStack, !requireWriteAccess));
            });
        });
    }
}
exports.MySQLDatabase = MySQLDatabase;
//# sourceMappingURL=MySQLDatabase.js.map