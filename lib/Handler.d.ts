import { Application } from './Application';
import { Request } from './Request';
import { Response } from './Response';
import { Database } from './Database';
import { Middleware } from './Middleware';
import { StormError } from './StormError';
export declare class Handler<TGetRequest = any, TGetResponse = any, TPostRequest = any, TPostResponse = any, TPutRequest = any, TPutResponse = any, TDeleteRequest = any, TDeleteResponse = any> {
    private _app;
    private _middlewares;
    constructor(app: Application);
    protected _initMiddlewares(): Array<Middleware>;
    getAccessToken(request: Request): string;
    getDB(): Database;
    private _executeMiddlewares;
    protected _onMiddlewareReject(request: Request, response: Response, error: StormError): void;
    get(request: Request<TGetRequest>, response: Response<TGetResponse>): Promise<void>;
    put(request: Request<TPutRequest>, response: Response<TPutResponse>): Promise<void>;
    post(request: Request<TPostRequest>, response: Response<TPostResponse>): Promise<void>;
    delete(request: Request<TDeleteRequest>, response: Response<TDeleteResponse>): Promise<void>;
    protected _get(request: Request<TGetRequest>, response: Response<TGetResponse>): Promise<void>;
    protected _post(request: Request<TPostRequest>, response: Response<TPostResponse>): Promise<void>;
    protected _put(request: Request<TPutRequest>, response: Response<TPutResponse>): Promise<void>;
    protected _delete(request: Request<TDeleteRequest>, response: Response<TDeleteResponse>): Promise<void>;
}
