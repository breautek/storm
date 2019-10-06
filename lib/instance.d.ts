import { Application } from './Application';
import { Logger } from './Logger';
declare const setInstance: (app: Application) => void;
declare const getInstance: () => Application;
declare const getApplicationLogger: () => Logger;
export { setInstance, getInstance, getApplicationLogger };
