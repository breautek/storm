
import { Application } from "../../../src/Application";

class CLIMockAppWithError extends Application {
    protected async _attachHandlers(): Promise<void> {}
    
    protected _onReady(): void {
        console.log(JSON.stringify(this.getCmdLineArgs()));
        process.exit(0);
    }
}

new CLIMockAppWithError('CLIMockApp', './');
