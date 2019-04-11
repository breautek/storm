
import {Application} from './Application';
import {IServiceHeaders} from './IServiceHeaders';
import {HTTPMethod} from './HTTPMethod';
import {ServiceResponse} from './ServiceResponse';
import * as http from 'http';

const NO_DATA: string = `|${0x0}|`;

export abstract class ServiceProvider {
    private _app: Application;

    public constructor(app: Application) {
        this._app = app;
    }

    protected abstract _getBase(): string;
    protected abstract _getPort(): number;

    protected _getApp(): Application {
        return this._app;
    }

    protected _getDomain(): string {
        return '127.0.0.1';
    }

    private _getSecret(): string {
        return this._app.getConfig().backend_authentication_secret;
    }

    public urlSuffix(): string {
        return '/';
    }

    protected _getProtocol(): string {
        return 'http';
    }

    public getVersion(): string {
        return 'v1';
    }

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

        return `/api/${this._getBase()}/${this.getVersion()}/${url}${this.urlSuffix()}${queryString}`;
    }

    // tslint:disable-next-line max-line-length
    public request(method: HTTPMethod, url: string, accessToken: string, data: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return new Promise<ServiceResponse>((resolve, reject) => {
            var httpOpts: http.RequestOptions = {
                port: this._getPort(),
                hostname: `${this._getDomain()}`,
                method: method,
                path: url,
                headers: headers || {}
            };

            httpOpts.headers[this._app.getConfig().authentication_header] = accessToken;
            httpOpts.headers[this._app.getConfig().backend_authentication_header] = this._getSecret();

            this._app.getLogger().trace(`ServiceProvider Request`);
            this._app.getLogger().trace(`METHOD: ${httpOpts.method}`);
            this._app.getLogger().trace(`HOSTNAME: ${httpOpts.hostname}`);
            this._app.getLogger().trace(`PORT: ${httpOpts.port}`);
            this._app.getLogger().trace(`PATH: ${httpOpts.path}`);
            this._app.getLogger().trace(`HEADERS: ${JSON.stringify(httpOpts.headers)}`);
            
            var responseData: Buffer;

            var request: http.ClientRequest = http.request(httpOpts, (response: http.IncomingMessage) => {
                this._app.getLogger().trace(`ServiceProvider Response Status: ${response.statusCode}`);
                this._app.getLogger().trace(`ServiceProvider Response Headers: ${JSON.stringify(response.headers)}`);

                response.on('data', (chunk: Buffer) => {
                    this._app.getLogger().trace(`ServiceProvider Received Chunk: ${chunk}`);
                    if (!responseData) {
                        responseData = chunk;
                    }
                    else {
                        responseData = Buffer.concat([responseData,chunk]);
                    }
                });

                response.on('end', () => {
                    this._app.getLogger().trace(`ServiceProvider request has completed.`);
                    resolve(new ServiceResponse(responseData, response));
                });

                response.on('error', (e: Error) => {
                    this._app.getLogger().error(e.message);
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

    public get(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.GET, this._createURL(url, data), accessToken, NO_DATA, headers, additionalOptions);
    }

    public post(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.POST, url, accessToken, data, headers, additionalOptions);
    }

    public put(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.PUT, url, accessToken, data, headers, additionalOptions);
    }

    public delete(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.DELETE, url, accessToken, data, headers, additionalOptions);
    }
}
