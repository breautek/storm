// Copyright (C) 2017  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

export class Iterator<T> {
    private collection: Array<T>;
    private cursor: number;

    constructor(collection: Array<T> = [], index: number = -1) {
        this.collection = collection;
        this.cursor = index;
    }

    public hasNext(): boolean {
        // return this.cursor + 1 < this.collection.length;
        return !!this.collection[this.peekNextIndex()];
    }

    public next(): T {
        // return this.collection[++this.cursor];
        return this.collection[this.incrementIndex()];
    }

    public hasPrevious(): boolean {
        // return this.cursor > 0;
        return !!this.collection[this.peekPreviousIndex()];
    }

    public previous(): T {
        // return this.collection[this.cursor--];
        return this.collection[this.decrementIndex()];
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

    public peekNextIndex(): number {
        return this.cursor + 1;
    }

    public peekPreviousIndex(): number {
        return this.cursor;
    }

    public incrementIndex(): number {
        return ++this.cursor;
    }

    public decrementIndex(): number {
        return this.cursor--;
    }
}
