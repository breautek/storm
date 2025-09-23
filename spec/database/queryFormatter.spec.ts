
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

    it('will replace all occurrences', () => {
        expect(queryFormatter('SELECT :x, :x, :x', {
            x: 123
        })).toBe('SELECT 123, 123, 123');
    });

    it('supports lists', () => {
        expect(queryFormatter('SELECT (:x)', {
            x: [1, 2, 3]
        })).toBe('SELECT (1, 2, 3)');
    });

    it('supports nested lists', () => {
        expect(queryFormatter('SELECT :x', {
            x: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ]
        })).toBe('SELECT (1, 2, 3), (4, 5, 6), (7, 8, 9)');
    });
});
