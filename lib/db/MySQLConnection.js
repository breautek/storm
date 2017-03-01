
var Connection = require('./Connection');

class MySQLConnection extends Connection {
	constructor(conn) {
		super(conn);
	}

	query(query, params) {
		return new Promise((resolve, reject) => {
			this.getAPI().query(query, params, (err, result) => {
				if (err) {
					return reject(err);
				}

				return resolve(result);
			});
		});
	}

	close() {
		return new Promise((resolve, reject) => {
			var api = this.getAPI();
			api.end((error) => {
				if (error) {
					return reject(error);
				}

				return resolve();
			});
		});
	}
};

module.exports = MySQLConnection;
