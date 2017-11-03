'use strict';

class Middleware {
	constructor() {}

	//Returns promise
	execute(request, response, options) {
		throw new Error('Middleware.execute is abstract.');
	}
};

module.exports = Middleware;
