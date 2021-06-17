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

import {Middleware} from './Middleware';
import {Request} from './Request';
import {Response} from './Response';
import {IRequestResponse} from './IRequestResponse';
import {getInstance} from './instance';

/**
 * CORSMiddleware is used to enable CORS on APIs. 
 * It will automatically add the necessary headers necessary to
 * communicate with CORS enabled clients.
 */
export class CORSMiddleware extends Middleware {
    private $allowedOrigin: string;
    private $allowedHeaders: Array<string>;
    private $allowedMethods: Array<string>;

    /**
     * @constructor
     * @param allowedOrigin     The allowed origin. By default it will use the request origin.
     * @param allowedHeaders    Array of allowed headers. 
     * @param allowedMethods    Array of allowed HTTP methods.
     */
    public constructor(allowedOrigin?: string, allowedHeaders?: Array<string>, allowedMethods?: Array<string>) {
        super();
        
        this.$allowedOrigin = (!allowedOrigin) ? this.getDefaultAllowedOrigin() : allowedOrigin;
        this.$allowedHeaders = (!allowedHeaders) ? this.getDefaultAllowedHeaders() : allowedHeaders;
        this.$allowedMethods = (!allowedMethods) ? this.getDefaultAllowedMethods() : allowedMethods;
    }

    /**
     * Sets the allowed origin. By default, 
     */
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

    protected _execute(request: Request, response: Response): Promise<IRequestResponse> {
        if (this.$allowedOrigin) {
            response.setHeader('Access-Control-Allow-Origin', this.$allowedOrigin);
        }
        else {
            response.setHeader('Access-Control-Allow-Origin', request.getHeader('Origin'));
        }
        response.setHeader('Access-Control-Allow-Headers', this.$allowedHeaders.join(', '));
        response.setHeader('Access-Control-Allow-Methods', this.$allowedMethods.join(', '));
        response.setHeader('Vary', 'Origin');
        return Promise.resolve({
            request: request,
            response: response
        });
    }
}
