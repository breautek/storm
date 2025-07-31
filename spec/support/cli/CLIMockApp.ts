/* eslint-disable no-console */

import { Application } from "../../../src/Application";

class CLIMockApp extends Application {
    protected async _attachHandlers(): Promise<void> {}

    protected override _getVersion(): string {
        return '1.2.3';
    }
    
    protected _onReady(): void {
        console.log(JSON.stringify(this.getCmdLineArgs()));
        process.exit(0);
    }
}

let app = new CLIMockApp('CLIMockApp', './spec/support/');
void (async (): Promise<void> => {
    await app.start();
})();
