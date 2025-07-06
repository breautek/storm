/*
   Copyright 2017-2021 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import {Application} from './Application';
import {HTTPMethod} from './HTTPMethod';
import {ServiceResponse} from './ServiceResponse';
import * as http from 'http';
import { OutgoingHttpHeaders } from 'http2';

const TAG: string = 'ServiceProvider';
const NO_DATA: string = `|${0x0}|`;

export abstract class ServiceProvider {
    private $app: Application;

    public constructor(app: Application) {
        this.$app = app;
    }

    protected abstract _getBase(): string;
    protected abstract _getPort(): number;

    protected _getApp(): Application {
        return this.$app;
    }

    public getApp(): Application {
        return this.$app;
    }

    protected _getDomain(): string {
        return '127.0.0.1';
    }

    private $getSecret(): string {
        return this.$app.getConfig().backend_authentication_secret;
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

    protected _createURL(url: string, queryParams?: Record<any, any>): string {
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

    public request(method: HTTPMethod, url: string, accessToken: string, data: any, headers?: OutgoingHttpHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return new Promise<ServiceResponse>((resolve, reject) => {
            if (!headers) {
                headers = {};
            }

            headers[this.$app.getConfig().authentication_header] = accessToken;
            headers[this.$app.getConfig().backend_authentication_header] = this.$getSecret();
            
            if (!headers['content-type']) {
                headers['content-type'] = 'application/json';
            }

            let httpOpts: http.RequestOptions = {
                port: this._getPort(),
                hostname: `${this._getDomain()}`,
                method: method,
                path: url,
                headers: headers || {}
            };

            this.$app.getLogger().trace(TAG, `ServiceProvider Request`);
            this.$app.getLogger().trace(TAG, `METHOD: ${httpOpts.method}`);
            this.$app.getLogger().trace(TAG, `HOSTNAME: ${httpOpts.hostname}`);
            this.$app.getLogger().trace(TAG, `PORT: ${httpOpts.port}`);
            this.$app.getLogger().trace(TAG, `PATH: ${httpOpts.path}`);
            this.$app.getLogger().trace(TAG, `HEADERS: ${JSON.stringify(httpOpts.headers)}`);
            
            let responseData: Buffer = Buffer.from('');

            let request: http.ClientRequest = http.request(httpOpts, (response: http.IncomingMessage) => {
                this.$app.getLogger().trace(TAG, `ServiceProvider Response Status: ${response.statusCode}`);
                this.$app.getLogger().trace(TAG, `ServiceProvider Response Headers: ${JSON.stringify(response.headers)}`);

                response.on('data', (chunk: Buffer) => {
                    this.$app.getLogger().trace(TAG, `ServiceProvider Received Chunk: ${chunk}`);
                    responseData = Buffer.concat([ responseData, chunk ]);
                });

                response.on('end', () => {
                    this.$app.getLogger().trace(TAG, `ServiceProvider request has completed.`);
                    resolve(new ServiceResponse(responseData, response));
                });

                response.on('error', (e: Error) => {
                    this.$app.getLogger().error(TAG, e);
                    reject(e);
                });
            });

            if (data && data !== NO_DATA) {
                data = JSON.stringify(data);
                request.write(data);
            }

            this.$sendRequest(request);
        });
    }

    private $sendRequest(request: http.ClientRequest): void {
        request.end();
    }

    public get(url: string, accessToken: string, data?: any, headers?: OutgoingHttpHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.GET, this._createURL(url, data), accessToken, NO_DATA, headers, additionalOptions);
    }

    public post(url: string, accessToken: string, data?: any, headers?: OutgoingHttpHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.POST, this._createURL(url), accessToken, data, headers, additionalOptions);
    }

    public put(url: string, accessToken: string, data?: any, headers?: OutgoingHttpHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.PUT, this._createURL(url), accessToken, data, headers, additionalOptions);
    }

    public delete(url: string, accessToken: string, data?: any, headers?: OutgoingHttpHeaders, additionalOptions?: any): Promise<ServiceResponse> {
        return this.request(HTTPMethod.DELETE, this._createURL(url), accessToken, data, headers, additionalOptions);
    }
}
