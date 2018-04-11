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

import {Middleware} from './Middleware';
import {Request} from './Request';
import {Response} from './Response';
import {RequestResponse} from './RequestResponse';
import {getInstance} from './instance';

export class CORSMiddleware extends Middleware {
    private _allowedOrigin: string;
    private _allowedHeaders: Array<string>;
    private _allowedMethods: Array<string>;

    public constructor(allowedOrigin?: string, allowedHeaders?: Array<string>, allowedMethods?: Array<string>) {
        super();
        
        this._allowedOrigin = (!allowedOrigin) ? this.getDefaultAllowedOrigin() : allowedOrigin;
        this._allowedHeaders = (!allowedHeaders) ? this.getDefaultAllowedHeaders() : allowedHeaders;
        this._allowedMethods = (!allowedMethods) ? this.getDefaultAllowedMethods() : allowedMethods;
    }

    public getDefaultAllowedOrigin(): string {
        return null;
    }

    public getDefaultAllowedHeaders(): Array<string> {
        return [
            'Accept',
            getInstance().getConfig().authentication_header,
            'X-Requested-With',
            'Content-Type',
            'Access-Control-Allow-Origin'
        ];
    }

    public getDefaultAllowedMethods(): Array<string> {
        return [
            'GET',
            'POST',
            'HEAD',
            'OPTIONS',
            'DELETE',
            'PUT'
        ];
    }

    public execute(request: Request, response: Response): Promise<RequestResponse> {
        if (this._allowedOrigin) {
            response.setHeader('Access-Control-Allow-Origin', this._allowedOrigin);
        }
        else {
            response.setHeader('Access-Control-Allow-Origin', request.getHeader('Origin'));
        }
        response.setHeader('Access-Control-Allow-Headers', this._allowedHeaders.join(', '));
        response.setHeader('Access-Control-Allow-Methods', this._allowedMethods.join(', '));
        response.setHeader('Vary', 'Origin');
        return Promise.resolve({
            request:request,
            response:response 
        });
    }
}