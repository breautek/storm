'use strict';

class Request {
	constructor(request) {
		this._request = request;
	}

	getBody() {
		return this._request.body;
	}

	getHeaders() {
		return this._request.headers;
	}

	getHeader(name) {
		return this._request.headers[name];
	}

	getQueryVariables() {
		return this._request.query;
	}

	getQueryVariable(name) {
		return this._request.query[name];
	}

	getParams() {
		return this._request.params;
	}

	getParam(name) {
		return this._request.params[name];
	}

	getIP() {
		return this._request.ip;
	}

	getHostname() {
		return this._request.hostname;
	}

	getMethod() {
		return this._request.method;
	}

	getURL() {
		return this._request.originalUrl;
	}

	isSecure() {
		return this._request.secure;
	}

	pipe(destination) {
		return this._request.pipe(destination);
	}

	unpipe(source) {
		this._request.unpipe(source);
	}
};

module.exports = Request;
