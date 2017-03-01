'use strict';

var MySQLConnection = require('./MySQLConnection');

class MySQLTransaction extends MySQLConnection {
	constructor(connection) {
		super(connection)
		this.isTransactionOpen = true;
	}

	commit() {

	}

	rollback() {
		
	}

	close() {
		if (this.isTransactionOpen) {
			return Promise.reject(new Error('Transaction is left opened. A commit or rollback is needed.'));
		}
		else {
			return super.close();
		}
	}
};

module.exports = MySQLTransaction;
