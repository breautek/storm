'use strict';

var jwt = require('jsonwebtoken');

var Token = require('./Token');

class TokenManager {
	constructor(secret) {
		this._secret = secret;

		if (!this._secret) {
			throw new Error('TokenManager must be constructed with a secret.');
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

				return resolve(new Token(token));
			})
		});
	}

	verify(token) {
		return new Promise((resolve, reject) => {
			jwt.verify(token.getSignature(), this._secret, (error, decoded) => {
				if (error) {
					return reject(error);
				}

				return resolve(decoded);
			});
		});
	}
};

module.exports = TokenManager;
