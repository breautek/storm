
import { IAuthTokenData } from '@arashi/token';
import { Application } from '../Application';
import {Handler} from '../Handler';
import { Request } from '../Request';
import { MetricStore } from '../MetricStore';
import { ForbiddenError } from '../ForbiddenError';

export interface IHealthHandlerMySQLStats {
    activeConnections: number;
}

export interface IHealthHandlerOutput {
    mysql: IHealthHandlerMySQLStats;
}

export class HealthHandler extends Handler<
    Application,
    void,
    IHealthHandlerOutput
> {
    protected override async _get(request: Request<void, IAuthTokenData>): Promise<IHealthHandlerOutput> {

        if (request.getIP() !== '127.0.0.1') {
            throw new ForbiddenError();
        }

        let metrics: MetricStore = MetricStore.getInstance();
        let out: IHealthHandlerOutput = {
            mysql: {
                activeConnections: metrics.get('mysql.active_connections') as number
            }
        };

        return out;
    }
}
