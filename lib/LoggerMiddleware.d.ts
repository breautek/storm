import { Middleware } from './Middleware';
import { Request } from './Request';
import { Response } from './Response';
import { RequestResponse } from './RequestResponse';
export declare class LoggerMiddleware extends Middleware {
    constructor();
    execute(request: Request, response: Response, options?: any): Promise<RequestResponse>;
}
