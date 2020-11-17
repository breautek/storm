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
import {Application} from './Application';
import {getInstance} from './instance';
import {Request} from './Request';
import {Response} from './Response';
import {Middleware} from './Middleware';
import {StormError} from './StormError';
import {IConfig} from './IConfig';
import { InternalError } from './InternalError';
import { IRequestResponse } from './IRequestResponse';

export class Handler<
        TApplication extends Application = Application,
        TGetRequest     = any,
        TGetResponse    = any,
        TPostRequest    = any,
        TPostResponse   = any,
        TPutRequest     = any,
        TPutResponse    = any,
        TDeleteRequest  = any,
        TDeleteResponse = any
    >  {
        
    private _app: TApplication;
    private _middlewares: Array<Middleware>;

    constructor(app: TApplication) {
        this._app = app;
        this._middlewares = this._initMiddlewares();
    }

    public getApplication(): TApplication {
        return this._app;
    }

    protected _initMiddlewares(): Array<Middleware> {
        return [];
    }

    public getAccessToken(request: Request): string {
        let config: IConfig = getInstance().getConfig();
        let authHeader: string = config.authentication_header;
        return request.getHeader(authHeader);
    }

    private async _executeMiddlewares(request: Request, response: Response): Promise<IRequestResponse> {
        let result: IRequestResponse = {
            request,
            response
        };

        try {
            for (let i: number = 0; i < this._middlewares.length; i++) {
                let middleware: Middleware = this._middlewares[i];
                console.log(`executing middleware ${i}`);
                result = await middleware.execute(result.request, result.response);
            }
        }
        catch (ex) {
            getInstance().getLogger().error(ex);
            let error: StormError = null;
            if (!(ex instanceof StormError)) {
                error = new InternalError(ex);
            }
            else {
                error = ex;
            }
            this._onMiddlewareReject(request, response, error);
            return Promise.reject(error);
        }

        if (!result) {
            result = {
                request: null,
                response: null
            };
        }

        if (!result.request) {
            result.request = request;
        }

        if (!result.response) {
            result.response = response;
        }

        return Promise.resolve(result);
    }

    protected _onMiddlewareReject(request: Request, response: Response, error: StormError): void {
        response.error(error);
    }

    public get(request: Request<TGetRequest>, response: Response<TGetResponse>): Promise<void> {
        return new Promise((resolve, reject) => {
            this._executeMiddlewares(request, response).then((result: IRequestResponse<TGetRequest, TGetResponse>) => {
                this._get(result.request, result.response);
                resolve();
            }).catch((error: StormError) => {
                this._onMiddlewareReject(request, response, error);
                reject(error);
            });
        });
    }

    public put(request: Request<TPutRequest>, response: Response<TPutResponse>): Promise<void> {
        return new Promise((resolve, reject) => {
            this._executeMiddlewares(request, response).then((result: IRequestResponse<TPutRequest, TPutResponse>) => {
                this._put(result.request, result.response);
                resolve();
            }).catch((error: StormError) => {
                this._onMiddlewareReject(request, response, error);
                reject(error);
            });
        });
    }

    public post(request: Request<TPostRequest>, response: Response<TPostResponse>): Promise<void> {
        return new Promise((resolve, reject) => {
            this._executeMiddlewares(request, response).then((result: IRequestResponse<TPostRequest, TPostResponse>) => {
                this._post(result.request, result.response);
                resolve();
            }).catch((error: StormError) => {
                this._onMiddlewareReject(request, response, error);
                reject(error);
            });
        });
    }

    public delete(request: Request<TDeleteRequest>, response: Response<TDeleteResponse>): Promise<void> {
        return new Promise((resolve, reject) => {
            this._executeMiddlewares(request, response).then((result: IRequestResponse<TDeleteRequest, TDeleteResponse>) => {
                this._delete(result.request, result.response);
                resolve();
            }).catch((error: StormError) => {
                this._onMiddlewareReject(request, response, error);
                reject(error);
            });
        });
    }

    protected _get(request: Request<TGetRequest>, response: Response<TGetResponse>): Promise<void> {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
        return Promise.resolve();
    }

    protected _post(request: Request<TPostRequest>, response: Response<TPostResponse>): Promise<void> {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
        return Promise.resolve();
    }

    protected _put(request: Request<TPutRequest>, response: Response<TPutResponse>): Promise<void> {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
        return Promise.resolve();
    }

    protected _delete(request: Request<TDeleteRequest>, response: Response<TDeleteResponse>): Promise<void> {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
        return Promise.resolve();
    }
}
