
import {Token} from '../src/Token';

describe('Token', () => {
    it('getSignature()', () => {
        let token: Token = new Token('secret');
        expect(token.getSignature()).toBe('secret');
    });
});
