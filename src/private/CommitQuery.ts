
import {Query} from '../Query';

export class CommitQuery extends Query {
    public getQuery(): string {
        return 'COMMIT';
    }
}
