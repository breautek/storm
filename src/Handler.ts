/*
   Copyright 2017-2025 Norman Breau

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

import {Application} from './Application';
import {Request} from './Request';
import {Response, TSupportedResponseTypes} from './Response';
import {Middleware} from './Middleware';
import {StormError} from './StormError';
import {IConfig} from './IConfig';
import { InternalError } from './InternalError';
import { IRequestResponse } from './IRequestResponse';
import { BaseLogger } from '@arashi/logger';
import { ResponseData } from './ResponseData';
import { NotImplementedError } from './NotImplementedError';
import { HTTPMethod } from './HTTPMethod';

const TAG: string = 'Handler';

export class Handler<
        TApplication extends Application = Application,
        TGetRequest                             = void,
        TGetResponse    extends TSupportedResponseTypes    = TSupportedResponseTypes,
        TPostRequest                            = void,
        TPostResponse   extends TSupportedResponseTypes    = TSupportedResponseTypes,
        TPutRequest                             = void,
        TPutResponse    extends TSupportedResponseTypes    = TSupportedResponseTypes,
        TDeleteRequest                          = void,
        TDeleteResponse extends TSupportedResponseTypes    = TSupportedResponseTypes
    >  {
        
    private $app: TApplication;

    /**
     * @deprecated
     */
    private $middlewares: Middleware[];

    constructor(app: TApplication) {
        this.$app = app;
        this.$middlewares = this._initMiddlewares();
    }

    public getApplication(): TApplication {
        return this.$app;
    }

    /**
     * @deprecated
     */
    protected _initMiddlewares(): Middleware[] {
        return [];
    }

    public getAccessToken(request: Request<unknown>): string {
        let config: IConfig = this.$app.getConfig();
        let authHeader: string = config.authentication_header;
        return request.getHeader(authHeader);
    }

    /**
     * @deprecated
     * @param request 
     * @param response 
     * @returns 
     */
    private async $executeMiddlewares(request: Request, response: Response<any>): Promise<IRequestResponse> {
        let result: IRequestResponse = {
            request,
            response
        };

        let logger: BaseLogger = this.$app.getLogger();

        try {
            for (let i: number = 0; i < this.$middlewares.length; i++) {
                let middleware: Middleware = this.$middlewares[i];
                logger.info(TAG, `executing middleware ${i}`);
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

    /**
     * @deprecated
     * @param request 
     * @param response 
     * @param error 
     */
    protected _onMiddlewareReject(request: Request, response: Response<any>, error: StormError): void {}

    private $handleResponse<TResponse extends TGetResponse | TPostResponse | TPutResponse | TDeleteResponse>(response: Response<TResponse>, data: TResponse | ResponseData<TResponse>): void {
        response.send(data);
    }

    private $handleResponseError(response: Response<StormError>, error: StormError | unknown): void {
        response.error(error);
    }

    public async get(request: Request<TGetRequest>, response: Response<TGetResponse>): Promise<void> {
        this.getApplication().getLogger().info(TAG, `${request.getForwardedIP()} (${request.getIP()}) - ${request.getMethod()} ${request.getURL()} - UA(${request.getHeader('user-agent')})`);

        try {
            let result: IRequestResponse<TGetRequest, TGetResponse> = await this.$executeMiddlewares(request, response);
            let req: TGetResponse | ResponseData<TGetResponse> = await this._get(result.request);
            this.$handleResponse(response, req);
        }
        catch (ex) {
            this.$handleResponseError(response as Response<StormError>, ex);
        }
    }

    public async put(request: Request<TPutRequest>, response: Response<TPutResponse>): Promise<void> {
        this.getApplication().getLogger().info(TAG, `${request.getForwardedIP()} (${request.getIP()}) - ${request.getMethod()} ${request.getURL()} - UA(${request.getHeader('user-agent')})`);

        try {
            let result: IRequestResponse<TPutRequest, TPutResponse> = await this.$executeMiddlewares(request, response);
            let req: TPutResponse | ResponseData<TPutResponse> = await this._put(result.request);
            this.$handleResponse(response, req);
        }
        catch (ex) {
            this.$handleResponseError(response as Response<StormError>, ex);
        }
    }

    public async post(request: Request<TPostRequest>, response: Response<TPostResponse>): Promise<void> {
        this.getApplication().getLogger().info(TAG, `${request.getForwardedIP()} (${request.getIP()}) - ${request.getMethod()} ${request.getURL()} - UA(${request.getHeader('user-agent')})`);

        try {
            let result: IRequestResponse<TPostRequest, TPostResponse> = await this.$executeMiddlewares(request, response);
            let req: any = await this._post(result.request);
            this.$handleResponse(response, req);
        }
        catch (ex) {
            this.$handleResponseError(response as Response<StormError>, ex);
        }
    }

    public async delete(request: Request<TDeleteRequest>, response: Response<TDeleteResponse>): Promise<void> {
        this.getApplication().getLogger().info(TAG, `${request.getForwardedIP()} (${request.getIP()}) - ${request.getMethod()} ${request.getURL()} - UA(${request.getHeader('user-agent')})`);

        try {
            let result: IRequestResponse<TDeleteRequest, TDeleteResponse> = await this.$executeMiddlewares(request, response);
            let req: ResponseData<TDeleteResponse> | TDeleteResponse = await this._delete(result.request);
            this.$handleResponse(response, req);
        }
        catch (ex) {
            this.$handleResponseError(response as Response<StormError>, ex);
        }
    }

    protected async _get(request: Request<TGetRequest>): Promise<TGetResponse | ResponseData<TGetResponse>> {
        throw new NotImplementedError(HTTPMethod.GET);
    }

    protected async _post(request: Request<TPostRequest>): Promise<TPostResponse | ResponseData<TPostResponse>> {
        throw new NotImplementedError(HTTPMethod.POST);
    }

    protected async _put(request: Request<TPutRequest>): Promise<TPutResponse | ResponseData<TPutResponse>> {
        throw new NotImplementedError(HTTPMethod.PUT);
    }

    protected async _delete(request: Request<TDeleteRequest>): Promise<TDeleteResponse | ResponseData<TDeleteResponse>> {
        throw new NotImplementedError(HTTPMethod.DELETE);
    }
}
