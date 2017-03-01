'use strict';

var mysql = require('mysql');
var Database = require('./Database');
var MySQLConnection = require('./MySQLConnection');

class MysqlDB extends Database {
	constructor(host, port, kwargs) {
		super(host, port, kwargs);
	}

	getConnection() {
		return this._getConnection().then((connection) => {
			return Promise.resolve(new MySQLConnection(connection));
		})
	}

	startTransaction() {
		return new Promise((resolve, reject) => {
			this._getConnection().then((connection) => {
				connection.query('START TRANSACTION', (error) => {
					if (error) {
						return Promise.reject(error);
					}

					return resolve (new MySQLTransaction(connection));
				});
			});
		});
	}

	_getConnection() {
		return new Promise((resolve, reject) => {
			var kwargs = this.getKwargs();
			var connection = mysql.createConnection({
				host : this.getHost(),
				user : kwargs.user,
				port : this.getPort() || 3306,
				password : kwargs.password,
				database : kwargs.database
			});

			connection.connect((error) => {
				if (error) {
					return reject(error);
				}

				return resolve(connection);
			});
		});
	}
};

module.exports = MysqlDB;
