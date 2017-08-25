'use strict';

var Sequelize = require('sequelize');
var Schema = require('./Schema');

class Database {
	constructor() {
		this.api = this.$_initAPI();
		this.$_schemas = [];
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
		return this.$_schemas[schemaName];
	}

	defineModel(name, fields, options) {
		var schema = new Schema(this, name, fields, options);
		this.$_schemas[name] = schema;
		return schema;
	}

	sync(options) {
		return this.getAPI().sync(options);
	}

	escape(str) {
		return this.getAPI().escape(str);
	}

	isSchemaDefined(schemaName) {
		return this.geAPI().isDefined(schemaName) && !!this.$_schemas[schemaName];
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
