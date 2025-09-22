
import {GetSlavePositionQuery} from '../../src/private/GetSlavePositionQuery';

describe('GetSlavePositionQuery', () => {
    let query: GetSlavePositionQuery = null;

    beforeEach(() => {
        query = new GetSlavePositionQuery();
    });

    it('getQuery', () => {
        expect(query.getQuery(null)).toBe('SHOW REPLICA STATUS');
    });

    it('should produce result', async () => {
        await expect(query.onPostProcess(null, [{
            Relay_Source_Log_File: 'mysql-bin-changelog.047580',
            Exec_Source_Log_Pos: '157'
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
            Relay_Source_Log_File: 'mysql-bin-changelog.xyz',
            Exec_Source_Log_Pos: '157'
        }])).resolves.toEqual(null);
    });

    it('handles unparsable position', async () => {
        await expect(query.onPostProcess(null, [{
            Relay_Source_Log_File: 'mysql-bin-changelog.047580',
            Exec_Source_Log_Pos: 'xyz'
        }])).resolves.toEqual(null);
    });
});
