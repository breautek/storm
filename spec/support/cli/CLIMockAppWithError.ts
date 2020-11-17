
import { Application } from "../../../src/Application";

class CLIMockAppWithError extends Application {
    protected async attachHandlers(): Promise<void> {}
    
    protected onReady(): void {
        console.log(JSON.stringify(this.getCmdLineArgs()));
        process.exit(0);
    }
}

new CLIMockAppWithError('CLIMockApp', './');
