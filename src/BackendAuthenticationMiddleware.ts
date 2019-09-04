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
import {Request} from './Request';
import {Response} from './Response';
import {ResponseData} from './ResponseData';
import {Logger} from './Logger';
import {getInstance, getApplicationLogger} from './instance';
import {IConfig} from './IConfig';

/**
 * A base authentication strategy that handles 90% of the authentication process.
 * This will verify that the token hasn't been manipulated or tainted.
 * The authenticate API must be implemented by subclasses to further validate the token data 
 * for their specific use cases.
 */
export class BackendAuthenticationMiddleware {
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
        var config: IConfig = getInstance().getConfig();

        var backendAuthHeader: string = config.backend_authentication_header;
        
        var backend: string = request.getHeader(backendAuthHeader);

        if (backend) {
            if (config.backend_authentication_secret === null) {
                this.logger.warn('Backend secret not implemented.');
                return Promise.reject(new ResponseData(StatusCode.INTERNAL_ERROR));
            }

            if (backend === config.backend_authentication_secret) {
                return Promise.resolve(null);
            }
            else {
                return Promise.reject(new ResponseData(StatusCode.ERR_UNAUTHORIZED, {
                    code: 0,
                    reason: 'Missing secret'
                }));
            }
        }
        else {
            return Promise.reject(new ResponseData(StatusCode.ERR_UNAUTHORIZED, {
                code: 0,
                reason: 'Missing secret'
            }));
        }
    }
}
