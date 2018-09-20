import { Request } from './Request';
import { Response } from './Response';
export declare abstract class AuthenticationMiddleware {
    private logger;
    constructor();
    execute(request: Request, response: Response, options?: any): Promise<any>;
    protected abstract authenticate(tokenData: any, options: any, isBackendCall: boolean): Promise<any>;
}
