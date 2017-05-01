'use strict';

class BTError extends Error {
	constructor(details) {
		super();
		this.details = details || null;
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
}

module.exports = BTError;
