'use strict';

var Events = require('events');
var LogSeverity = require('./LogSeverity');
var utils = require('util');


class Logger extends Events.EventEmitter {
	/**
	 * @constructor
	 * @param {string} name Logger's name
	 * @param  {name}
	 * @param  {LogSeverity logLevel}
	 * @param  {boolean useStdOutForErrors}
	 * @return {Logger}
	 */
	constructor(name, logLevel, useStdOutForErrors) {
		super();
		this._name = name === undefined ? '' : name;
		this._logLevel = LogSeverity.TRACE 	|	 
						LogSeverity.DEBUG 	|
						LogSeverity.INFO 	|
						LogSeverity.WARNING |
						LogSeverity.ERROR 	|
						LogSeverity.FATAL;

		if (logLevel) {
			this._logLevel = logLevel;
		}

		this._useStdOutForErrors = !!useStdOutForErrors;
	}

	setLogLevel(severity) {
		this._logLevel = severity;
	}

	getLogLevel() {
		return this._logLevel;
	}

	_formatDate(now) {
		return `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
	}

	_formatString(messages, severity) {
		var sevText = '';
		switch(severity) {
			case LogSeverity.TRACE:
				sevText = '[TRACE]';
				break;
			case LogSeverity.DEBUG:
				sevText = '[DEBUG]';
				break;
			case LogSeverity.INFO:
				sevText = '[INFO]';
				break;
			case LogSeverity.WARNING:
				sevText = '[WARN]';
				break;
			case LogSeverity.ERROR:
				sevText = '[ERROR]';
				break;
			case LogSeverity.FATAL:
				sevText = '[FATAL]';
				break;
			default:
				this.warn('Unknown Severity value used.');
				break;
		}

		var str = '';

		for (var i = 0; i < messages.length; i++) {
			var msg = messages[i];

			if (str.length !== 0) {
				str += ' ';
			}

			str += utils.inspect(msg);

			if (msg instanceof Error) {
				str = '\n\n' + msg.stack + '\n\n';
			}
		}

		return `${sevText}[${this._name}][${this._formatDate(new Date())}] ${str}\n`;
	}

	_log(messages, severity) {
		var msg = this._formatString(messages, severity);
		if ((severity & (LogSeverity.ERROR | LogSeverity.FATAL)) && this._useStdOutForErrors) {
			process.stderr.write(msg);
		}
		else {
			process.stdout.write(msg);
		}
	}

	log(messages, severity) {
		if (severity & this.getLogLevel()) {
			this._log(messages, severity);
			this.emit({
				severity : severity,
				message : messages
			});
		}
	}

	trace(message) {
		this.log(arguments, LogSeverity.TRACE);
	}

	debug(message) {
		this.log(arguments, LogSeverity.DEBUG);	
	}

	info(message) {
		this.log(arguments, LogSeverity.INFO);
	}

	warn(message) {
		this.log(arguments, LogSeverity.WARNING);
	}

	error(message) {
		this.log(arguments, LogSeverity.ERROR);
	}

	fatal(message) {
		this.log(arguments, LogSeverity.FATAL);
	}
};

module.exports = Logger;
