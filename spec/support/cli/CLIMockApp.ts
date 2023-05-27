
import { Application } from "../../../src/Application";

class CLIMockApp extends Application {
    protected async _attachHandlers(): Promise<void> {}
    
    protected _onReady(): void {
        console.log(JSON.stringify(this.getCmdLineArgs()));
        process.exit(0);
    }
}

let app = new CLIMockApp('CLIMockApp', './spec/support/');
(async () => {
    await app.start();
})();
