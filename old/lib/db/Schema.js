'use strict';

var Model = require('./Model');
var ModelCollection = require('./ModelCollection');

//Proxy for
//http://docs.sequelizejs.com/class/lib/model.js~Model.html

class Schema {
	constructor(database, name, fields) {
		this.$_database = database;

		this.$_api = this.$_database.getAPI().define(name, fields);
	}

	getAPI() {
		return this.$_api;
	}

	/**
	 * Adds a new scope to the model
	 * @param {String} name    
	 * @param {Object|Function} scope   
	 * @param {Object} options 
	 */
	addScope(name, scope, options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Run an aggregation method on a specified field
	 * @param  {String} field             
	 * @param  {String} aggregateFunction 
	 * @param  {Object} options           
	 * @return {Promise<DataTypes|Object}                   
	 */
	aggregate(field, aggregateFunction, options) {
		throw new Error('Not implemented.');	
	}

	/**
	 * Creates an association between this (the source) and the
	 * provided target
	 * @param  {Schema} schema  
	 * @param  {Object} options 
	 */
	belongsTo(schema, options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Creats an N:M association with a join table.
	 * @param  {Schema} schema 
	 * @param  {Object} object 
	 */
	belongsToMany(schema, object) {
		throw new Error('Not implemented.');
	}

	/**
	 * Builds a new model
	 * @param  {Object} options 
	 * @return {Model}        
	 */
	build(options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Create and insert multiple instances in bulk
	 * @param  {Array} records 
	 * @param  {Object} options 
	 * @return {Promise<Array<Model>>}         
	 */
	bulkCreate(records, options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Count the number of records matching the provided where clause.
	 * @param  {Object} options
	 * @return {Promise<Integer>}        
	 */
	count(options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Builds a new model and calls save on it.
	 * @param  {Object} data 
	 * @param  {Object} options
	 * @return {Promise<Model>}
	 */
	create(data, options) {
		return new Model(this.getAPI().create(data));
	}

	/**
	 * Run a describe query on the table
	 * @param  {*} schema  
	 * @param  {*} options 
	 * @return {Promise}         
	 */
	describe(schema, options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Delete multiple instances.
	 * @param  {Object} options 
	 * @return {Promise<Integer>}         
	 */
	destroy(options) {
		//TODO
		throw new Error('Not implemented.');
	}

	/**
	 * Drops the schema.
	 * @param  {Object} options 
	 * @return {Promise}         
	 */
	drop(options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Search for multiple instances
	 * @param  {Object} options 
	 * @return {Promise<ModelCollection>}         
	 */
	findAll(options) {
		return new Promise((resolve, reject) => {
			// console.log('wtf');
			this.getAPI().findAll(options).then((data) => {
				var models = [];

				for (var i = 0; i < data.length; i++) {
					models.push(new Model(data[i]));
				}

				// console.log(ModelCollection);

				resolve(new ModelCollection(models));
			}).catch(reject);
		});
	}

	/**
	 * Find all the rows matching the queyr within a specified
	 * offset/limit and get the total number of rows matching
	 * the query.
	 * @param  {Object} options
	 * @return {Promise<{count:Integer, rows:Array<Model>}>}         
	 */
	findAndCount(options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Search for a single instance by its primary key.
	 * @param  {Number|String|Buffer} id      
	 * @param  {Object} options 
	 * @return {Promise<Model>}         
	 */
	findByID(id, options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Search for a single instance
	 * @param  {Object} options 
	 * @return {Promise<Model>}        
	 */
	findOne(options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Get the table name of the schema.
	 * @return {String} 
	 */
	getTableName() {
		return this.getAPI().getTableName();
	}


	hasMany(schema, options) {
		throw new Error('Not implemented.');
	}

	hasOne(schema, options) {
		throw new Error('Not implemented.');
	}

	/**
	 * Increment the value of one or more columns.
	 * @param  {String|Array|Object} fields  
	 * @param  {Object} options 
	 * @return {Promise<this>}         
	 */
	increment(fields, options) {
		throw new Error('Not implemented.');
	}

	init(attributes, options) {
		throw new Error('Not implemented.');
	}

	max(field, options) {
		throw new Error('Not implemented.');
	}

	min(field, options) {
		throw new Error('Not implemented.');
	}

	removeAttributes(attribute) {
		throw new Error('Not implemented.');
	}

	restore(options) {
		throw new Error('Not implemented.');
	}

	schema(schema, options) {
		throw new Error('Not implemented.');
	}

	scope(options) {
		throw new Error('Not implemented.');
	}

	sum(field, options) {
		throw new Error('Not implemented.');
	}

	sync(options) {
		throw new Error('Not implemented.');
	}

	truncate(options) {
		throw new Error('Not implemented.');
	}

	unscoped() {
		throw new Error('Not implemented.');
	}

	update(values, options) {
		throw new Error('Not implemented.');
	}

	upsert(values, options) {
		throw new Error('Not implemented.');
	}
}

module.exports = Schema;
