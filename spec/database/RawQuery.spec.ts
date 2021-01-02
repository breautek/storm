
import {RawQuery} from '../../src/RawQuery';

describe('RawQuery', () => {
    it('RawQuery', async () => {
        let query: RawQuery<any, any> = new RawQuery('SELECT 1');
        expect(query.getQuery()).toBe('SELECT 1');
    });
});
