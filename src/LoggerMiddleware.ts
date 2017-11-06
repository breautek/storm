
import {Middleware} from './Middleware';
import {Request} from './Request';
import {Response} from './Response';
import {getInstance} from './instance';

export class LoggerMiddleware extends Middleware {
    public constructor() {
        super();
    }

    public execute(request: Request, response: Response, options?: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            getInstance().getLogger().info(`${request.getIP()} - ${request.getMethod()} ${request.getURL()}`);
            resolve();
        });
    }
}
