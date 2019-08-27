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

import * as express from 'express';
import { IncomingHttpHeaders } from 'http';
import {Writable} from 'stream';
import * as formidable from 'formidable';
import {IFormData} from './IFormData';

export interface IParameterMap {
    [key: string]: string;
}

export class Request {
    private request: express.Request;

    public constructor(request: express.Request) {
        this.request = request;
    }

    public getBody(): any {
        return this.request.body;
    }

    public getForm(): Promise<IFormData> {
        return new Promise<IFormData>((resolve, reject) => {
            let r: express.Request = this.getRequestSource();
            let form: formidable.IncomingForm = new formidable.IncomingForm();
            form.hash = 'md5';

            form.parse(r, (error: any, fields: formidable.Fields, files: formidable.Files): any => {
                if (error) {
                    return reject(error);
                }

                return resolve({
                    fields,
                    files: files
                });
            });
        });
    }

    public getHeaders(): IncomingHttpHeaders {
        return this.request.headers;
    }

    public getHeader(name: string): string {
        let value: string | Array<string> = this.request.headers[name.toLowerCase()];
        if (typeof value === 'string') {
            return value;
        }
        else {
            return value && value[0] ? value[0] : null;
        }
    }

    public getQueryVariables(): any {
        return this.request.query;
    }

    public getParams(): IParameterMap {
        return this.request.params;
    }

    public getParam(name: string): string {
        return this.request.params[name];
    }

    public getIP(): string {
        return this.request.ip;
    }

    public getForwardedIP(): string {
        return this.getHeader('X-Forwarded-FOR');
    }

    public getHostname(): string {
        return this.request.hostname;
    }

    public getMethod(): string {
        return this.request.method;
    }

    public getURL(): string {
        return this.request.originalUrl;
    }

    public isSecure(): boolean {
        return this.request.secure;
    }

    public pipe(destination: Writable): any {
        return this.request.pipe(destination);
    }

    public unpipe(source: Writable): void {
        this.request.unpipe(source);
    }

    public getRequestSource(): express.Request {
        return this.request;
    }
}
