'use strict';

class Iterator {
	constructor(collection) {
		this.$$_collection = (collection || []).slice();
		this.$_cursor = -1;
	}

	hasNext() {
		return this.$_cursor + 1 < this.$_collection.length;
	}

	next() {
		return this.$_collection[++this.$_cursor];
	}

	hasPrevious() {
		return this.$_cursor > 0;
	}

	previous() {
		return this.$_collection[this.$_cursor--];
	}

	reset() {
		this.bringToStart();
	}

	bringToStart() {
		this.$_cursor = -1;
	}

	bringToEnd() {
		this.$_cursor = this.$_collection.length - 1;
	}
};

module.exports = Iterator;
