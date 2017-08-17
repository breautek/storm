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

	defineModel(name, fields) {
		return new Schema(this, name, fields);
	}

	sync(options) {
		return this.getAPI().sync(options);
	}
};

module.exports = Database;
