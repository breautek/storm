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
        return 'https';
    }
    getVersion() {
        return 'v1';
    }
    _createURL(url, queryParams) {
        var queryString = '';
        if (queryParams) {
            for (var i in queryParams) {
                if (queryString === '') {
                    queryString = '?' + i + '=' + queryParams[i];
                }
                else {
                    queryString += '&' + i + '=' + queryParams[i];
                }
            }
        }
        return `${this._getProtocol()}${this._getDomain()}/${this._getBase()}/${this.getVersion()}/${url}${this.urlSuffix()}${queryString}`;
    }
    request(method, url, accessToken, data, headers, additionalOptions) {
        return new Promise((resolve, reject) => {
            var httpOpts = {
                port: this._getPort(),
                hostname: this._getDomain(),
                method: method,
                path: url,
                headers: headers || {}
            };
            httpOpts.headers[this._app.getConfig().authentication_header] = accessToken;
            httpOpts.headers[this._app.getConfig().backend_authentication_header] = this._getSecret();
            var responseData;
            var request = http.request(httpOpts, (response) => {
                console.log(`STATUS: ${response.statusCode}`);
                console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
                response.on('data', (chunk) => {
                    if (!responseData) {
                        responseData = chunk;
                    }
                    else {
                        responseData = Buffer.concat([responseData, chunk]);
                    }
                });
                response.on('end', () => {
                    resolve(new ServiceResponse_1.ServiceResponse(responseData, response));
                });
                response.on('error', (e) => {
                    reject(e);
                });
            });
            if (data && data !== NO_DATA) {
                data = JSON.stringify(data);
                request.write(data);
            }
            request.end();
        });
    }
    get(url, accessToken, data, headers, additionalOptions) {
        return this.request(HTTPMethod_1.HTTPMethod.GET, this._createURL(url, data), accessToken, NO_DATA, headers, additionalOptions);
    }
    post(url, accessToken, data, headers, additionalOptions) {
        return this.request(HTTPMethod_1.HTTPMethod.POST, url, accessToken, data, headers, additionalOptions);
    }
    put(url, accessToken, data, headers, additionalOptions) {
        return this.request(HTTPMethod_1.HTTPMethod.PUT, url, accessToken, data, headers, additionalOptions);
    }
    delete(url, accessToken, data, headers, additionalOptions) {
        return this.request(HTTPMethod_1.HTTPMethod.DELETE, url, accessToken, data, headers, additionalOptions);
    }
}
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=ServiceProvider.js.map