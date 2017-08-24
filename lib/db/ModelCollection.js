'use strict';

var Model = require('./Model');
var Iterator = require('../utils/Iterator');

class ModelCollection {
	constructor(models) {
		this._data = models || [];
		this._verifyCollection();
	}

	_verifyCollection() {
		for (var i = 0; i < this._data.length; i++) {
			var model = this._data[i];

			if (!(model instanceof Model)) {
				return false;
			}
		}

		return true;
	}

	toJSON() {
		var arr = [];

		for (var i = 0; i < this._data.length; i++) {
			arr.push(this._data[i].toJSON());
		}

		return arr;
	}

	serialize() {
		return JSON.stringify(this.toJSON());
	}

	iterator() {
		return new Iterator(this._data);
	}
}

module.exports = ModelCollection;