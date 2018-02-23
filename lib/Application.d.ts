/// <reference types="node" />
import { EventEmitter } from 'events';
import { Logger } from './Logger';
import { LogSeverity } from './LogSeverity';
import { TokenManager } from './TokenManager';
import { Database } from './Database';
import { IHandler } from './IHandler';
export declare abstract class Application extends EventEmitter {
    private logger;
    private name;
    private configPath;
    private config;
    private tokenManager;
    private server;
    private db;
    private _logConfigDefaulting;
    constructor(name: string, configPath: string, logSeverity?: LogSeverity);
    getRequestSizeLimit(): number;
    attachHandler(path: string, HandlerClass: IHandler): void;
    protected abstract attachHandlers(): Promise<void>;
    loadConfig(path: string): Promise<any>;
    getName(): string;
    getLogger(): Logger;
    getConfig(): any;
    protected onConfigLoad(config: any): void;
    setTokenManager(tokenManager: TokenManager): void;
    getTokenManager(): TokenManager;
    getDB(): Database;
    getCmdLineArgs(): any;
    protected initDB(config: any): Promise<Database>;
    protected _createLogger(): Logger;
    protected _setDefaultLogLevel(): void;
    protected _parseLogLevelConfig(config: any): LogSeverity;
    private _llStrToSeverity(ll);
    protected onReady(): void;
}
