'use strict';

var BTError = require('./BTError');
var ErrorCode = require('./ErrorCode');
var StatusCode = require('../http/StatusCode');

class InvalidCredentials extends BTError {
	constructor(details) {
		super(details);
	}

	getMessage() {
		return `The username or password is incorrect.`;
	}

	getCode() {
		return ErrorCode.INVALID_CREDENTIALS;
	}

	getHTTPCode() {
		return StatusCode.ERR_UNAUTHORIZED;
	}
};

module.exports = InvalidCredentials;
