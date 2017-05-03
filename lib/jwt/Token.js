'use strict';

var jwt = require('jsonwebtoken');

class Token {
	constructor(tokenData) {
		this._tokenData = tokenData;

		console.log(this._tokenData);
	}

	getSignature() {
		return this._tokenData;
	}

	// sign(payload, expiresIn) {
	// 	return new Promise((resolve, reject) => {
	// 		jwt.sign(payload, this._secret, {
	// 			expiresIn : expiresIn
	// 		}, (error, token) => {
	// 			if (error) {
	// 				return reject(error);
	// 			}

	// 			return resolve(token);
	// 		})
	// 	});
	// }

	// verify(token) {
	// 	return new Promise((resolve, reject) => {
	// 		jwt.verify(token, this._secret, (error, decoded) => {
	// 			if (error) {
	// 				return reject(error);
	// 			}

	// 			return resolve(decoded);
	// 		});
	// 	});
	// }
};

module.exports = Token;
