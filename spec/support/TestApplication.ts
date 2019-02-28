import {Application} from '../../src/Application';

export class TestApplication extends Application {
    constructor() {
        super("TestApplication", "./spec/support/");
    }

    attachHandlers(): Promise<void> {
        return Promise.resolve();
    }
}