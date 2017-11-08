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

export class TokenManager {
    private secret: string;

    public constructor(secret: string) {
        this.secret = secret;
    }

    public async sign(payload: any, expiresIn: string): Promise<Token> {
        return new Promise<Token>((resolve, reject) => {
            jwt.sign(payload, this.secret, {
                expiresIn : expiresIn
            }, (error: Error, token: string) => {
                if (error) {
                    return reject(error);
                }

                return resolve(new Token(token));
            });
        })
    }

    public async verify(token: Token): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            jwt.verify(token.getSignature(), this.secret, (error, decoded) => {
                if (error) {
                    return reject(error);
                }

                return resolve(decoded);
            });
        });
    }
}