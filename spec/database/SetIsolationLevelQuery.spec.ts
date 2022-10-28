
import {SetIsolationLevelQuery} from '../../src/private/SetIsolationLevelQuery';
import {IsolationLevel} from '../../src/IsolationLevel';

describe('SetIsolationLevelQuery', () => {
    let q: SetIsolationLevelQuery;

    it('should be REPEATABLE READ', () => {
        q = new SetIsolationLevelQuery(IsolationLevel.REPEATABLE_READ);
        expect(q.getQuery(null)).toBe('SET TRANSACTION ISOLATION LEVEL REPEATABLE READ');
    });

    it('should be READ COMMITTED', () => {
        q = new SetIsolationLevelQuery(IsolationLevel.READ_COMMITTED);
        expect(q.getQuery(null)).toBe('SET TRANSACTION ISOLATION LEVEL READ COMMITTED');
    });

    it('should be READ UNCOMMITTED', () => {
        q = new SetIsolationLevelQuery(IsolationLevel.READ_UNCOMMITTED);
        expect(q.getQuery(null)).toBe('SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED');
    });

    it('should be SERIALIZABLE', () => {
        q = new SetIsolationLevelQuery(IsolationLevel.SERIALIZABLE);
        expect(q.getQuery(null)).toBe('SET TRANSACTION ISOLATION LEVEL SERIALIZABLE');
    });
});
