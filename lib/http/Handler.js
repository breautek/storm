'use strict';

var StatusCode = require('./StatusCode');
var LoggerMiddleware = require('./LoggerMiddleware');

class Handler {
	constructor(app, logRequests) {
		// this._middlewares = [];

		if (logRequests === undefined) {
			logRequests = true;
		}

		this.logRequests = logRequests;
		this.loggerMiddleware = new LoggerMiddleware();
	}

	_log(request, response) {
		var promise;
		if (this.logRequests) {
			promise = this.loggerMiddleware.execute(request, response);
		}
		else {
			promise = Promise.resolve();
		}

		return promise;
	}

	getDB() {
		return this._app.getDB();
	}

	get(request, response) {
		this._log(request, response).then((data) => {
			this._get(request, response);
		});
	}

	post(request, response) {
		this._log(request, response).then((data) => {
			this._post(request, response);
		});
	}

	delete(request, response) {
		this._log(request, response).then((data) => {
			this._delete(request, response);
		});
	}

	put(request, response) {
		this._log(request, response).then((data) => {
			this._put(request, response);
		});
	}

	patch(request, response) {
		this._log(request, response).then((data) => {
			this._patch(request, response);
		});
	}

	copy(request, response) {
		this._log(request, response).then((data) => {
			this._copy(request, response);
		});
	}

	head(request, response) {
		this._log(request, response).then((data) => {
			this._head(request, response);
		});
	}

	options(request, response) {
		this._log(request, response).then((data) => {
			this._options(request, response);
		});
	}

	link(request, response) {
		this._log(request, response).then((data) => {
			this._link(request, response);
		});
	}

	unlink(request, response) {
		this._log(request, response).then((data) => {
			this._unlink(request, response);
		});
	}

	purge(request, response) {
		this._log(request, response).then((data) => {
			this._purge(request, response);
		});
	}

	lock(request, response) {
		this._log(request, response).then((data) => {
			this._lock(request, response);
		});
	}

	unlock(request, response) {
		this._log(request, response).then((data) => {
			this._unlock(request, response);
		});
	}

	view(request, response) {
		this._log(request, response).then((data) => {
			this._view(request, response);
		});
	}

	_get(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_post(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();	
	}

	_delete(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_put(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	//Experimental
	_patch(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();	
	}

	_copy(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_head(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_options(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_link(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_unlink(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_purge(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_lock(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_unlock(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	_view(request, response) {
		response.status(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}
};

module.exports = Handler;
