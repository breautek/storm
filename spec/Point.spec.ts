
import {Point} from '../src/Point';

describe('Point', () => {
    it('should default to 0,0', () => {
        let p: Point = new Point();
        expect(p.toSqlString()).toBe('POINT(0, 0)');
    });

    it('should be 1,1', () => {
        let p: Point = new Point(1, 1);
        expect(p.toSqlString()).toBe('POINT(1, 1)');
    });
});
