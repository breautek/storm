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
import {StatusCode} from './StatusCode';
import {Request} from './Request';
import {Response} from './Response';
import {ResponseData} from './ResponseData';
import {Token} from './Token';
import {Logger} from './Logger';
import {getInstance, getApplicationLogger} from './instance';
import {TokenManager} from './TokenManager';
import {StormError} from './StormError';
import {Config} from './Config';

/**
 * A base authentication strategy that handles 90% of the authentication process.
 * This will verify that the token hasn't been manipulated or tainted.
 * The authenticate API must be implemented by subclasses to further validate the token data 
 * for their specific use cases.
 */
export abstract class AuthenticationMiddleware {
    private logger: Logger;

    public constructor() {
        this.logger = getApplicationLogger();
    }

    /**
     * 
     * @param request 
     * @param response 
     * @param options Arbituary object containing any relevant information used for authentication.
     */
    public execute(request: Request, response: Response, options?: any): Promise<any> {
        var config: Config = getInstance().getConfig();
        var authHeader: string = config.authentication_header;
        // var backendAuthHeader: string = config.backend_authentication_header;
        
        // var backend: string = request.getHeader(backendAuthHeader);

        // if (backend) {
        //     if (backend === config.backend_authentication_secret) {
        //         return Promise.resolve(null);
        //     }
        // }

        var token: Token = new Token(request.getHeader(authHeader));

        return new Promise<any>((resolve, reject) => {
            var tokenManager: TokenManager = getInstance().getTokenManager();

            tokenManager.verify(token).then((data) => {
                return this.authenticate(data, options);
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                this.logger.error(error);
                var responseData: ResponseData = null;

                if (error instanceof StormError) {
                    responseData = new ResponseData(error.getHTTPCode(), error.getErrorResponse());
                }
                else {
                    responseData = new ResponseData(StatusCode.ERR_UNAUTHORIZED, {
                        code : error.name,
                        reason : error.message
                    });
                }

                reject(responseData);
            });
        });
    }

    /**
     * Subclasses are expected to implement this API to further validate the token data, as required by their application or API.
     * @param tokenData 
     * @param options 
     */
    protected abstract authenticate(tokenData: any, options?: any): Promise<any>;
}