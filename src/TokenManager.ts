// Copyright (C) 2017  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as jwt from 'jsonwebtoken';
import {Token} from './Token';
import {IJWTVerifyOptions} from './IJWTVerifyOptions';
import {JWTVerifyOptionsParser} from './JWTVerifyOptionsParser';
import {randomBytes} from 'crypto';
import { IAuthTokenData } from './IAuthTokenData';

// const TAG: string = 'TokenManager';

export class TokenManager<TAuthToken extends IAuthTokenData = IAuthTokenData> {
    private _secret: string;

    public constructor(secret: string) {
        this._secret = secret;
    }

    public sign(payload: {[key: string]: any}, expiresIn: string | number): Promise<Token> {
        return new Promise<Token>((resolve, reject) => {
            randomBytes(64, (err: Error, buffer: Buffer) => {
                if (err) {
                    reject(err);
                    return;
                }

                payload.__bt__salt = buffer.toString('hex');

                jwt.sign(payload, this._secret, {
                    expiresIn : expiresIn
                }, (error: Error, token: string) => {
                    if (error) {
                        return reject(error);
                    }
    
                    return resolve(new Token(token));
                });
            });
        });
    }

    public verify(token: Token, options?: IJWTVerifyOptions): Promise<TAuthToken> {
        return new Promise<any>((resolve, reject) => {
            // placed inside the promise in the event that a reject would be required.
            if (!options) {
                options = {
                    enableExpiration: true
                };
            }
            else if (options.enableExpiration === undefined) {
                options.enableExpiration = true;
            }

            jwt.verify(token.getSignature(), this._secret, JWTVerifyOptionsParser.parse(options), (error, decoded: TAuthToken) => {
                if (error) {
                    return reject(error);
                }

                return resolve(decoded);
            });
        });
    }

    public decode(token: Token): Promise<TAuthToken> {
        return new Promise<any>((resolve, reject) => {
            try {
                let decoded: TAuthToken = <TAuthToken>jwt.decode(token.getSignature());
                resolve(decoded);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
}
