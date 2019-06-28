import { Request } from './Request';
import { Response } from './Response';
export declare class BackendAuthenticationMiddleware {
    private logger;
    constructor();
    execute(request: Request, response: Response, options?: any): Promise<any>;
}
