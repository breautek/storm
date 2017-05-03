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

		var token = new Token(request.getHeader(authHeader));

		return new Promise((resolve, reject) => {
			var tokenManager = global._btapiframework_app_instance__.getTokenManager();
			tokenManager.verify(token).then((data) => {
				return this.authenticate(data, options);
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

	authenticate(tokenData, options) {
		throw new Error('AuthenticateMiddleware.authenticate is abstract.');
	}
};

module.exports = AuthenticateMiddleware;
