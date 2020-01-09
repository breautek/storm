import { Request } from './Request';
import { Response } from './Response';
export interface IRequestResponse<TRequest = any, TResponse = any> {
    request: Request<TRequest>;
    response: Response<TResponse>;
}
