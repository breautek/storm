"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCode_1 = require("./StatusCode");
const instance_1 = require("./instance");
class Handler {
    constructor(app) {
        this.app = instance_1.getInstance();
        this._middlewares = this.initMiddlewares();
    }
    initMiddlewares() {
        return [];
    }
    getAccessToken(request) {
        var config = instance_1.getInstance().getConfig();
        var authHeader = config.authentication_header;
        return request.getHeader(authHeader);
    }
    getDB() {
        return this.app.getDB();
    }
    _getNextMiddleware(index) {
        return this._middlewares[index];
    }
    _executeMiddlewares(request, response, index = 0) {
        return new Promise((resolve, reject) => {
            var promises = [];
            for (var i = 0; i < this._middlewares.length; i++) {
                var middleware = this._middlewares[i];
                promises.push(middleware.execute(request, response));
            }
            Promise.all(promises).then(() => {
                resolve();
            }).catch(reject);
        });
    }
    _onMiddlewareReject(request, response, error) {
        response.error(error);
    }
    get(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._get(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    put(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._put(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    post(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._post(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    delete(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._delete(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    patch(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._patch(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    copy(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._copy(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    head(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._head(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    options(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._options(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    link(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._link(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    unlink(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._unlink(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    purge(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._purge(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    lock(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._lock(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    unlock(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._unlock(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    view(request, response) {
        this._executeMiddlewares(request, response).then(() => {
            this._view(request, response);
        }).catch((error) => {
            this._onMiddlewareReject(request, response, error);
        });
    }
    _get(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _post(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _put(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _delete(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _patch(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _copy(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _head(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _options(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _link(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _unlink(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _purge(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _lock(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _unlock(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
    _view(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
}
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map