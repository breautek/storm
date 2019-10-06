"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const StatusCode_1 = require("./StatusCode");
const instance_1 = require("./instance");
const StormError_1 = require("./StormError");
const InternalError_1 = require("./InternalError");
class Handler {
    constructor(app) {
        this._app = app;
        this._middlewares = this._initMiddlewares();
    }
    _initMiddlewares() {
        return [];
    }
    getAccessToken(request) {
        let config = instance_1.getInstance().getConfig();
        let authHeader = config.authentication_header;
        return request.getHeader(authHeader);
    }
    getDB() {
        return this._app.getDB();
    }
    _executeMiddlewares(request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let result = {
                request,
                response
            };
            try {
                for (let i = 0; i < this._middlewares.length; i++) {
                    let middleware = this._middlewares[i];
                    console.log(`executing middleware ${i}`);
                    result = yield middleware.execute(result.request, result.response);
                }
            }
            catch (ex) {
                instance_1.getInstance().getLogger().error(ex);
                let error = null;
                if (!(ex instanceof StormError_1.StormError)) {
                    error = new InternalError_1.InternalError(ex);
                }
                else {
                    error = ex;
                }
                this._onMiddlewareReject(request, response, error);
                return Promise.reject(error);
            }
            if (!result) {
                result = {
                    request: null,
                    response: null
                };
            }
            if (!result.request) {
                result.request = request;
            }
            if (!result.response) {
                result.response = response;
            }
            return Promise.resolve(result);
        });
    }
    _onMiddlewareReject(request, response, error) {
        response.error(error);
    }
    get(request, response) {
        return new Promise((resolve, reject) => {
            this._executeMiddlewares(request, response).then((result) => {
                this._get(result.request, result.response);
                resolve();
            }).catch((error) => {
                this._onMiddlewareReject(request, response, error);
                reject(error);
            });
        });
    }
    put(request, response) {
        return new Promise((resolve, reject) => {
            this._executeMiddlewares(request, response).then((result) => {
                this._put(result.request, result.response);
                resolve();
            }).catch((error) => {
                this._onMiddlewareReject(request, response, error);
                reject(error);
            });
        });
    }
    post(request, response) {
        return new Promise((resolve, reject) => {
            this._executeMiddlewares(request, response).then((result) => {
                this._post(result.request, result.response);
                resolve();
            }).catch((error) => {
                this._onMiddlewareReject(request, response, error);
                reject(error);
            });
        });
    }
    delete(request, response) {
        return new Promise((resolve, reject) => {
            this._executeMiddlewares(request, response).then((result) => {
                this._delete(result.request, result.response);
                resolve();
            }).catch((error) => {
                this._onMiddlewareReject(request, response, error);
                reject(error);
            });
        });
    }
    _get(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
        return Promise.resolve();
    }
    _post(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
        return Promise.resolve();
    }
    _put(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
        return Promise.resolve();
    }
    _delete(request, response) {
        response.setStatus(StatusCode_1.StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
        return Promise.resolve();
    }
}
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map