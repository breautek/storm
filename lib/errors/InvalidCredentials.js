'use strict';

var BTError = require('./BTError');
var ErrorCode = require('./ErrorCode');

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
};

module.exports = InvalidCredentials;
