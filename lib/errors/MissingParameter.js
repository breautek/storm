'use strict';

var BTError = require('./BTError');
var ErrorCode = require('./ErrorCode');

class MissingParameter extends BTError {
	constructor(details) {
		super(details);
	}

	getMessage() {
		return `Missing parameter (${this.getDetails().parameter}.`;
	}

	getCode() {
		return ErrorCode.MISSING_PARAMETER;
	}
};

module.exports = MissingParameter;
