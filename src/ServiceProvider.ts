
import {Application} from './Application';
import {ServiceHeaders} from './ServiceHeaders';
import {HTTPMethod} from './HTTPMethod';
import {ServiceResponse} from './ServiceResponse';
import * as http from 'http';

const NO_DATA: string = `|${0x0}|`;

export abstract class ServiceProvider {
    private _app: Application;

    public constructor(app: Application) {
        this._app = app;
    }

    protected abstract _getDomain(): string;
    protected abstract _getBase(): string;

    private _getSecret(): string {
        return this._app.getConfig().backend_authentication_secret;
    }

    public urlSuffix(): string {
        return '/';
    }

    protected _getProtocol(): string {
        return 'https';
    }

    public getVersion(): string {
        return 'v1';
    }

    protected abstract _getPort(): number;

    protected _createURL(url: string, queryParams?: any): string {
        var queryString: string = '';

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

    public request(method: HTTPMethod, url: string, data: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return new Promise<ServiceResponse>((resolve, reject) => {
            var httpOpts: http.RequestOptions = {
                port: this._getPort(),
                hostname: this._getDomain(),
                method: method,
                path: url,
                headers: headers || {}
            };

            httpOpts.headers[this._app.getConfig().backend_authentication_header] = this._getSecret();
            
            var responseData: Buffer;

            var request: http.ClientRequest = http.request(httpOpts, (response: http.IncomingMessage) => {
                console.log(`STATUS: ${response.statusCode}`);
                console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

                response.on('data', (chunk: Buffer) => {
                    if (!responseData) {
                        responseData = chunk;
                    }
                    else {
                        responseData = Buffer.concat([responseData,chunk]);
                    }
                });

                response.on('end', () => {
                    resolve(new ServiceResponse(responseData, response));
                });

                response.on('error', (e: Error) => {
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

    public get(url: string, data?: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.GET, this._createURL(url, data), NO_DATA, headers, additionalOptions);
    }

    public post(url: string, data?: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.POST, url, data, headers, additionalOptions);
    }

    public put(url: string, data?: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.PUT, url, data, headers, additionalOptions);
    }

    public delete(url: string, data?: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.DELETE, url, data, headers, additionalOptions);
    }
}
