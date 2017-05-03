'use strict';

var jwt = require('jsonwebtoken');

class Token {
	constructor(signature) {
		this.signature = signature;
	}

	getSignature() {
		return this.signature;
	}
};

module.exports = Token;
