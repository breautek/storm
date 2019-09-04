import { Token } from './Token';
import { IJWTVerifyOptions } from './IJWTVerifyOptions';
export declare class TokenManager {
    private secret;
    constructor(secret: string);
    sign(payload: {
        [key: string]: any;
    }, expiresIn: string | number): Promise<Token>;
    verify(token: Token, options?: IJWTVerifyOptions): Promise<any>;
    decode(token: Token): Promise<any>;
}
