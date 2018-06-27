"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Request {
    constructor(request) {
        this.request = request;
    }
    getBody() {
        return this.request.body;
    }
    getFields() {
        return this.request.fields;
    }
    getFiles() {
        return this.request.files;
    }
    getHeaders() {
        return this.request.headers;
    }
    getHeader(name) {
        var value = this.request.headers[name.toLowerCase()];
        if (typeof value === 'string') {
            return value;
        }
        else {
            return value && value[0] ? value[0] : null;
        }
    }
    getQueryVariables() {
        return this.request.query;
    }
    getParams() {
        return this.request.params;
    }
    getParam(name) {
        return this.request.params[name];
    }
    getIP() {
        return this.request.ip;
    }
    getHostname() {
        return this.request.hostname;
    }
    getMethod() {
        return this.request.method;
    }
    getURL() {
        return this.request.originalUrl;
    }
    isSecure() {
        return this.request.secure;
    }
    pipe(destination) {
        return this.request.pipe(destination);
    }
    unpipe(source) {
        this.request.unpipe(source);
    }
    getRequestSource() {
        return this.request;
    }
}
exports.Request = Request;
//# sourceMappingURL=Request.js.map