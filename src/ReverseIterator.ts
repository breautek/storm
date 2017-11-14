
import {Iterator} from './Iterator';

export class ReverseIterator<T> extends Iterator<T> {
    public constructor(collection: Array<T>) {
        super(collection);
        super.bringToEnd();
    }
    
    public incrementIndex(): number {
        return super.decrementIndex();
    }

    public decrementIndex(): number {
        return super.incrementIndex();
    }

    public peekNextIndex(): number {
        return super.peekPreviousIndex();
    }

    public peekPreviousIndex(): number {
        return super.peekNextIndex();
    }

    public bringToStart(): void {
        super.bringToEnd();
    }

    public bringToEnd(): void {
        super.bringToStart();
    }
}
