'use strict';

class Connection {
	constructor(api) {
		this.api = api;
	}

	getAPI() {
		return this.api;
	}

	close() {
		throw new Error('close is abstract.');
	}	
};

module.exports = Connection;
