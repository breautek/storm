"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const Token_1 = require("./Token");
class TokenManager {
    constructor(secret) {
        this.secret = secret;
    }
    sign(payload, expiresIn) {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, this.secret, {
                expiresIn: expiresIn
            }, (error, token) => {
                if (error) {
                    return reject(error);
                }
                return resolve(new Token_1.Token(token));
            });
        });
    }
    verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token.getSignature(), this.secret, (error, decoded) => {
                if (error) {
                    return reject(error);
                }
                return resolve(decoded);
            });
        });
    }
    decode(token) {
        return new Promise((resolve, reject) => {
            try {
                var decoded = jwt.decode(token.getSignature());
                resolve(decoded);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
}
exports.TokenManager = TokenManager;
//# sourceMappingURL=TokenManager.js.map