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
import {getInstance} from './instance';
import {TokenManager} from './TokenManager';

export abstract class AuthenticationMiddleware extends Middleware {
    private logger: Logger;

    public constructor() {
        super();
        this.logger = getInstance().getLogger();
    }

    public execute(request: Request, response: Response, options: any): Promise<any> {
        var config: any = getInstance().getConfig();
        var authHeader: string = config.authentication_header;
        var token: Token = new Token(request.getHeader(authHeader));

        return new Promise<any>((resolve, reject) => {
            var tokenManager: TokenManager = getInstance().getTokenManager();

            tokenManager.verify(token).then((data) => {
                return this.authenticate(data, options);
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                this.logger.error(error);
                reject(new ResponseData(StatusCode.ERR_UNAUTHORIZED, {
                    code : error.name,
                    reason : error.message
                }));
            });
        });
    }

    protected abstract authenticate(tokenData: any, options: any): Promise<any>;
}