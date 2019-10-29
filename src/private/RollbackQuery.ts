
import {Query} from '../Query';

export class RollbackQuery extends Query {
    public getQuery(): string {
        return 'ROLLBACK';
    }
}
