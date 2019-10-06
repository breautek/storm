import { Middleware } from './Middleware';
import { Request } from './Request';
import { Response } from './Response';
import { IRequestResponse } from './IRequestResponse';
export declare class CORSMiddleware extends Middleware {
    private _allowedOrigin;
    private _allowedHeaders;
    private _allowedMethods;
    constructor(allowedOrigin?: string, allowedHeaders?: Array<string>, allowedMethods?: Array<string>);
    getDefaultAllowedOrigin(): string;
    getDefaultAllowedHeaders(): Array<string>;
    getDefaultAllowedMethods(): Array<string>;
    protected _execute(request: Request, response: Response): Promise<IRequestResponse>;
}
