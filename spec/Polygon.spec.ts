
import {Polygon} from '../src/Polygon';

describe('Polygon', () => {
    it('should be ((0 0, 1 1, 2 2))', () => {
        let p: Polygon = new Polygon([
            [
                [ 0, 0 ],
                [ 1, 1 ],
                [ 2, 2 ]
            ]
        ]);
        expect(p.toSqlString()).toBe('POLYGON((0 0, 1 1, 2 2))');
    });
});
