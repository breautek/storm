import { Middleware } from './Middleware';
import { Request } from './Request';
import { Response } from './Response';
export declare abstract class AuthenticationMiddleware extends Middleware {
    private logger;
    constructor();
    execute(request: Request, response: Response, options?: any): Promise<any>;
    protected abstract authenticate(tokenData: any, options?: any): Promise<any>;
}
