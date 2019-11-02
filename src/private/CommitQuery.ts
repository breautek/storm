
import {Query} from '../Query';

export class CommitQuery extends Query {
    protected _getQuery(): string {
        return 'COMMIT';
    }
}
