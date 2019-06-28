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
import {IVerifyOptions} from './IVerifyOptions';
import {VerifyOptionsParser} from './VerifyOptionsParser';

export class TokenManager {
    private secret: string;

    public constructor(secret: string) {
        this.secret = secret;
    }

    public sign(payload: any, expiresIn: string | number): Promise<Token> {
        return new Promise<Token>((resolve, reject) => {
            jwt.sign(payload, this.secret, {
                expiresIn : expiresIn
            }, (error: Error, token: string) => {
                if (error) {
                    return reject(error);
                }

                return resolve(new Token(token));
            });
        });
    }

    public verify(token: Token, options?: IVerifyOptions): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            //placed inside the promise in the event that a reject would be required.
            if(!options) {
                options = {
                    enableExpiration: true
                };
            } else if(!options.enableExpiration) {
                options.enableExpiration = true;
            }
            jwt.verify(token.getSignature(), this.secret, VerifyOptionsParser.parse(options), (error, decoded) => {
                if (error) {
                    return reject(error);
                }

                return resolve(decoded);
            });
        });
    }

    public decode(token: Token): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            try {
                var decoded: any = jwt.decode(token.getSignature());
                resolve(decoded);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
}
