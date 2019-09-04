import { IConfig } from './IConfig';
export declare class ConfigLoader {
    private constructor();
    static load(path: string): Promise<IConfig>;
    private static _getCmdLineArgs;
    private static _getLogger;
    private static _mergeConfig;
}
