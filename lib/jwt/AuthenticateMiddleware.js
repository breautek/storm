'use strict';

var Middleware = require('../http/Middleware');
var StatusCode = require('../http/StatusCode');
var ResponseData = require('../http/ResponseData');
var Token = require('./Token');

class AuthenticateMiddleware extends Middleware {
	constructor() {
		super();
		this.logger = global._btapiframework_app_instance__.getLogger();
	}

	execute(request, response, options) {
		var config = global._btapiframework_app_instance__.getConfig();

		var authHeader = config.authentication_header;

		var token = request.getHeader(authHeader);

		return new Promise((resolve, reject) => {
			this.verify(token).then((data) => {
				console.log('tokenData', data);
				return this.authenticate(options, data);
			}).then((data) => {
				resolve(data);
			}).catch((error) => {
				this.logger.error(error);
				reject(new ResponseData(StatusCode.ERR_UNAUTHORIZED, {
					code : error.name,
					reason : error.message
				}));
			});
		});
	}

	verify(token) {
		var t = new Token('thisisasecret');
		return t.verify(token);
	}

	authenticate(tokenData) {
		throw new Error('AuthenticateMiddleware.authenticate is abstract.');
	}
};

module.exports = AuthenticateMiddleware;
