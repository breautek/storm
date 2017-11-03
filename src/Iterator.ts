
export class Iterator<T> {
    private collection: Array<T>;
    private cursor: number;

    constructor(collection: Array<T> = []) {
        this.collection = collection;
        this.cursor = -1;
    }

    public hasNext(): boolean {
        return this.cursor + 1 < this.collection.length;
    }

    public next(): T {
        return this.collection[++this.cursor];
    }

    public hasPrevious(): boolean {
        return this.cursor > 0;
    }

    public previous(): T {
        return this.collection[this.cursor--];
    }

    public reset(): void {
        this.bringToStart();
    }

    public bringToStart(): void {
        this.cursor = -1;
    }

    public bringToEnd(): void {
        this.cursor = this.collection.length - 1;
    }
}
