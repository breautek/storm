// import "jasmine";

import {Application} from '../src/Application';

class TestApplication extends Application {
    constructor() {
        super("TestApplication", "./spec/support/");
    }

    attachHandlers(): Promise<void> {
        return Promise.resolve();
    }
}

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
