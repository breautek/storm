import { Request } from './Request';
import { Response } from './Response';
import { IRequestResponse } from './IRequestResponse';
export declare abstract class Middleware {
    constructor();
    abstract execute(request: Request, response: Response): Promise<IRequestResponse>;
}
