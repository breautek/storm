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
import {Application} from './Application';
import {getInstance} from './instance';
import {Request} from './Request';
import {Response} from './Response';
import {Middleware} from './Middleware';
import {StormError} from './StormError';
import {IConfig} from './IConfig';
import { InternalError } from './InternalError';
import { IRequestResponse } from './IRequestResponse';
import { Logger } from '@arashi/logger';

const TAG: string = 'Handler';

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

        let logger: Logger = getInstance().getLogger();

        try {
            for (let i: number = 0; i < this._middlewares.length; i++) {
                let middleware: Middleware = this._middlewares[i];
                logger.trace(TAG, `executing middleware ${i}`);
                result = await middleware.execute(result.request, result.response);
            }
        }
        catch (ex) {
            logger.error(TAG, ex);
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
            this.getApplication().getLogger().info(TAG, `${request.getForwardedIP()} (${request.getIP()}) - ${request.getMethod()} ${request.getURL()} - UA(${request.getHeader('user-agent')})`);
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
