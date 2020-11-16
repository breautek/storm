
import {Query} from '../Query';

export class RollbackQuery extends Query<void, void> {
    protected _getQuery(): string {
        return 'ROLLBACK';
    }
}
