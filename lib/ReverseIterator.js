"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Iterator_1 = require("./Iterator");
class ReverseIterator extends Iterator_1.Iterator {
    constructor(collection, index) {
        super(collection, index);
        super.bringToEnd();
    }
    incrementIndex() {
        return super.decrementIndex();
    }
    decrementIndex() {
        return super.incrementIndex();
    }
    peekNextIndex() {
        return super.peekPreviousIndex();
    }
    peekPreviousIndex() {
        return super.peekNextIndex();
    }
    bringToStart() {
        super.bringToEnd();
    }
    bringToEnd() {
        super.bringToStart();
    }
}
exports.ReverseIterator = ReverseIterator;
//# sourceMappingURL=ReverseIterator.js.map