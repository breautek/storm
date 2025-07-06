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
import {Response, SendableData} from './Response';
import {Middleware} from './Middleware';
import {StormError} from './StormError';
import {IConfig} from './IConfig';
import { InternalError } from './InternalError';
import { IRequestResponse } from './IRequestResponse';
import { BaseLogger } from '@arashi/logger';
import { ResponseData } from './ResponseData';
import { ReadStream } from 'fs';
import { NotImplementedError } from './NotImplementedError';
import { HTTPMethod } from './HTTPMethod';

const TAG: string = 'Handler';

/**
 * @deprecated No longer used. Will be removed in the next major
 * 
 * IHandlerResponse can actually accept any arbitrary object, however it may do
 * certain things depending on the type of object it receives.
 * 
 * - If the response object is a stream, it will pipe the stream to stream the HTTP response.
 * - If the response is ResponseData, the status code and response data will be passed as the HTTP response.
 * - Passing nothing/undefined will return a status code of 204 with no body content
 * - Primitive data types will be passed as is
 * - Buffers will be passed through
 * - Any other object will be passed through JSON.stringify
 */
export type IHandlerResponse = ResponseData | ReadableStream | ReadStream | any | void;

/**
 * @deprecated No longer used, will be removed in the next major
 * 
 * Like IHandlerResponse, an IHandlerError can be any arbitrary type of object,
 * however it's recommended that the type be of a StormError.
 * 
 * If the type is not a StormError, the error will be wrapped in an InternalError object.
 * This is to avoid accidental leakage of privilege data (e.g. snippets of database queries with sensitive information)
 */
export type IHandlerError = StormError | Error | any;

export class Handler<
        TApplication extends Application = Application,
        TGetRequest     extends SendableData    = void,
        TGetResponse    extends SendableData    = void,
        TPostRequest    extends SendableData    = void,
        TPostResponse   extends SendableData    = void,
        TPutRequest     extends SendableData    = void,
        TPutResponse    extends SendableData    = void,
        TDeleteRequest  extends SendableData    = void,
        TDeleteResponse extends SendableData    = void,
    >  {
        
    private $app: TApplication;
    private $middlewares: Middleware[];

    constructor(app: TApplication) {
        this.$app = app;
        this.$middlewares = this._initMiddlewares();
    }

    public getApplication(): TApplication {
        return this.$app;
    }

    protected _initMiddlewares(): Middleware[] {
        return [];
    }

    public getAccessToken(request: Request): string {
        let config: IConfig = this.$app.getConfig();
        let authHeader: string = config.authentication_header;
        return request.getHeader(authHeader);
    }

    private async $executeMiddlewares(request: Request, response: Response): Promise<IRequestResponse> {
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

    protected _onMiddlewareReject(request: Request, response: Response, error: StormError): void {}

    private $handleResponse<TResponse extends SendableData>(response: Response<TResponse>, data: TResponse | ResponseData<TResponse>): void {
        response.send(data);
    }

    private $handleResponseError<TResponse extends SendableData>(response: Response<TResponse>, error: any): void {
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
            this.$handleResponseError(response, ex);
        }
    }

    public async put(request: Request<TPutRequest>, response: Response<TPutResponse>): Promise<void> {
        this.getApplication().getLogger().info(TAG, `${request.getForwardedIP()} (${request.getIP()}) - ${request.getMethod()} ${request.getURL()} - UA(${request.getHeader('user-agent')})`);

        try {
            let result: IRequestResponse<TPutRequest, TPutResponse> = await this.$executeMiddlewares(request, response);
            let req: any = await this._put(result.request);
            this.$handleResponse(response, req);
        }
        catch (ex) {
            this.$handleResponseError(response, ex);
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
            this.$handleResponseError(response, ex);
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
            this.$handleResponseError(response, ex);
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
