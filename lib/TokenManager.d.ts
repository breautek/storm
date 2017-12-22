import { Token } from './Token';
export declare class TokenManager {
    private secret;
    constructor(secret: string);
    sign(payload: any, expiresIn: string): Promise<Token>;
    verify(token: Token): Promise<any>;
    decode(token: Token): Promise<any>;
}
