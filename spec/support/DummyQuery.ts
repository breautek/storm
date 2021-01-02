
import { Query } from '../../src/Query';

export class DummyQuery extends Query<any, any, any> {
    protected _getQuery(): string {
        return 'SELECT 1';
    }
}
