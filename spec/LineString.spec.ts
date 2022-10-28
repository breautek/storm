
import {LineString} from '../src/LineString';

describe('LineString', () => {
    it('should be (0 0, 1 1)', () => {
        let p: LineString = new LineString([ [ 0, 0 ], [ 1, 1 ] ]);
        expect(p.toSqlString()).toBe('LINESTRING(0 0, 1 1)');
    });
});
