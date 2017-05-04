'use strict';

var StatusCode = require('../http/StatusCode');

class BTError extends Error {
	constructor(details) {
		super();
		this.details = details || null;
		global._btapiframework_app_instance__.getLogger().error(this.getMessage() + '... See details below:');
		global._btapiframework_app_instance__.getLogger().error(this.getDetails());
	}

	getMessage() {
		throw new Error('getMessage is abstract.');
	}

	getDetails() {
		return this.details;
	}

	getErrorResponse() {
		return {
			message : this.getMessage(),
			code : this.getCode()
		};
	}

	getCode() {
		throw new Error('getCode is abstract.');
	}

	getHTTPCode() {
		return StatusCode.INTERNAL_ERROR;
	}
}

module.exports = BTError;
