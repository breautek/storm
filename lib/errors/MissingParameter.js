'use strict';

var BTError = require('./BTError');
var ErrorCode = require('./ErrorCode');
var StatusCode = require('../http/StatusCode');

class MissingParameter extends BTError {
	constructor(details) {
		super(details);
	}

	getMessage() {
		return `Missing parameter (${this.getDetails().parameter}).`;
	}

	getCode() {
		return ErrorCode.MISSING_PARAMETER;
	}

	getHTTPCode() {
		return StatusCode.ERR_BAD_REQUEST;
	}
};

module.exports = MissingParameter;
