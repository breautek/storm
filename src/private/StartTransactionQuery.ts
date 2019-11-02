
import {Query} from '../Query';

export class StartTransactionQuery extends Query {
    protected _getQuery(): string {
        return 'START TRANSACTION';
    }
}
