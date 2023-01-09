
import { HTTPApplication } from "../../../src/HTTPApplication";

class CLIMockAppWithError extends HTTPApplication {
    protected async _attachHandlers(): Promise<void> {}
    
    protected _onReady(): void {
        console.log(JSON.stringify(this.getCmdLineArgs()));
        process.exit(0);
    }
}

new CLIMockAppWithError('CLIMockApp', './');
