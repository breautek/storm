
import { Application } from "../../../src/Application";

class CLIMockAppWithError extends Application {
    protected async _attachHandlers(): Promise<void> {}
    
    protected _onReady(): void {
        console.log(JSON.stringify(this.getCmdLineArgs()));
        process.exit(0);
    }
}

let app = new CLIMockAppWithError('CLIMockApp', './');
(async () => {
    await app.start();
})();
