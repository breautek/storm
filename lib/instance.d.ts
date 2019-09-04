import { Application } from './Application';
import { Logger } from './Logger';
declare var setInstance: (app: Application) => void;
declare var getInstance: () => Application;
declare var getApplicationLogger: () => Logger;
export { setInstance, getInstance, getApplicationLogger };
