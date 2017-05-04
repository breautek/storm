'use strict';

var BTError = require('./BTError');
var ErrorCode = require('./ErrorCode');
var StatusCode = require('../http/StatusCode');

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

	getHTTPCode() {
		return StatusCode.INTERNAL_ERROR;
	}
};

module.exports = InternalError;
