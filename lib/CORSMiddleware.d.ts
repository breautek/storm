import { Middleware } from './Middleware';
import { Request } from './Request';
import { Response } from './Response';
import { RequestResponse } from './RequestResponse';
export declare class CORSMiddleware extends Middleware {
    private _allowedOrigin;
    private _allowedHeaders;
    private _allowedMethods;
    constructor(allowedOrigin?: string, allowedHeaders?: Array<string>, allowedMethods?: Array<string>);
    getDefaultAllowedOrigin(): string;
    getDefaultAllowedHeaders(): Array<string>;
    getDefaultAllowedMethods(): Array<string>;
    execute(request: Request, response: Response): Promise<RequestResponse>;
}
