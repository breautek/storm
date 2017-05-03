'use strict';

var BTError = require('./BTError');
var ErrorCode = require('./ErrorCode');
var StatusCode = require('../http/StatusCode');

class ExpiredToken extends BTError {
	constructor(details) {
		super(details);
	}

	getMessage() {
		return `Your login session has expired.`;
	}

	getCode() {
		return ErrorCode.EXPIRED_TOKEN;
	}

	getHTTPCode() {
		return StatusCode.ERR_UNAUTHORIZED;
	}
};

module.exports = ExpiredToken;
