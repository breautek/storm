"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const Token_1 = require("./Token");
const JWTVerifyOptionsParser_1 = require("./JWTVerifyOptionsParser");
const crypto_1 = require("crypto");
class TokenManager {
    constructor(secret) {
        this.secret = secret;
    }
    sign(payload, expiresIn) {
        return new Promise((resolve, reject) => {
            crypto_1.randomBytes(64, (err, buffer) => {
                if (err) {
                    reject(err);
                    return;
                }
                payload.__bt__salt = buffer.toString('hex');
                jwt.sign(payload, this.secret, {
                    expiresIn: expiresIn
                }, (error, token) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(new Token_1.Token(token));
                });
            });
        });
    }
    verify(token, options) {
        return new Promise((resolve, reject) => {
            if (!options) {
                options = {
                    enableExpiration: true
                };
            }
            else if (options.enableExpiration === undefined) {
                options.enableExpiration = true;
            }
            jwt.verify(token.getSignature(), this.secret, JWTVerifyOptionsParser_1.JWTVerifyOptionsParser.parse(options), (error, decoded) => {
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