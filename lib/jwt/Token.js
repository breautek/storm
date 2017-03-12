'use strict';

var jwt = require('jsonwebtoken');

class Token {
	constructor(secret) {
		this._secret = secret;

		if (!this._secret) {
			throw new Error('Token must have a secret.');
		}
	}

	sign(payload, expiresIn) {
		return new Promise((resolve, reject) => {
			jwt.sign(payload, this._secret, {
				expiresIn : expiresIn
			}, (error, token) => {
				if (error) {
					return reject(error);
				}

				return resolve(token);
			})
		});
	}

	verify(token) {
		return new Promise((resolve, reject) => {
			jwt.verify(token, this._secret, (error, decoded) => {
				if (error) {
					return reject(error);
				}

				return resolve(decoded);
			});
		});
	}
};

module.exports = Token;
