'use strict';

var StatusCode = require('./StatusCode');
var LoggerMiddleware = require('./LoggerMiddleware');

class Handler {
	constructor(app, logRequests) {
		// this._middlewares = [];
		this.$_app = app;
		if (logRequests === undefined) {
			logRequests = true;
		}

		this.logRequests = logRequests;
		this.loggerMiddleware = new LoggerMiddleware();
	}

	$_log(request, response) {
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
		return this.$_app.getDB();
	}

	get(request, response) {
		this.$_log(request, response).then((data) => {
			this.$get(request, response);
		});
	}

	post(request, response) {
		this.$_log(request, response).then((data) => {
			this.$post(request, response);
		});
	}

	delete(request, response) {
		this.$_log(request, response).then((data) => {
			this.$delete(request, response);
		});
	}

	put(request, response) {
		this.$_log(request, response).then((data) => {
			this.$put(request, response);
		});
	}

	patch(request, response) {
		this.$_log(request, response).then((data) => {
			this.$patch(request, response);
		});
	}

	copy(request, response) {
		this.$_log(request, response).then((data) => {
			this.$copy(request, response);
		});
	}

	head(request, response) {
		this.$_log(request, response).then((data) => {
			this.$head(request, response);
		});
	}

	options(request, response) {
		this.$_log(request, response).then((data) => {
			this.$options(request, response);
		});
	}

	link(request, response) {
		this.$_log(request, response).then((data) => {
			this.$link(request, response);
		});
	}

	unlink(request, response) {
		this.$_log(request, response).then((data) => {
			this.$unlink(request, response);
		});
	}

	purge(request, response) {
		this.$_log(request, response).then((data) => {
			this.$purge(request, response);
		});
	}

	lock(request, response) {
		this.$_log(request, response).then((data) => {
			this.$lock(request, response);
		});
	}

	unlock(request, response) {
		this.$_log(request, response).then((data) => {
			this.$unlock(request, response);
		});
	}

	view(request, response) {
		this.$_log(request, response).then((data) => {
			this.$view(request, response);
		});
	}

	$get(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$post(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();	
	}

	$delete(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$put(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	//Experimental
	$patch(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();	
	}

	$copy(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$head(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$options(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$link(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$unlink(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$purge(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$lock(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$unlock(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}

	$view(request, response) {
		response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
	}
};

module.exports = Handler;
