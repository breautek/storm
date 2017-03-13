'use strict';

class Connection {
	constructor(api) {
		this.api = api;
	}

	getAPI() {
		return this.api;
	}

	startTransaction() {
		throw new Error('startTransaction is abstract.');
	}

	commit() {
		throw new Error('commit is abstract.');
	}

	rollback() {
		throw new Error('rollback is abstract.');
	}

	close() {
		throw new Error('close is abstract.');
	}	
};

module.exports = Connection;
