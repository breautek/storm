'use strict';

var Express = require('express');
var Logger = require('./utils/Logger');

var Path = require('path');
var EventEmitter = require('events').EventEmitter;
var ExitCodes = require('./utils/ExitCodes');
var BodyParser = require('body-parser');
var Request = require('./http/Request');
var Response = require('./http/Response');

global._btapiframework_app_instance__ = null;

class Application extends EventEmitter {
	constructor(name, configPath) {
		super();

		global._btapiframework_app_instance__ = this;

		this._name = name;
		this._logger = this._createLogger();
		this._configPath = configPath || process.cwd();
		
		this._config;
		this._server;
		
		this.loadConfig(this._configPath).then((config) => {
			this._config = config;
			this.getLogger().debug(config);
			this.emit(Application.CONFIG_LOADED);

			return Promise.resolve();
		}).then(() => {
			this._server = Express();
			this._server.use(BodyParser.json({
				type : 'application/json'
			}));
			this._server.use(BodyParser.raw({
				type : 'application/*'
			}));
			this._server.use(BodyParser.text({
				type : 'text/*'
			}));
			return Promise.resolve();
			// return this.attachMiddlewares();
		}).then(() => {
			return this.attachHandlers();
		}).then(() => {
			var bindingIP = this._config.binding_ip || '127.0.0.1';
			var port = this._config.port || 80;

			this._server.listen(port, bindingIP);
			console.log(this._config);
		}).catch((error) => {
			this.getLogger().fatal(error);
		});
	}

	// attachMiddleware(middleware) {
	// 	this._server.use(middleware.execute);
	// }

	attachHandler(path, handler) {
		this._server.get(path, (request, response) => {
			hander.get(new Request(request), new Response(response));
		});
		this._server.post(path, (request, response) => {
			handler.post(new Request(request), new Response(response));
		});
		this._server.delete(path, (request, response) => {
			handler.delete(new Request(request), new Response(response));
		});
		this._server.put(path, (request, response) => {
			handler.put(new Request(request), new Response(response));
		});
	}

	/**
	 * @return {Promise}
	 */
	attachHandlers() {
		throw new Error('Application.attachHandlers is abstract and requires to be implemented by the subclass.');
	}

	// attachMiddlewares() {
	// 	return Promise.resolve();
	// }

	loadConfig(path) {
		return new Promise((resolve, reject) => {
			var config = {};

			var cPath = Path.resolve(path, 'bt-config.json');
			var lPath = Path.resolve(path, 'bt-local-config.json');
			var c, l;

			try {
				c = require(cPath);
			}
			catch(ex) {
				reject(`Missing ${cPath}.`);
				process.nextTick(() => {
					process.exit(ExitCodes.MISSING_CONFIG);
				});
			}

			try {
				l = require(lPath);
			}
			catch(ex) {/* this is optional*/}

			config = c;

			if (l) {
				config = this._mergeConfig(c, l);
			}
			else {
				config = c;
			}

			resolve(config);
		});
	}

	_mergeConfig(o1, o2) {
		var o = o1;

		for (var i in o2) {
			var o1p = o1[i];
			var o2p = o2[i];

			if (o1p && (typeof o2p === 'object') && !(o2p instanceof Array)) {
				if (typeof o1p === 'object' && !(o1p instanceof Array)) {
					o[i] = this._mergeConfig(o1p, o2p);
				}
				else {
					o[i] = o2p;
				}
			}
			else {
				o[i] = o2p;
			}
		}

		return 0;
	}

	getName() {
		return this._name;
	}

	_createLogger() {
		return new Logger(this.getName());
	}

	getLogger() {
		return this._logger;
	}
};

Application.CONFIG_LOADED = 'config_loaded';

module.exports = Application;
