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

import {StatusCode} from './StatusCode';
import {ResponseData} from './ResponseData';
import {StormError, IErrorResponse} from './StormError';
import * as express from 'express';
import { InternalError } from './InternalError';
import { getInstance } from './instance';
import { Stream } from 'stream';

const TAG: string = 'Response';

export type SendableData = ResponseData | Error | IErrorResponse | Buffer | any;

export interface IHeaderKeyValuePair {
    [key: string]: string;
}

export class Response<TResponse = SendableData, TErrorResponse = Error | IErrorResponse | string> {
    private $response: express.Response;
    private $created: Date;
    private $requestURL: string;

    public constructor(response: express.Response, requestURL: string) {
        this.$response = response;
        this.$created = new Date();
        this.$requestURL = requestURL;
    }

    public setStatus(status: StatusCode): Response<TResponse, TErrorResponse> {
        this.$response.status(status);
        return this;
    }

    public getStatus(): StatusCode {
        return this.$response.statusCode;
    }

    public redirect(url: string): void {
        this.$response.redirect(url);
    }

    private $send(data?: TResponse | TErrorResponse | StormError | IErrorResponse | Buffer, statusOverride?: StatusCode): void {
        if (data === null || data === undefined) {
            this.setStatus(statusOverride || StatusCode.OK_NO_CONTENT);
            this.$response.send()
        }
        else if (typeof data === 'number') {
            // Numbers needs to be toString as
            // express will interpet them as a status code
            this.$response.send(data.toString());
        }
        else if (data instanceof Buffer || [ 'string', 'boolean' ].indexOf(typeof data) > -1) {
            console.log('RETURNING ', data);
            this.$response.send(data);
        }
        else if (data instanceof Stream.Readable) {
            this.pipe(data);
        }
        else if (data instanceof ResponseData) {
            if (data.getRedirect() !== null) {
                this.redirect(data.getRedirect());
                return;
            }

            let headers: Map<string, string> = data.getHeaders();
            for (let header of headers) {
                this.setHeader(header[0], header[1]);
            }

            this.setStatus(data.getStatus());
            this.$send(data.getData(), data.getStatus());
        }
        else if (data instanceof StormError) {
            this.setStatus(statusOverride || data.getHTTPCode()).send(data.getErrorResponse());
        }
        else {
            this.$response.send(data);
        }
    }

    public send(data?: TResponse | TErrorResponse | StormError | IErrorResponse | Buffer): void {
        this.$send(data);
        getInstance().getLogger().info(TAG, `API ${this.$requestURL} (${this.getStatus()}) responded in ${new Date().getTime() - this.$created.getTime()}ms`);
    }

    public pipe(stream: NodeJS.ReadableStream): void {
        stream.on('end', () => {
            stream.unpipe(this.$response);
        });
        
        stream.pipe(this.$response);
    }

    public success(data?: TResponse): void {
        if (data === undefined) {
            this.setStatus(StatusCode.OK_NO_CONTENT);
        }
        else {
            this.setStatus(StatusCode.OK);
        }

        this.send(data);
    }

    public setHeader(key: string, value: string): void {
        this.$response.set(key, value);
    }

    public setHeaders(keyValuePair: IHeaderKeyValuePair): void {
        this.$response.set(keyValuePair);
    }

    public isHeadersSent(): boolean {
        return this.$response.headersSent;
    }

    public error(error?: TErrorResponse | ResponseData<TErrorResponse>): void {
        if (error) {
            if (error instanceof StormError) {
                this.send(error);
            }
            else if (error instanceof ResponseData) {
                let headers: Map<string, string> = error.getHeaders();
                for (let header of headers) {
                    this.setHeader(header[0], header[1]);
                }
                // If it was not ResponseData<TResponse> then
                // the method signature should have caught it
                this.send((<TErrorResponse><unknown>error));
            }
            else {
                this.send(new InternalError(error));
            }
        }
        else {
            this.send(new InternalError(error));
        }
    }
}
