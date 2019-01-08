import { Config } from './Config';
export declare class ConfigLoader {
    private constructor();
    static load(path: string): Promise<Config>;
    private static _getCmdLineArgs;
    private static _getLogger;
    private static _mergeConfig;
}
