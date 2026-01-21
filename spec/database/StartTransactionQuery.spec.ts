
import {StartTransactionQuery} from '../../src/private/StartTransactionQuery';
import { TransactionAccessLevel } from '../../src/TransactionAccessLevel';

describe('StartTransactionQuery', () => {
    let query: StartTransactionQuery = null;

    it('should default to RW', () => {
        query = new StartTransactionQuery();
        expect(query.getQuery(null)).toBe('START TRANSACTION READ WRITE');
    });

    it('should be RW', () => {
        query = new StartTransactionQuery({
            accessLevel: TransactionAccessLevel.RW
        });
        expect(query.getQuery(null)).toBe('START TRANSACTION READ WRITE');
    });

    it('should be RO', () => {
        query = new StartTransactionQuery({
            accessLevel: TransactionAccessLevel.RO
        });
        expect(query.getQuery(null)).toBe('START TRANSACTION READ ONLY');
    });
});
