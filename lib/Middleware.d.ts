import { Request } from './Request';
import { Response } from './Response';
export declare abstract class Middleware {
    constructor();
    abstract execute(request: Request, response: Response, options?: any): Promise<void>;
}
