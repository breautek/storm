export declare class Iterator<T> {
    private collection;
    private cursor;
    constructor(collection?: Array<T>, index?: number);
    hasNext(): boolean;
    next(): T;
    hasPrevious(): boolean;
    previous(): T;
    reset(): void;
    bringToStart(): void;
    bringToEnd(): void;
    peekNextIndex(): number;
    peekPreviousIndex(): number;
    incrementIndex(): number;
    decrementIndex(): number;
}
