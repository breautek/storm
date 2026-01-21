
import {MetricStore} from '../src/MetricStore';

describe('MetricStore', () => {
    let metrics: MetricStore = null;

    beforeAll(() => {
        metrics = MetricStore.getInstance();
    });

    beforeEach(() => {
        metrics.purge();
    });

    it('can set keys', () => {
        metrics.set('key', 1);
        expect(metrics.get('key')).toBe(1);
    });

    describe('increment', () => {
        it('increment from nothing should be 1', () => {
            metrics.increment('x');
            expect(metrics.get('x')).toBe(1);
        });

        it('increment from non-number should be 0', () => {
            metrics.set('x', 'asdf');
            metrics.increment('x');
            expect(metrics.get('x')).toBe(0);
        });

        it('increment from 1 should be 2', () => {
            metrics.set('x', 1);
            metrics.increment('x');
            expect(metrics.get('x')).toBe(2);
        });
    });

    describe('decrement', () => {
        it('decrement from nothing should be 0', () => {
            metrics.decrement('x');
            expect(metrics.get('x')).toBe(0);
        });

        it('decrement from non-number should be 0', () => {
            metrics.set('x', 'asdf');
            metrics.decrement('x');
            expect(metrics.get('x')).toBe(0);
        });

        it('decrement from 1 should be 0', () => {
            metrics.set('x', 1);
            metrics.decrement('x');
            expect(metrics.get('x')).toBe(0);
        });

        it('decrement from 0 should be -1', () => {
            metrics.set('x', 0);
            metrics.decrement('x');
            expect(metrics.get('x')).toBe(-1);
        });
    });
});
