
import {Query} from '../Query';

export class StartTransactionQuery extends Query<void, void> {
    protected _getQuery(): string {
        return 'START TRANSACTION';
    }
}
