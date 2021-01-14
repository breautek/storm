// Copyright (C) 2017  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import {Application} from './Application';
import {IServiceHeaders} from './IServiceHeaders';
import {HTTPMethod} from './HTTPMethod';
import {ServiceResponse} from './ServiceResponse';
import * as http from 'http';
import { IDictionary } from '@totalpave/interfaces';

const TAG: string = 'ServiceProvider';
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

    public getApp(): Application {
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

    protected _createURL(url: string, queryParams?: IDictionary): string {
        let queryString: string = '';

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

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public request(method: HTTPMethod, url: string, accessToken: string, data: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return new Promise<ServiceResponse>((resolve, reject) => {
            let httpOpts: http.RequestOptions = {
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

            this._app.getLogger().trace(TAG, `ServiceProvider Request`);
            this._app.getLogger().trace(TAG, `METHOD: ${httpOpts.method}`);
            this._app.getLogger().trace(TAG, `HOSTNAME: ${httpOpts.hostname}`);
            this._app.getLogger().trace(TAG, `PORT: ${httpOpts.port}`);
            this._app.getLogger().trace(TAG, `PATH: ${httpOpts.path}`);
            this._app.getLogger().trace(TAG, `HEADERS: ${JSON.stringify(httpOpts.headers)}`);
            
            let responseData: Buffer = Buffer.from('');

            let request: http.ClientRequest = http.request(httpOpts, (response: http.IncomingMessage) => {
                this._app.getLogger().trace(TAG, `ServiceProvider Response Status: ${response.statusCode}`);
                this._app.getLogger().trace(TAG, `ServiceProvider Response Headers: ${JSON.stringify(response.headers)}`);

                response.on('data', (chunk: Buffer) => {
                    this._app.getLogger().trace(TAG, `ServiceProvider Received Chunk: ${chunk}`);
                    responseData = Buffer.concat([ responseData, chunk ]);
                });

                response.on('end', () => {
                    this._app.getLogger().trace(TAG, `ServiceProvider request has completed.`);
                    resolve(new ServiceResponse(responseData, response));
                });

                response.on('error', (e: Error) => {
                    this._app.getLogger().error(TAG, e);
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

    private _sendRequest(request: http.ClientRequest): void {
        request.end();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public get(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.GET, this._createURL(url, data), accessToken, NO_DATA, headers, additionalOptions);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public post(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.POST, this._createURL(url), accessToken, data, headers, additionalOptions);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public put(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.PUT, this._createURL(url), accessToken, data, headers, additionalOptions);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public delete(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.DELETE, this._createURL(url), accessToken, data, headers, additionalOptions);
    }
}
