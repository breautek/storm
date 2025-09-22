
import {GetMySQLVersion} from '../../src/GetMySQLVersion';

describe('GetMySQLVersion', () => {
    let query: GetMySQLVersion = null;

    beforeEach(() => {
        query = new GetMySQLVersion();
    });

    it('getQuery', () => {
        expect(query.getQuery(null)).toBe('SELECT VERSION() AS version');
    });

    it('should produce result', async () => {
        await expect(query.onPostProcess(null, [{version: '8.4.0'}])).resolves.toEqual({
            major: 8,
            minor: 4,
            patch: 0,
            version: '8.4.0'
        });
    });

    it('should produce return null on non parseable', async () => {
        await expect(query.onPostProcess(null, [])).resolves.toBe(null);
    });
});
