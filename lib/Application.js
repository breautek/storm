'use strict';

var Express = require('express');
var Logger = require('./utils/Logger');

var args = require('args');
var Path = require('path');
var EventEmitter = require('events').EventEmitter;
var ExitCodes = require('./utils/ExitCodes');
var BodyParser = require('body-parser');
var Request = require('./http/Request');
var Response = require('./http/Response');

global._btapiframework_app_instance__ = null;

class Application extends EventEmitter {
	constructor(name, configPath, logSeverity) {
		super();

		global._btapiframework_app_instance__ = this;

		

		this._name = name;
		this._logger = this._createLogger();

		if (logSeverity) {
			this.getLogger().setLogLevel(logSeverity);
		}

		var bt = require('../');
		if (bt.instance) {
			this._logger.warn('instance is already defined. Are you calling the Application constructor twice?');
		}
		bt.instance = this;

		this._configPath = configPath || process.cwd();

		this._logger.trace('Application is booting...');
		
		this._config;
		this._server;
		this._tokenManager;
		
		this._logger.trace('Loading Configuration...');
		this.loadConfig(this._configPath).then((config) => {
			this._logger.trace('Configuration loaded.');
			this._config = config;
			this.getLogger().debug(config);
			this.emit(Application.CONFIG_LOADED);
			this.onConfigLoad(config);

			return Promise.resolve();
		}).then(() => {
			return this.initDB(this.getConfig());
		}).then((db) => {
			this._db = db;
			return Promise.resolve();
		}).then(() => {
			this._logger.trace('Starting server...');
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
			this._logger.trace('Attaching handlers....');
			return this.attachHandlers();
		}).then(() => {
			var bindingIP = this._config.binding_ip;
			var port = this._config.port;

			this._server.listen(port, bindingIP);

			this._logger.trace(`Server started on ${bindingIP}:${port}`);
		}).catch((error) => {
			this.getLogger().fatal(error);
		});
	}

	onConfigLoad() {}

	setTokenManager(tokenManager) {
		this._tokenManager = tokenManager;
	}

	getTokenManager() {
		return this._tokenManager;
	}

	getDB() {
		return this._db;
	}

	initDB(config) {
		return Promise.resolve(null);
	}

	attachHandler(path, Handler) {
		var handler = new Handler(this);
		this._server.get(path, (request, response) => {
			handler.get(new Request(request), new Response(response));
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

	getCmdLineArgs() {
		var options = {};

		args.option('port', 'The running port to consume', null, (value) => {
			return parseInt(value);
		});
		args.option('binding_ip', 'The binding IP to listen on');

		var argv = args.parse(process.argv);

		if (argv.port) {
			options.port = argv.port;
		}

		if (argv.bindingIp) {
			options.binding_ip = argv.bindingIp;
		}

		return options;
	}

	loadConfig(path) {
		return new Promise((resolve, reject) => {
			var config = {};

			var cPath = Path.resolve(path, 'bt-config.json');
			var lPath = Path.resolve(path, 'bt-local-config.json');
			var c, l, defaults;

			this._logger.trace('Main Config Path:\t' + cPath);
			this._logger.trace('Local Config Path:\t' + lPath);

			this._logger.trace('Loading configuration defaults.');
			defaults = require('../bt-config-defaults.json');

			this._logger.trace('Loading main config.');
			try {
				c = require(cPath);
				this._logger.trace('Main config loaded.');
			}
			catch(ex) {
				reject(`Missing ${cPath}.`);
				process.nextTick(() => {
					process.exit(ExitCodes.MISSING_CONFIG);
				});
			}


			this._logger.trace('Loading optional local config.');
			try {
				l = require(lPath);
				this._logger.trace('Local config loaded.');
			}
			catch(ex) {
				this._logger.trace('Local config could not be loaded.');
				this._logger.trace(ex);
			}

			config;

			if (l) {
				config = this._mergeConfig(defaults, this._mergeConfig(c, l));
			}
			else {
				config = this._mergeConfig(defaults, c);
			}

			this._logger.trace('Reading command line arguments');
			config = this._mergeConfig(config, this.getCmdLineArgs());

			this._logger.trace('Configurations merged');
			this._logger.trace(config);

			resolve(config);
		});
	}

	getConfig() {
		return this._config;
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

		return o;
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
