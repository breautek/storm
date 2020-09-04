"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const Middleware_1 = require("./Middleware");
const instance_1 = require("./instance");
class LoggerMiddleware extends Middleware_1.Middleware {
    constructor() {
        super();
    }
    _execute(request, response, options) {
        return new Promise((resolve, reject) => {
            instance_1.getApplicationLogger().info(`${request.getForwardedIP()} (${request.getIP()}) - ${request.getMethod()} ${request.getURL()} - UA(${request.getHeader('user-agent')})`);
            resolve({
                request: request,
                response: response
            });
        });
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=LoggerMiddleware.js.map