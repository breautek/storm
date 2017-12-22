"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Middleware_1 = require("./Middleware");
const instance_1 = require("./instance");
class LoggerMiddleware extends Middleware_1.Middleware {
    constructor() {
        super();
    }
    execute(request, response, options) {
        return new Promise((resolve, reject) => {
            instance_1.getInstance().getLogger().info(`${request.getIP()} - ${request.getMethod()} ${request.getURL()}`);
            resolve();
        });
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=LoggerMiddleware.js.map