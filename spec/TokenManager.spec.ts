
import {Token} from '../src/Token';
import {TokenManager} from '../src/TokenManager';

interface IJWTHeaders {
    alg: string;
    typ: string;
}

interface IJWTParts {
    headers: IJWTHeaders;
    payload: any;
}

const INVALID_TOKEN: Token = new Token('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE1NjEyMzUxNjMsImV4cCI6MTU2MTIzNTIyM30.9QrmHI-YN1RuoI4foRVSaL29MXfOWZo9eYFlNqKbv5s');

describe('TokenManager', () => {
    let manager: TokenManager = new TokenManager('secret');

    let parseJWT = (jwt: string): IJWTParts => {
        let parts: Array<string> = jwt.split('.');
        let headers: Buffer = Buffer.from(parts[0], 'base64');
        let payload: Buffer = Buffer.from(parts[1], 'base64');

        return {
            headers: JSON.parse(headers.toString()),
            payload: JSON.parse(payload.toString())
        };
    };

    describe('can sign', () => {
        it('success', (done) => {
            manager.sign({test: true}, '1y').then((token: Token) => {
                let parts: IJWTParts = parseJWT(token.getSignature());
                expect(parts.headers.alg).toBe('HS256');
                expect(parts.headers.typ).toBe('JWT');
                expect(parts.payload.test).toBe(true);
                expect(new Date(parts.payload.exp * 1000).getFullYear()).toBe(new Date().getFullYear() + 1);
                done();
            });
        });

        /*
            Test for when 2 sign requests happens within the same second,
            should create 2 different signatures.
        */
        it('will have unique signatures', (done) => {
            let promises: Array<Promise<Token>> = [
                manager.sign({test: true}, '1y'),
                manager.sign({test: true}, '1y')
            ];

            Promise.all(promises).then((results: Array<Token>) => {
                let a: Token = results[0];
                let b: Token = results[1];

                expect(a.getSignature()).not.toBe(b.getSignature());
                done();
            });
        });
    });

    describe('verification', () => {
        it('no opts', (done) => {
            manager.sign({test:true}, '1y').then((token: Token) => {
                return manager.verify(token);
            }).then((data: any) => {
                expect(data.test).toBe(true);
                done();
            });
        });
    
        it('explicit enableExpiration=true', (done) => {
            manager.sign({test: true}, '1y').then((token: Token) => {
                return manager.verify(token, {enableExpiration: true});
            }).then((data: any) => {
                expect(data.test).toBe(true);
                done();
            });
        });
    
        it('explicit enableExpiration=false', (done) => {
            manager.sign({test: true}, '1ms').then((token: Token) => {
                return new Promise((resolve) => {
                    // We need the token to expire before calling verify
                    setTimeout(() => {
                        resolve(token);
                    }, 100); 
                }); 
            }).then((token: Token) => {
                return manager.verify(token, {enableExpiration: false});
            }).then((data: any) => {
                // The lifespan is 1ms and we added a 100ms delay. token should be expired by now.
                expect(data.test).toBe(true);
                done();
            });
        });
    
        it('failure, expired token (no opts)', (done) => {
            manager.verify(INVALID_TOKEN).catch((error: any) => {
                expect(error.name).toBe('TokenExpiredError');
                done();
            });
        });
    
        it('failure, expired token, explicit enableExpiration=true', (done) => {
            manager.sign({test: true}, '1ms').then((token: Token) => {
                return new Promise((resolve) => {
                    // We need the token to expire before calling verify
                    setTimeout(() => {
                        resolve(token);
                    }, 100); 
                });
            }).then((token: Token) => {
                return manager.verify(token, {enableExpiration: true});
            }).catch((error: any) => {
                expect(error.name).toBe('TokenExpiredError');
                done();
            });
        });
    });

    it('can decode', (done) => {
        manager.decode(INVALID_TOKEN).then((data: any) => {
            expect(data.test).toBe(true);
            done();
        });
    });
});
