"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusCode_1 = require("./StatusCode");
const ResponseData_1 = require("./ResponseData");
const instance_1 = require("./instance");
class BackendAuthenticationMiddleware {
    constructor() {
        this.logger = instance_1.getApplicationLogger();
    }
    execute(request, response, options) {
        var config = instance_1.getInstance().getConfig();
        var backendAuthHeader = config.backend_authentication_header;
        var backend = request.getHeader(backendAuthHeader);
        if (backend) {
            if (backend === config.backend_authentication_secret) {
                return Promise.resolve(null);
            }
            else {
                return Promise.reject(new ResponseData_1.ResponseData(StatusCode_1.StatusCode.ERR_UNAUTHORIZED, {
                    code: 0,
                    reason: 'Missing secret'
                }));
            }
        }
        else {
            return Promise.reject(new ResponseData_1.ResponseData(StatusCode_1.StatusCode.ERR_UNAUTHORIZED, {
                code: 0,
                reason: 'Missing secret'
            }));
        }
    }
}
exports.BackendAuthenticationMiddleware = BackendAuthenticationMiddleware;
//# sourceMappingURL=BackendAuthenticationMiddleware.js.map