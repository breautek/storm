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
import {StormError, ErrorResponse} from './StormError';
import * as express from 'express';
import {getApplicationLogger} from './instance';

export type SendableData = ResponseData | StormError | ErrorResponse | any;

export interface HeaderKeyValuePair {
    [key: string]: string;
}

export class Response {
    private response: express.Response;
    private created: Date;
    private requestURL: string;

    public constructor(response: express.Response, requestURL: string) {
        this.response = response;
        this.created = new Date();
        this.requestURL = requestURL;
    }

    public setStatus(status: StatusCode): Response {
        this.response.status(status);
        return this;
    }

    public getStatus(): StatusCode {
        return this.response.statusCode;
    }

    public send(data?: SendableData): void {
        if (data instanceof ResponseData) {
            this.setStatus(data.getStatus()).send(data.getData());
        }
        else if (data instanceof StormError) {
            this.setStatus(data.getHTTPCode()).send(data.getErrorResponse());
        }
        else {
            this.response.send(data);       
        }
        
        getApplicationLogger().info(`API ${this.requestURL} (${this.getStatus()}) responded in ${new Date().getTime() - this.created.getTime()}ms`);
    }

    public pipe(stream: NodeJS.ReadableStream): void {
        stream.on('end', () => {
            stream.unpipe(this.response);
        });
        
        stream.pipe(this.response);
    }

    public success(data?: any): void {
        if (data === undefined) {
            this.setStatus(StatusCode.OK_NO_CONTENT);
        }
        else {
            this.setStatus(StatusCode.OK);
        }

        this.send(data);
    }

    public setHeader(key: string, value: string): void {
        this.response.set(key, value);
    }

    public setHeaders(keyValuePair: HeaderKeyValuePair): void {
        this.response.set(keyValuePair)
    }

    public isHeadersSent(): boolean {
        return this.response.headersSent;
    }

    public error(data?: any): void {
        this.setStatus(StatusCode.ERR_BAD_REQUEST).send(data);
    }

    public unauthorized(data?: any): void {
        this.setStatus(StatusCode.ERR_UNAUTHORIZED).send(data);
    }

    public forbidden(data?: any): void {
        this.setStatus(StatusCode.ERR_FORBIDDEN).send(data);
    }

    public conflict(data?: any): void {
        this.setStatus(StatusCode.ERR_CONFLICT).send(data);
    }

    public notFound(data?: any): void {
        this.setStatus(StatusCode.ERR_NOT_FOUND).send(data);
    }

    public internalError(data?: any): void {
        this.setStatus(StatusCode.INTERNAL_ERROR).send(data);
    }
}
