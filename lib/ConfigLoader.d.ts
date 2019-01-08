import { Config } from './Config';
import Commander = require('commander');
export declare class ConfigLoader {
    private constructor();
    static load(path: string, program?: Commander.CommanderStatic): Promise<Config>;
    private static _getCmdLineArgs;
    private static _removeNaNs;
    private static _getLogger;
    private static _mergeConfig;
}
