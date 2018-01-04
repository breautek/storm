import { Iterator } from './Iterator';
export declare class ReverseIterator<T> extends Iterator<T> {
    constructor(collection: Array<T>, index?: number);
    incrementIndex(): number;
    decrementIndex(): number;
    peekNextIndex(): number;
    peekPreviousIndex(): number;
    bringToStart(): void;
    bringToEnd(): void;
}
