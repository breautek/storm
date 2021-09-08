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
import {Request} from './Request';
import {ResponseData} from './ResponseData';
import {Logger} from '@arashi/logger';
import {getInstance} from './instance';
import {IConfig} from './IConfig';

const TAG: string = 'BackendAuthenticationMiddleware';

/**
 * A base authentication strategy that handles 90% of the authentication process.
 * This will verify that the token hasn't been manipulated or tainted.
 * The authenticate API must be implemented by subclasses to further validate the token data 
 * for their specific use cases.
 */
export class BackendAuthenticationMiddleware {
    private $logger: Logger;

    public constructor() {
        this.$logger = getInstance().getLogger();
    }

    /**
     * 
     * @param request 
     * @param response 
     * @param options Arbituary object containing any relevant information used for authentication.
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public execute(request: Request, options?: any): Promise<any> {
        let config: IConfig = getInstance().getConfig();

        let backendAuthHeader: string = config.backend_authentication_header;
        
        let backend: string = request.getHeader(backendAuthHeader);

        if (backend) {
            if (config.backend_authentication_secret === null) {
                this.$logger.warn(TAG, 'Backend secret not implemented.');
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
