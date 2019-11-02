
import {Query} from '../Query';

export class RollbackQuery extends Query {
    protected _getQuery(): string {
        return 'ROLLBACK';
    }
}
