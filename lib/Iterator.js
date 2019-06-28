"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Iterator {
    constructor(collection = [], index = -1) {
        this.collection = collection;
        this.cursor = index;
    }
    hasNext() {
        return !!this.collection[this.peekNextIndex()];
    }
    next() {
        return this.collection[this.incrementIndex()];
    }
    hasPrevious() {
        return !!this.collection[this.peekPreviousIndex()];
    }
    previous() {
        return this.collection[this.decrementIndex()];
    }
    reset() {
        this.bringToStart();
    }
    bringToStart() {
        this.cursor = -1;
    }
    bringToEnd() {
        this.cursor = this.collection.length - 1;
    }
    peekNextIndex() {
        return this.cursor + 1;
    }
    peekPreviousIndex() {
        return this.cursor;
    }
    incrementIndex() {
        return ++this.cursor;
    }
    decrementIndex() {
        return this.cursor--;
    }
}
exports.Iterator = Iterator;
//# sourceMappingURL=Iterator.js.map