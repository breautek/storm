
import {Query} from '../Query';

export class CommitQuery extends Query<void, void> {
    protected _getQuery(): string {
        return 'COMMIT';
    }
}
