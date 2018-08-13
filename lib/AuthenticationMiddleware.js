"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCode_1 = require("./StatusCode");
const ResponseData_1 = require("./ResponseData");
const Token_1 = require("./Token");
const instance_1 = require("./instance");
const StormError_1 = require("./StormError");
class AuthenticationMiddleware {
    constructor() {
        this.logger = instance_1.getApplicationLogger();
    }
    execute(request, response, options) {
        var config = instance_1.getInstance().getConfig();
        var authHeader = config.authentication_header;
        var backendAuthHeader = config.backend_authentication_header;
        var backend = request.getHeader(backendAuthHeader);
        if (backend) {
            if (backend === config.backend_authentication_secret) {
                return Promise.resolve(null);
            }
        }
        var token = new Token_1.Token(request.getHeader(authHeader));
        return new Promise((resolve, reject) => {
            var tokenManager = instance_1.getInstance().getTokenManager();
            tokenManager.verify(token).then((data) => {
                return this.authenticate(data, options);
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                this.logger.error(error);
                var responseData = null;
                if (error instanceof StormError_1.StormError) {
                    responseData = new ResponseData_1.ResponseData(error.getHTTPCode(), error.getErrorResponse());
                }
                else {
                    responseData = new ResponseData_1.ResponseData(StatusCode_1.StatusCode.ERR_UNAUTHORIZED, {
                        code: error.name,
                        reason: error.message
                    });
                }
                reject(responseData);
            });
        });
    }
}
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=AuthenticationMiddleware.js.map