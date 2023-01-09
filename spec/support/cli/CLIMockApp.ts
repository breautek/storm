
import { HTTPApplication } from "../../../src/HTTPApplication";

class CLIMockApp extends HTTPApplication {
    protected async _attachHandlers(): Promise<void> {}
    
    protected _onReady(): void {
        console.log(JSON.stringify(this.getCmdLineArgs()));
        process.exit(0);
    }
}

new CLIMockApp('CLIMockApp', './spec/support/');
