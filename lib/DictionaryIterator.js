"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Iterator_1 = require("./Iterator");
class DictionaryIterator extends Iterator_1.Iterator {
    constructor(dictionary, startingIndex) {
        super(Object.keys(dictionary));
        this.dictionary = dictionary;
    }
    next() {
        var key = super.next();
        return {
            key: key,
            value: this.dictionary[key]
        };
    }
    previous() {
        var key = super.previous();
        return {
            key: key,
            value: this.dictionary[key]
        };
    }
}
exports.DictionaryIterator = DictionaryIterator;
//# sourceMappingURL=DictionaryIterator.js.map