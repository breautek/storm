
import {Query} from '../Query';

export class StartTransactionQuery extends Query {
    public getQuery(): string {
        return 'START TRANSACTION';
    }
}
