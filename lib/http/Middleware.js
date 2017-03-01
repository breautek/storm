'use strict';

class Middleware {
	constructor() {
		// this.execute = this.execute.bind(this);
	}

	//Returns promise
	execute(options, request, response) {
		throw new Error('Middleware.execute is abstract.');
	}
};

module.exports = Middleware;
