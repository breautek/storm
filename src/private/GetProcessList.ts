
import { IDatabaseConnection } from '../IDatabaseConnection';
import {Query} from '../Query';

export interface IGetProcessListOutput {
    Id: number;
    User: string;
    Host: string;
    db: string;
    Command: string;
    Time: number;
    State: string;
    Info: string;
}

export class GetProcessList extends Query<void, IGetProcessListOutput[]> {
    protected override _getQuery(connection: IDatabaseConnection): string {
        return 'SHOW PROCESSLIST';
    }
}
