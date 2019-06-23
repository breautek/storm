"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCode_1 = require("./StatusCode");
const instance_1 = require("./instance");
class Handler {
    constructor(app) {
        this._app = app;
        this._middlewares = this.initMiddlewares();
        if (this._middlewares.length > 0) {
            console.log(new Error('Handler middlewares is deprecated and will be removed in the future.').stack);
        }
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
        return this._app.getDB();
    }
    _getNextMiddleware(index) {
        return this._middlewares[index];
    }
    _executeMiddlewares(request, response, index = 0) {
        return new Promise((resolve, reject) => {
            var promises = [];
            var firedDeprecation = false;
            for (var i = 0; i < this._middlewares.length; i++) {
                if (!firedDeprecation) {
                    console.log(new Error('Handler._executeMiddlewares is deprecated. Will be removed in the future.').stack);
                    firedDeprecation = true;
                }
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
}
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map