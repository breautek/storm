import {Request} from './Request';
import {Response} from './Response';


export abstract class Middleware {
    public constructor() {}

    public abstract execute(request: Request, response: Response, options?: any): Promise<void>;
}