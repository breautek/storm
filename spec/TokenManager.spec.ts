
import {Token} from '../src/Token';
import {TokenManager} from '../src/TokenManager';

interface JWTHeaders {
    alg: string;
    typ: string;
}

interface JWTParts {
    headers: JWTHeaders,
    payload: any;
}

const INVALID_TOKEN: Token = new Token('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE1NjEyMzUxNjMsImV4cCI6MTU2MTIzNTIyM30.9QrmHI-YN1RuoI4foRVSaL29MXfOWZo9eYFlNqKbv5s');

describe('TokenManager', () => {
    var manager: TokenManager = new TokenManager('secret');

    var parseJWT = (jwt: string): JWTParts => {
        var parts: Array<string> = jwt.split('.');
        var headers: Buffer = Buffer.from(parts[0], 'base64');
        var payload: Buffer = Buffer.from(parts[1], 'base64');

        return {
            headers: JSON.parse(headers.toString()),
            payload: JSON.parse(payload.toString())
        };
    }

    it('can sign', (done) => {
        manager.sign({test:true}, '1y').then((token: Token) => {
            var parts: JWTParts = parseJWT(token.getSignature());
            expect(parts.headers.alg).toBe('HS256');
            expect(parts.headers.typ).toBe('JWT');
            expect(parts.payload.test).toBe(true);
            expect(new Date(parts.payload.exp * 1000).getFullYear()).toBe(new Date().getFullYear() + 1);
            done();
        });
    });

    it('can sign (failure)', (done) => {
        manager.sign('test', '1y').catch((error) => {
            expect(error.toString()).toBe('Error: invalid expiresIn option for string payload');
            done();
        });
    });

    it('can verify (no opts)', (done) => {
        manager.sign({test:true}, '1y').then((token: Token) => {
            return manager.verify(token);
        }).then((data: any) => {
            expect(data.test).toBe(true);
            done();
        });
    });

    it('can verify (explicit enableExpiration=true)', (done) => {
        manager.sign({test: true}, '1y').then((token: Token) => {
            return manager.verify(token, {enableExpiration: true});
        }).then((data: any) => {
            expect(data.test).toBe(true);
            done();
        });
    });

    it('can verify (explicit enableExpiration=false)', (done) => {
        manager.sign({test: true}, '1ms').then((token: Token) => {
            return new Promise((resolve) => {
                //We need the token to expire before calling verify
                setTimeout(() => {
                    resolve(token);
                }, 100); 
            }); 
        }).then((token: Token) => {
            return manager.verify(token, {enableExpiration: false});
        }).then((data: any) => {
            //The lifespan is 1ms and we added a 100ms delay. token should be expired by now.
            expect(data.test).toBe(true);
            done();
        });
    });

    it('can verify (failure, expired token) (no opts)', (done) => {
        manager.verify(INVALID_TOKEN).catch((error: any) => {
            expect(error.name).toBe('TokenExpiredError');
            done();
        });
    });

    it('can verify (failure, expired token, explicit enableExpiration=true)', (done) => {
        manager.sign({test: true}, '1ms').then((token: Token) => {
            return new Promise((resolve) => {
                //We need the token to expire before calling verify
                setTimeout(() => {
                    resolve(token);
                }, 100); 
            });
        }).then((token: Token) => {
            return manager.verify(token, {enableExpiration: true});
        }).catch((error: any) => {
            expect(error.name).toBe('TokenExpiredError');
        });
    });

    it('can decode', (done) => {
        manager.decode(INVALID_TOKEN).then((data: any) => {
            expect(data.test).toBe(true);
            done();
        });
    });
});
