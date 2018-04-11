import { Request } from './Request';
import { Response } from './Response';
import { RequestResponse } from './RequestResponse';
export declare abstract class Middleware {
    constructor();
    abstract execute(request: Request, response: Response): Promise<RequestResponse>;
}
