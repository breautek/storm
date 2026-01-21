
import {GetProcessList} from '../../src/private/GetProcessList';

describe('GetProcessList', () => {
    it('should produce proper process query', () => {
        expect(new GetProcessList().getQuery(null)).toBe('SHOW PROCESSLIST');
    });
});
