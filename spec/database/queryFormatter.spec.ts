
import {queryFormatter} from '../../src/mysql/queryFormatter';

describe('queryFormatter', () => {
    it('simple query', () => {
        expect(queryFormatter('SELECT 1', null)).toBe('SELECT 1');
    });

    it('will replace named parameters', () => {
        expect(queryFormatter('SELECT :x', {
            x: 123
        })).toBe('SELECT 123');
    });

    it('unbounded parameters are passed through', () => {
        expect(queryFormatter('SELECT :x', {
            y: 123
        })).toBe('SELECT :x');
    });
});
