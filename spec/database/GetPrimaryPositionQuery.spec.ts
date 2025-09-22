
import {GetPrimaryPositionQuery} from '../../src/private/GetPrimaryPositionQuery';

describe('GetPrimaryPositionQuery', () => {
    let query: GetPrimaryPositionQuery = null;

    beforeEach(() => {
        query = new GetPrimaryPositionQuery();
    });

    it('getQuery', () => {
        expect(query.getQuery(null)).toBe('SHOW BINARY LOG STATUS');
    });

    it('should produce result', async () => {
        await expect(query.onPostProcess(null, [{
            File: 'mysql-bin-changelog.047580',
            Position: '157'
        }])).resolves.toEqual({
            page: 47580,
            position: 157
        });
    });

    it('handles empty results', async () => {
        await expect(query.onPostProcess(null, [])).resolves.toEqual(null);
    });

    it('handles unparsable page', async () => {
        await expect(query.onPostProcess(null, [{
            File: 'mysql-bin-changelog.xyz',
            Position: '157'
        }])).resolves.toEqual(null);
    });

    it('handles unparsable position', async () => {
        await expect(query.onPostProcess(null, [{
            File: 'mysql-bin-changelog.047580',
            Position: 'xyz'
        }])).resolves.toEqual(null);
    });
});
