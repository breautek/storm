import { Config } from './Config';
export declare class ConfigLoader {
    private constructor();
    static load(path: string, argv?: any): Promise<Config>;
    private static _removeNaNs;
    private static _getLogger;
    private static _mergeConfig;
}
