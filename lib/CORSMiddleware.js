"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Middleware_1 = require("./Middleware");
const instance_1 = require("./instance");
class CORSMiddleware extends Middleware_1.Middleware {
    constructor(allowedOrigin, allowedHeaders, allowedMethods) {
        super();
        this._allowedOrigin = (!allowedOrigin) ? this.getDefaultAllowedOrigin() : allowedOrigin;
        this._allowedHeaders = (!allowedHeaders) ? this.getDefaultAllowedHeaders() : allowedHeaders;
        this._allowedMethods = (!allowedMethods) ? this.getDefaultAllowedMethods() : allowedMethods;
    }
    getDefaultAllowedOrigin() {
        return '*';
    }
    getDefaultAllowedHeaders() {
        return [
            'Accept',
            instance_1.getInstance().getConfig().authentication_header,
            'X-Requested-With',
            'Content-Type',
            'Access-Control-Allow-Origin'
        ];
    }
    getDefaultAllowedMethods() {
        return [
            'GET',
            'POST',
            'HEAD',
            'OPTIONS',
            'DELETE',
            'PUT'
        ];
    }
    execute(request, response) {
        response.setHeader('Access-Control-Allow-Origin', this._allowedOrigin);
        response.setHeader('Access-Control-Allow-Headers', this._allowedHeaders.join(', '));
        response.setHeader('Access-Control-Allow-Methods', this._allowedMethods.join(', '));
        return Promise.resolve({
            request: request,
            response: response
        });
    }
}
exports.CORSMiddleware = CORSMiddleware;
//# sourceMappingURL=CORSMiddleware.js.map