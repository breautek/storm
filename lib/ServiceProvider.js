"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPMethod_1 = require("./HTTPMethod");
const ServiceResponse_1 = require("./ServiceResponse");
const http = require("http");
const NO_DATA = `|${0x0}|`;
class ServiceProvider {
    constructor(app) {
        this._app = app;
    }
    _getApp() {
        return this._app;
    }
    getApp() {
        return this._app;
    }
    _getDomain() {
        return '127.0.0.1';
    }
    _getSecret() {
        return this._app.getConfig().backend_authentication_secret;
    }
    urlSuffix() {
        return '/';
    }
    _getProtocol() {
        return 'http';
    }
    getVersion() {
        return 'v1';
    }
    _createURL(url, queryParams) {
        let queryString = '';
        if (queryParams) {
            for (let i in queryParams) {
                if (queryString === '') {
                    queryString = '?' + i + '=' + queryParams[i];
                }
                else {
                    queryString += '&' + i + '=' + queryParams[i];
                }
            }
        }
        return `/api/${this._getBase()}/${this.getVersion()}/${url}${this.urlSuffix()}${queryString}`;
    }
    request(method, url, accessToken, data, headers, additionalOptions) {
        return new Promise((resolve, reject) => {
            let httpOpts = {
                port: this._getPort(),
                hostname: `${this._getDomain()}`,
                method: method,
                path: url,
                headers: headers || {}
            };
            httpOpts.headers[this._app.getConfig().authentication_header] = accessToken;
            httpOpts.headers[this._app.getConfig().backend_authentication_header] = this._getSecret();
            if (!httpOpts.headers['Content-Type']) {
                httpOpts.headers['Content-Type'] = 'application/json';
            }
            this._app.getLogger().trace(`ServiceProvider Request`);
            this._app.getLogger().trace(`METHOD: ${httpOpts.method}`);
            this._app.getLogger().trace(`HOSTNAME: ${httpOpts.hostname}`);
            this._app.getLogger().trace(`PORT: ${httpOpts.port}`);
            this._app.getLogger().trace(`PATH: ${httpOpts.path}`);
            this._app.getLogger().trace(`HEADERS: ${JSON.stringify(httpOpts.headers)}`);
            let responseData = Buffer.from('');
            let request = http.request(httpOpts, (response) => {
                this._app.getLogger().trace(`ServiceProvider Response Status: ${response.statusCode}`);
                this._app.getLogger().trace(`ServiceProvider Response Headers: ${JSON.stringify(response.headers)}`);
                response.on('data', (chunk) => {
                    this._app.getLogger().trace(`ServiceProvider Received Chunk: ${chunk}`);
                    responseData = Buffer.concat([
                        responseData,
                        chunk
                    ]);
                });
                response.on('end', () => {
                    this._app.getLogger().trace(`ServiceProvider request has completed.`);
                    resolve(new ServiceResponse_1.ServiceResponse(responseData, response));
                });
                response.on('error', (e) => {
                    this._app.getLogger().error(e.message);
                    reject(e);
                });
            });
            if (data && data !== NO_DATA) {
                data = JSON.stringify(data);
                request.write(data);
            }
            this._sendRequest(request);
        });
    }
    _sendRequest(request) {
        request.end();
    }
    get(url, accessToken, data, headers, additionalOptions) {
        return this.request(HTTPMethod_1.HTTPMethod.GET, this._createURL(url, data), accessToken, NO_DATA, headers, additionalOptions);
    }
    post(url, accessToken, data, headers, additionalOptions) {
        return this.request(HTTPMethod_1.HTTPMethod.POST, this._createURL(url), accessToken, data, headers, additionalOptions);
    }
    put(url, accessToken, data, headers, additionalOptions) {
        return this.request(HTTPMethod_1.HTTPMethod.PUT, this._createURL(url), accessToken, data, headers, additionalOptions);
    }
    delete(url, accessToken, data, headers, additionalOptions) {
        return this.request(HTTPMethod_1.HTTPMethod.DELETE, this._createURL(url), accessToken, data, headers, additionalOptions);
    }
}
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=ServiceProvider.js.map