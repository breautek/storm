'use strict';

//Proxy for
//http://docs.sequelizejs.com/class/lib/model.js~Model.html

class Model {
	constructor(data) {
		this.data = model;
	}

	isNewRecord() {
		return this.data.isNewRecord;
	}

	changed(key) {
		throw new Error('Not implemented.');
	}

	decrement(fields, options) {
		throw new Error('Not implemented.');
	}

	destroy(options) {
		throw new Error('Not implemented.');
	}

	equals(model) {
		throw new Error('Not implemented.');
	}

	get(key, options) {
		throw new Error('Not implemented.');
	}

	getDataValue(key) {
		throw new Error('Not implemented.');
	}

	increment(fields, options) {
		throw new Error('Not implemented.');
	}

	isSoftDeleted() {
		throw new Error('Not implemented.');
	}

	previous(key) {
		throw new Error('Not implemented.');
	}

	reload(options) {
		throw new Error('Not implemented.');
	}

	restore(options) {
		throw new Error('Not implemented.');
	}

	save(options) {
		throw new Error('Not implemented.');
	}

	set(key, options) {
		throw new Error('Not implemented.');
	}

	setDataValue(key, value) {
		throw new Error('Not implemented.');
	}

	toJSON() {
		return this.data.toJSON();
	}

	serialize() {
		return JSON.stringify(this.toJSON());
	}

	update(updates, options) {
		throw new Error('Not implemented.');
	}

	validate(options) {
		throw new Error('Not implemented.');
	}

	where(checkVersion) {
		throw new Error('Not implemented.');
	}
}

module.exports = Model;
