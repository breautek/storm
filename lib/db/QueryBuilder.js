'use strict';

class QueryBuilder {
	constructor() {
		this.query = {};
		this.queryType = null;
	}

	select(tableFields) {
		if (this.queryType !== null) {
			throw new Error('select() can only be invoked at the beginning of a statement.');
		}

		for (var i in tableFields) {
			
		}
	}

	build() {

	}

	clear() {
		this.query = {};
	}
};

module.exports = QueryBuilder;
