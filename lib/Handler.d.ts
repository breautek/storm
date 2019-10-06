import { Application } from './Application';
import { Request } from './Request';
import { Response } from './Response';
import { Database } from './Database';
import { Middleware } from './Middleware';
import { StormError } from './StormError';
export declare class Handler {
    private _app;
    private _middlewares;
    constructor(app: Application);
    protected _initMiddlewares(): Array<Middleware>;
    getAccessToken(request: Request): string;
    getDB(): Database;
    private _executeMiddlewares;
    protected _onMiddlewareReject(request: Request, response: Response, error: StormError): void;
    get(request: Request, response: Response): Promise<void>;
    put(request: Request, response: Response): Promise<void>;
    post(request: Request, response: Response): Promise<void>;
    delete(request: Request, response: Response): Promise<void>;
    protected _get(request: Request, response: Response): Promise<void>;
    protected _post(request: Request, response: Response): Promise<void>;
    protected _put(request: Request, response: Response): Promise<void>;
    protected _delete(request: Request, response: Response): Promise<void>;
}
