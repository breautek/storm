'use strict';

var BTError = require('./BTError');
var ErrorCode = require('./ErrorCode');

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
};

module.exports = ExpiredToken;
