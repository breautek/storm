'use strict';

var BTError = require('./BTError');
var ErrorCode = require('./ErrorCode');

class InternalError extends BTError {
	constructor(details) {
		super(details);
	}

	getMessage() {
		return 'An internal server error has occured. Please try again.';
	}

	getCode() {
		return ErrorCode.INTERNAL;
	}
};

module.exports = InternalError;
