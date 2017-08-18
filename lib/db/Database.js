'use strict';

// var bt = require('index');
var Sequelize = require('sequelize');
var Schema = require('./Schema');

class Database {
	constructor() {
		this.api = this.$_initAPI();
		this.$loadModels();
	}

	$_initAPI() {
		return new Sequelize(global._btapiframework_app_instance__.getConfig().database);
	}

	$loadModels() {
		throw new Error('$loadModels() is abstract.');
	}

	getAPI() {
		return this.api;
	}

	defineModel(name, fields, options) {
		return new Schema(this, name, fields, options);
	}

	sync(options) {
		return this.getAPI().sync(options);
	}
};

module.exports = Database;
