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

	getSchema(schemaName) {
		return this.getAPI().models[schemaName];
	}

	defineModel(name, fields, options) {
		return new Schema(this, name, fields, options);
	}

	sync(options) {
		return this.getAPI().sync(options);
	}

	escape(str) {
		return this.getAPI().escape(str);
	}

	isSchemaDefined(schemaName) {
		return this.geAPI().isDefined(schemaName);
	}

	query(sql, options) {
		return this.getAPI().query(sql, options);
	}

	set(vars, options) {
		return this.getAPI().set(vars, options);
	}

	showAllSchemas(options) {
		return this.getAPI().showAllSchemas(options);
	}
};

module.exports = Database;
