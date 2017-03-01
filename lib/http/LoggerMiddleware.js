'use strict';

var Middleware = require('./Middleware');

class LoggerMiddleware extends Middleware {
	constructor() {
		super();
	}

	execute(options, request, response) {
		return new Promise((resolve, reject) => {
			global._btapiframework_app_instance__.getLogger().info(`${request.getIP()} - ${request.getMethod()} ${request.getURL()}`);
			resolve();
		});
	}
};

module.exports = LoggerMiddleware;
