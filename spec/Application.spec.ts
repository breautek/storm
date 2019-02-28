
import {TestApplication} from './support/TestApplication';

describe('Application', () => {
    it('launches', (done) => {
        class A extends TestApplication {
            public onReady(): void {
                done();
            }
        };

        var app: A = new A();
    });
});
