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

import {StatusCode} from './StatusCode';
import {ResponseData} from './ResponseData';
import {StormError, IErrorResponse} from './StormError';
import * as express from 'express';
import { InternalError } from './InternalError';
import { getInstance } from './instance';

export type SendableData = ResponseData | Error | IErrorResponse | any;

export interface IHeaderKeyValuePair {
    [key: string]: string;
}

export class Response<TResponse = SendableData, TErrorResponse = Error | IErrorResponse | string> {
    private _response: express.Response;
    private _created: Date;
    private _requestURL: string;

    public constructor(response: express.Response, requestURL: string) {
        this._response = response;
        this._created = new Date();
        this._requestURL = requestURL;
    }

    public setStatus(status: StatusCode): Response<TResponse, TErrorResponse> {
        this._response.status(status);
        return this;
    }

    public getStatus(): StatusCode {
        return this._response.statusCode;
    }

    public redirect(url: string): void {
        this._response.redirect(url);
    }

    public send(data?: TResponse | TErrorResponse | StormError | IErrorResponse): void {
        if (data instanceof ResponseData) {
            this.setStatus(data.getStatus()).send(data.getData());
        }
        else if (data instanceof StormError) {
            this.setStatus(data.getHTTPCode()).send(data.getErrorResponse());
        }
        else {
            this._response.send(data);
        }
        
        getInstance().getLogManager().getLogger('Response').info(`API ${this._requestURL} (${this.getStatus()}) responded in ${new Date().getTime() - this._created.getTime()}ms`);
    }

    public pipe(stream: NodeJS.ReadableStream): void {
        stream.on('end', () => {
            stream.unpipe(this._response);
        });
        
        stream.pipe(this._response);
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
        this._response.set(key, value);
    }

    public setHeaders(keyValuePair: IHeaderKeyValuePair): void {
        this._response.set(keyValuePair);
    }

    public isHeadersSent(): boolean {
        return this._response.headersSent;
    }

    public error(error?: TErrorResponse | ResponseData<TErrorResponse>): void {
        if (error) {
            if (error instanceof StormError) {
                this.send(error);
            }
            else if (error instanceof ResponseData) {
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
