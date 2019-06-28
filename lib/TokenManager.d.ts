import { Token } from './Token';
import { IVerifyOptions } from './IVerifyOptions';
export declare class TokenManager {
    private secret;
    constructor(secret: string);
    sign(payload: any, expiresIn: string | number): Promise<Token>;
    verify(token: Token, options?: IVerifyOptions): Promise<any>;
    decode(token: Token): Promise<any>;
}
