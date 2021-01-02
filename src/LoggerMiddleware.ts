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
import {getApplicationLogger} from './instance';
import {IRequestResponse} from './IRequestResponse';

export class LoggerMiddleware extends Middleware {
    public constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    protected _execute(request: Request, response: Response, options?: any): Promise<IRequestResponse> {
        return new Promise<IRequestResponse>((resolve, reject) => {
            // tslint:disable-next-line max-line-length
            getApplicationLogger().info(`${request.getForwardedIP()} (${request.getIP()}) - ${request.getMethod()} ${request.getURL()} - UA(${request.getHeader('user-agent')})`);
            resolve({
                request: request,
                response: response
            });
        });
    }
}
