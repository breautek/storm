'use strict';

var StatusCode = require('./StatusCode');

class Handler {
	constructor() {
		// this.get = this.get.bind(this);
		// this.post = this.post.bind(this);
		// this.delete = this.delete.bind(this);
		// this.put = this.put.bind(this);
		// this.patch = this.patch.bind(this);
		// this.copy = this.copy.bind(this);
		// this.head = this.head.bind(this);
		// this.options = this.options.bind(this);
		// this.link = this.link.bind(this);
		// this.unlink = this.unlink.bind(this);
		// this.purge = this.purge.bind(this);
		// this.lock = this.lock.bind(this);
		// this.unlock = this.unlock.bind(this);
		// this.view = this.view.bind(this);
		this._middlewares = [];
	}

	addMiddleware(middleware, params) {
		this._middlewares.push({
			middleware: middleware,
			params : params
		});
	}

	removeMiddleware(middleware) {
		var idx = null;
		for (var i = 0; i < this._middlewares.length; i++) {
			if (this._middlewares[i].middleware === middleware) {
				idx = i;
				break;
			}
		}

		if (idx > -1) {
			this._middlewares.splice(idx, 1);
		}
	}

	_runMiddlewares(request, response) {
		return new Promise((resolve, reject) => {
			var idx = -1;
			var _exec = () => {
				idx++
				var m = this._middlewares[idx];;
				if (m) {
					m.middleware.execute(m.params, request, response).then(_exec).catch(reject);
				}
				else {
					resolve();
				}
			};
			
			_exec();
		});
	}

	get(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._get(request, response);
		})
	}

	post(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._post(request, response);
		})
	}

	delete(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._delete(request, response);
		})
	}

	put(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._put(request, response);
		})
	}

	patch(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._patch(request, response);
		})
	}

	copy(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._copy(request, response);
		})
	}

	head(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._head(request, response);
		})
	}

	options(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._options(request, response);
		})
	}

	link(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._link(request, response);
		})
	}

	unlink(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._unlink(request, response);
		})
	}

	purge(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._purge(request, response);
		})
	}

	lock(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._lock(request, response);
		})
	}

	unlock(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._unlock(request, response);
		})
	}

	view(request, response) {
		this._runMiddlewares(request, response).then(() => {
			this._view(request, response);
		})
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
