export declare class ConfigLoader {
    private constructor();
    static load(path: string, argv?: any): Promise<any>;
    private static _getLogger;
    private static _mergeConfig;
}
