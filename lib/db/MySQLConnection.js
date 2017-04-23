
var Connection = require('./Connection');

class MysqlConnection extends Connection {
	constructor(conn, isReadOnly) {
		super(conn);
		this._readOnly = !!isReadOnly;
		this.logger = global._btapiframework_app_instance__.getLogger();
	}

	query(query, params) {
		return new Promise((resolve, reject) => {
			var queryObject = this.getAPI().query(query, params, (err, result) => {
				if (err) {
					return reject(err);
				}

				return resolve(result);
			});
			this.logger.trace(queryObject.sql);
		});
	}

	isReadOnly() {
		return this._readOnly;
	}

	startTransaction() {
		if (this.isReadOnly()) {
			return Promise.reject(new Error('A readonly connection cannot start a transaction.'));
		}

		if (this.isTransaction()) {
			return Promise.reject(new Error('Connection is already has an active transaction.'));
		}

		this._isTransaction = true;

		return new Promise((resolve, reject) => {
			this.query('START TRANSACTION').then(resolve).catch((error) => {
				this._isTransaction = false;
				this.logger.error(error);
				reject(error);
			});
		})
	}

	endTransaction(requiresRollback) {
		return (requiresRollback) ? this.rollback() : this.commit();
	}

	rollback() {
		if (!this.isTransaction()) {
			return Promise.reject(new Error('Cannot rollback when there is no active transaction.'));
		}

		return new Promise((resolve, reject) => {
			this.query('ROLLBACK').then(() => {
				this._isTransaction = false;
				resolve();
			}).catch((error) => {
				this.logger.error(error);
				reject(error);
			});
		});
	}

	commit() {
		if (!this.isTransaction()) {
			return Promise.reject(new Error('Cannot commit when there is no active transaction.'));
		}

		return new Promise((resolve, reject) => {
			this.query('COMMIT').then(() => {
				this._isTransaction = false;
				resolve();
			}).catch((error) => {
				this.logger.error(error);
				reject(error);
			});
		});	
	}

	_setTransaction(active) {
		this._isTransaction = active;
		this.logger.trace(`Transaction is active: ${this._isTransaction}`);
	}

	isTransaction() {
		return this._isTransaction;
	}

	close() {
		if (this.isTransaction()) {
			return Promise.reject(new Error('Cannot close a connection while there is an active transaction. Use commit or rollback first.'));
		}

		return new Promise((resolve, reject) => {
			this.getAPI().release((error) => {
				if (error) {
					return reject(error);
				}

				return resolve();
			});
		});
	}
};

module.exports = MysqlConnection;
