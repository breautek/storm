
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
