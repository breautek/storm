"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCode_1 = require("./StatusCode");
const LoggerMiddleware_1 = require("./LoggerMiddleware");
const instance_1 = require("./instance");
class Handler {
    constructor(app) {
        this.app = instance_1.getInstance();
        this.loggerMiddleware = this.initLoggerMiddleware();
    }
    initLoggerMiddleware() {
        return new LoggerMiddleware_1.LoggerMiddleware();
    }
    log(request, response) {
        var promise;
        if (this.loggerMiddleware) {
            promise = this.loggerMiddleware.execute(request, response);
        }
        else {
            promise = Promise.resolve();
        }
        return promise;
    }
    getDB() {
        return this.app.getDB();
    }
    get(request, response) {
        this.log(request, response).then((data) => {
            this._get(request, response);
        });
    }
    put(request, response) {
        this.log(request, response).then((data) => {
            this._put(request, response);
        });
    }
    post(request, response) {
        this.log(request, response).then((data) => {
            this._post(request, response);
        });
    }
    delete(request, response) {
        this.log(request, response).then((data) => {
            this._delete(request, response);
        });
    }
    patch(request, response) {
        this.log(request, response).then((data) => {
            this._patch(request, response);
        });
    }
    copy(request, response) {
        this.log(request, response).then((data) => {
            this._copy(request, response);
        });
    }
    head(request, response) {
        this.log(request, response).then((data) => {
            this._head(request, response);
        });
    }
    options(request, response) {
        this.log(request, response).then((data) => {
            this._options(request, response);
        });
    }
    link(request, response) {
        this.log(request, response).then((data) => {
            this._link(request, response);
        });
    }
    unlink(request, response) {
        this.log(request, response).then((data) => {
            this._unlink(request, response);
        });
    }
    purge(request, response) {
        this.log(request, response).then((data) => {
            this._purge(request, response);
        });
    }
    lock(request, response) {
        this.log(request, response).then((data) => {
            this._lock(request, response);
        });
    }
    unlock(request, response) {
        this.log(request, response).then((data) => {
            this._unlock(request, response);
        });
    }
    view(request, response) {
        this.log(request, response).then((data) => {
            this._view(request, response);
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