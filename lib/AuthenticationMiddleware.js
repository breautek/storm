"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCode_1 = require("./StatusCode");
const ResponseData_1 = require("./ResponseData");
const Token_1 = require("./Token");
const instance_1 = require("./instance");
const StormError_1 = require("./StormError");
const InternalError_1 = require("./InternalError");
class AuthenticationMiddleware {
    constructor() {
        this.logger = instance_1.getApplicationLogger();
    }
    execute(request, response, options) {
        let config = instance_1.getInstance().getConfig();
        let authHeader = config.authentication_header;
        let backendAuthHeader = config.backend_authentication_header;
        let backend = request.getHeader(backendAuthHeader);
        return new Promise((resolve, reject) => {
            let token = new Token_1.Token(request.getHeader(authHeader));
            let tokenManager = instance_1.getInstance().getTokenManager();
            let isBackendCall = false;
            if (backend) {
                if (options.allowedBackends) {
                    if (options.allowedBackends.indexOf(backend) > -1) {
                        isBackendCall = true;
                    }
                    else {
                        return reject(new ResponseData_1.ResponseData(StatusCode_1.StatusCode.ERR_FORBIDDEN, {
                            code: 1,
                            reason: ''
                        }));
                    }
                }
                else {
                    return reject(new ResponseData_1.ResponseData(StatusCode_1.StatusCode.ERR_FORBIDDEN, {
                        code: 0,
                        reason: 'This API is not back-end enabled'
                    }));
                }
            }
            let tokenManagerPromise;
            if (isBackendCall) {
                tokenManagerPromise = tokenManager.decode(token);
            }
            else {
                tokenManagerPromise = tokenManager.verify(token);
            }
            tokenManagerPromise.then((data) => {
                return this.authenticate(data, options, isBackendCall);
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                this.logger.error(error);
                let responseData = null;
                if (error && error.name) {
                    switch (error.name) {
                        case 'TokenExpiredError':
                            error = new ResponseData_1.ResponseData(StatusCode_1.StatusCode.ERR_UNAUTHORIZED, {
                                code: error.name,
                                reason: error.message
                            });
                            break;
                        case 'JsonWebTokenError':
                            error = new ResponseData_1.ResponseData(StatusCode_1.StatusCode.ERR_UNAUTHORIZED, {
                                code: error.name,
                                reason: error.message
                            });
                            break;
                    }
                }
                if (error instanceof StormError_1.StormError) {
                    responseData = new ResponseData_1.ResponseData(error.getHTTPCode(), error.getErrorResponse());
                }
                else if (error instanceof ResponseData_1.ResponseData) {
                    responseData = error;
                }
                else {
                    let e = new InternalError_1.InternalError(error);
                    responseData = new ResponseData_1.ResponseData(e.getHTTPCode(), {
                        code: e.getCode(),
                        reason: e.getMessage()
                    });
                }
                reject(responseData);
            });
        });
    }
}
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=AuthenticationMiddleware.js.map