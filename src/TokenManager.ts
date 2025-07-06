/*
   Copyright 2017-2021 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import * as jwt from 'jsonwebtoken';
import {Token} from './Token';
import {IJWTVerifyOptions} from './IJWTVerifyOptions';
import {JWTVerifyOptionsParser} from './JWTVerifyOptionsParser';
import {randomBytes} from 'crypto';
import { IAuthTokenData } from './IAuthTokenData';
import { StringValue } from 'ms';

// const TAG: string = 'TokenManager';

export class TokenManager<TAuthToken extends IAuthTokenData = IAuthTokenData> {
    private $secret: string;

    public constructor(secret: string) {
        this.$secret = secret;
    }

    public sign(payload: {[key: string]: any}, expiresIn: StringValue | number): Promise<Token> {
        return new Promise<Token>((resolve, reject) => {
            randomBytes(64, (err: Error, buffer: Buffer) => {
                if (err) {
                    reject(err);
                    return;
                }

                payload.__bt__salt = buffer.toString('hex');

                jwt.sign(payload, this.$secret, {
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

            jwt.verify(token.getSignature(), this.$secret, JWTVerifyOptionsParser.parse(options), (error, decoded: TAuthToken) => {
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
                let decoded: TAuthToken = jwt.decode(token.getSignature()) as TAuthToken;
                resolve(decoded);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
}
