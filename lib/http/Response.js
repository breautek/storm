'use strict';

var StatusCode = require('./StatusCode');
var ResponseData = require('./ResponseData');

class Response {
	constructor(response) {
		this._response = response;
	}

	setStatus(statusCode) {
		this._response.status(statusCode);
		return this;
	}

	send(data) {
		if (data instanceof ResponseData) {
			this.setStatus(data.getStatus()).send(data.getData());
		}
		else if (data instanceof BTError) {
			var statusCode = data.getHTTPCode();
			this.setStatus(statusCode).send(data.getErrorResponse);
		}
		else {
			this._response.send(data);
		}
	}

	success(data) {
		if (data === undefined) {
			this.setStatus(StatusCode.OK_NO_CONTENT);
		}
		else {
			this.setStatus(StatusCode.OK);
		}

		this.send(data);
	}

	setHeader(key, value) {
		this._response.set(key, value);
	}

	setHeaders(keyValuePair) {
		this._response.set(keyValuePair);
	}

	isHeadersSent() {
		return this._response.headersSent;
	}

	error(data) {
		this.setStatus(StatusCode.ERR_BAD_REQUEST).send(data);
	}

	unauthorized(data) {
		this.setStatus(StatusCode.ERR_UNAUTHORIZED).send(data);	
	}

	forbidden(data) {
		this.setStatus(StatusCode.ERR_FORBIDDEN).send(data);
	}

	conflict(data) {
		this.setStatus(StatusCode.ERR_CONFLICT).send(data);
	}

	notFound(data) {
		this.setStatus(StatusCode.ERR_NOT_FOUND).send(data);
	}

	internalError(data) {
		this.setStatus(StatusCode.INTERNAL_ERROR).send(data);
	}
};

module.exports = Response;
