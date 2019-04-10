import {Iterator} from '../src/Iterator';

describe('Iterator', () => {
    var iterator: Iterator<number>;

    beforeEach(() => {
        iterator = new Iterator<number>([1,2,3]);
    });

    it('Constructs with custom index position', () => {
        var iter: Iterator<number> = new Iterator<number>([1,2,3], 0);
        expect(iter.hasPrevious()).toBe(true);
        expect(iter.next()).toBe(2);
        expect(iter.next()).toBe(3);
    });

    it('hasNext()', () => {
        expect(iterator.hasNext()).toBe(true);
        iterator.next();
        iterator.next();
        iterator.next();
        expect(iterator.hasNext()).toBe(false);
    });

    it('next()', () => {
        expect(iterator.next()).toBe(1);
        expect(iterator.next()).toBe(2);
        expect(iterator.next()).toBe(3);
    });

    it('hasPrevious()', () => {
        expect(iterator.hasPrevious()).toBe(false);
        iterator.next();
        expect(iterator.hasPrevious()).toBe(true);
    });

    it('previous()', () => {
        iterator.next();
        iterator.next();
        iterator.next();
        expect(iterator.previous()).toBe(3);
        expect(iterator.previous()).toBe(2);
        expect(iterator.previous()).toBe(1);
    });

    it('reset()', () => {
        iterator.next();
        iterator.next();
        iterator.reset();
        expect(iterator.next()).toBe(1);
    });

    it('bringToStart()', () => {
        iterator.next();
        iterator.next();
        iterator.reset();
        expect(iterator.next()).toBe(1);
    });

    it('bringToEnd()', () => {
        iterator.bringToEnd();
        expect(iterator.previous()).toBe(3);
    });

    it('peekNextIndex()', () => {
        expect(iterator.peekNextIndex()).toBe(0);
        expect(iterator.next()).toBe(1);
        expect(iterator.peekNextIndex()).toBe(1);
        expect(iterator.next()).toBe(2);
        expect(iterator.peekNextIndex()).toBe(2);
        expect(iterator.next()).toBe(3);
    });

    it('peekNextIndex()', () => {
        iterator.bringToEnd();
        expect(iterator.peekPreviousIndex()).toBe(2);
        expect(iterator.previous()).toBe(3);
        expect(iterator.peekPreviousIndex()).toBe(1);
        expect(iterator.previous()).toBe(2);
        expect(iterator.peekPreviousIndex()).toBe(0);
        expect(iterator.previous()).toBe(1);
    });

    it('incrementIndex()', () => {
        iterator.incrementIndex();
        expect(iterator.next()).toBe(2);
    });

    it('decrementIndex()', () => {
        iterator.bringToEnd();
        iterator.decrementIndex();
        expect(iterator.next()).toBe(3);
    });
});
