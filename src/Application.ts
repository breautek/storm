// Copyright (C) 2017  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import {EventEmitter} from 'events';
import {setInstance} from './instance';
import {Logger} from './Logger';
import {LogSeverity} from './LogSeverity';
import {TokenManager} from './TokenManager';
import {ApplicationEvent} from './ApplicationEvent';
import {ExitCode} from './ExitCode';
import {Database} from './Database';
import {Handler} from './Handler';
import {IHandler} from './IHandler';
import {Request} from './Request';
import {Response} from './Response';
import {ConfigLoader} from './ConfigLoader';
import {IConfig} from './IConfig';
import Commander = require('commander');
import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as http from 'http';
import { IAuthTokenData } from '@arashi/token';

require('source-map-support').install();

/**
 * The default log level to log informational, warnings, errors, and fatal messages.
 */
const DEFAULT_LOG_LEVEL = LogSeverity.INFO | LogSeverity.WARNING | LogSeverity.ERROR | LogSeverity.FATAL;

/**
 * Main entry point for the Application. Should be extended and have the abstract methods implemented.
 */
export abstract class Application
    <
        TConfig extends IConfig = IConfig,
        TAuthToken extends IAuthTokenData = IAuthTokenData
    >
    extends EventEmitter {
    private logger: Logger;
    private name: string;
    private configPath: string;
    private config: TConfig;
    private tokenManager: TokenManager<TAuthToken>;
    private server: Express.Application;
    private db: Database;
    private _logConfigDefaulting: boolean;
    private _isTestEnvironment: boolean;
    private socket: http.Server;

    // private _argv: any;
    private _program: Commander.CommanderStatic;

    /**
     * 
     * @param name The application name
     * @param configPath The directory where bt-config.json and bt-local-config.json can be found. Defaults to current working directory.
     * @param logSeverity Log severity. Defaults to INFO | WARNING | ERROR | FATAL
     */
    public constructor(name: string, configPath: string, logSeverity?: LogSeverity) {
        super();

        setInstance(this);

        this._isTestEnvironment = false;
        
        this.$buildArgOptions();

        if ((<any>global).jasmine) {
            // We are in a test development
            this._isTestEnvironment = true;
        }

        this._program.parse(process.argv);

        this.name = name;
        this.logger = this._createLogger();

        if (logSeverity) {
            this._logConfigDefaulting = false;
            this.getLogger().setLogLevel(logSeverity);
        }
        else {
            this._logConfigDefaulting = true;
            this.getLogger().setLogLevel(this._getDefaultLogLevel());
        }

        process.on('unhandledRejection', (error: any) => {
            this.getLogger().fatal(error);
        });

        this.configPath = configPath || process.cwd();

        this.getLogger().trace('Application is booting...');
        this.getLogger().trace('Loading Configuration...');

        this._load();
    }

    private _load(): void {
        this.loadConfig(this.configPath).then((config: TConfig) => {
            this.config = config;
            this.getLogger().trace('Configuration loaded.');
            this.emit(ApplicationEvent.CONFIG_LOADED);
            this.onConfigLoad(this.config);
            return Promise.resolve();
        }).then(() => {
            if (this._logConfigDefaulting) {
                let logSeverity: LogSeverity = this._parseLogLevelConfig(this.getConfig());
                this.logger.setLogLevel(logSeverity);
            }

            this.logger.loadFilters();

            this.getLogger().trace('Initializing DB...');

            return this.initDB(this.getConfig());
        }).then((db: Database) => {
            if (db) {
                this.getLogger().trace('DB Initialized.');
            }
            else {
                this.getLogger().trace('DB is not initialized.');
            }
            this.db = db;

            return Promise.resolve();
        }).then(() => {
            this.getLogger().trace('Starting server...');
            this.server = Express();
            this.server.use(BodyParser.json({
                type : 'application/json',
                limit : this.getRequestSizeLimit()
            }));
            this.server.use(BodyParser.text({
                type : 'text/*',
                limit : this.getRequestSizeLimit()
            }));

            return Promise.resolve();
        }).then(() => {
            this.getLogger().trace('Attaching handlers...');
            return this.attachHandlers();
        }).then(() => {
            this.onBeforeReady();
            
            let bindingIP: string = this.getConfig().binding_ip;
            let port: number = this.getConfig().port;
    
            if (bindingIP !== null && bindingIP !== 'null') {
                if (this.shouldListen()) {
                    this.socket = http.createServer(this.server);
                    this.socket.listen(port, bindingIP, () => {
                        this.getLogger().trace(`Server started on ${bindingIP}:${this.getPort()}`);
                    });
                }
                else {
                    this.getLogger().trace('Server did not bind because shouldListen() returned false.');
                }
            }
            else {
                this.getLogger().info(`Server does not have a bounding IP set. The server will not be listening for connections.`);
            }

            this.onReady();
            this.emit('ready');
        }).catch((error) => {
            this.getLogger().fatal(error);
        });
    }

    public getPort(): number {
        let port: number = null;
        if (this.socket && this.socket.listening) {
            let address = this.socket.address();
            if (typeof address !== 'string') {
                port = address.port;
            }
        }
        return port;
    }

    private $buildArgOptions() {
        this._program = Commander;

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        let pkg: any = require('../package.json');
        
        this._program.version(pkg.version, '-v, --version');
        this._program.option('--port <port>', 'The running port to consume');
        this._program.option('--binding <ip>', 'The binding IP to listen on');
        this._program.option('--authentication_header', 'The header name of the authentication token');

        this._buildArgOptions(this._program);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected _buildArgOptions(program: Commander.CommanderStatic): void {}

    public getProgram(): Commander.CommanderStatic {
        return this._program;
    }

    /**
     * The maximum size limit for incoming requests that this service needs to handle.
     */
    public getRequestSizeLimit(): number {
        return this.getConfig().request_size_limit;
    }

    /**
     * 
     * @param path The URL API path. E.g. /api/myService/myCommand/
     * @param HandlerClass The concrete class (not the instance) of Handler to be used for this API.
     */
    public attachHandler(path: string, HandlerClass: IHandler): void {
        let handler: Handler = new HandlerClass(this);
        this.server.get(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.get(r, new Response(response, r.getURL()));
        });
        this.server.post(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.post(r, new Response(response, r.getURL()));
        });
        this.server.put(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.put(r, new Response(response, r.getURL()));
        });
        this.server.delete(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.delete(r, new Response(response, r.getURL()));
        });
    }

    public close(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (this.socket && this.socket.listening) {
                this.socket.close(() => {
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }

    /**
     * Subclasses are expected to attach the API handlers for their service. This will be invoked during application startup.
     * @returns Promise<void>
     */
    protected abstract attachHandlers(): Promise<void>;

    /**
     * 
     * @param path The directory path that contains bt-config.json and bt-local-config.json
     */
    public loadConfig(path: string): Promise<TConfig> {
        return new Promise<TConfig>((resolve, reject) => {
            ConfigLoader.load(path).then((config: TConfig) => {
                resolve(config);
            }).catch((exitCode: ExitCode) => {
                process.exit(exitCode);
            });
        });
    }

    /**
     * @returns the application name
     */
    public getName(): string {
        return this.name;
    }

    /**
     * 
     * @param logger Logger class to use
     */
    public setLogger(logger: Logger): void {
        this.logger = logger;
    }

    /**
     * @returns the application's logger
     */
    public getLogger(): Logger {
        return this.logger;
    }

    /**
     * @returns the config object.
     */
    public getConfig(): TConfig {
        return this.config;
    }

    /**
     * @returns true if the Application should bind to an IP address
     */
    public shouldListen(): boolean {
        return true;
    }

    /**
     * Invoked once the config has been loaded and ready to be used.
     * 
     * @param config The config object (as defined in bt-config.json/bt-local-config.json)
     */
    protected onConfigLoad(config: TConfig): void {}

    /**
     * Sets the TokenManager to be used for authentication.
     * @param tokenManager 
     */
    public setTokenManager(tokenManager: TokenManager<TAuthToken>): void {
        this.tokenManager = tokenManager;
    }

    /**
     * @returns the token manager
     */
    public getTokenManager(): TokenManager<TAuthToken> {
        return this.tokenManager;
    }

    /**
     * @returns the database pool. This will need to be casted based on your preferred database dialect.
     */
    public getDB(): Database {
        return this.db;
    }

    /**
     * @returns command line arguments
     */
    public getCmdLineArgs(): any {
        let program: Commander.CommanderStatic = this._program;
        let o: any = {};

        if (!program) {
            return o;
        }

        if (program.binding !== undefined) {
            // eslint-disable-next-line @typescript-eslint/camelcase
            o.binding_ip = program.binding;
        }

        if (program.port !== undefined) {
            o.port = program.port;
        }

        if (program.authenticationHeader !== undefined) {
            // eslint-disable-next-line @typescript-eslint/camelcase
            o.authentication_header = program.authenticationHeader;
        }

        return o;
    }

    /**
     * Subclasses are expected to override this to configure their database setup, if the service uses a database.
     * @param config The bt-config object
     */
    protected initDB(config: TConfig): Promise<Database> {
        return Promise.resolve(null);
    }

    /**
     * Creates the logger instance used by the application
     * @returns Logger
     */
    protected _createLogger(): Logger {
        return new Logger(this.getName());
    }

    /**
     * Sets the default log level on the Logger
     */
    protected _getDefaultLogLevel(): LogSeverity {
        return DEFAULT_LOG_LEVEL;
    }

    /**
     * Parses the log severity flags from the config object.
     * @param config bt-config object
     * @returns the severity mask
     */
    protected _parseLogLevelConfig(config: TConfig): LogSeverity {
        let llConfig: string = config.log_level;
        let severity: LogSeverity = null;

        if (!llConfig) {
            return null;
        }

        llConfig = llConfig.toLowerCase().trim();

        if (llConfig.indexOf('all') > -1) {
            return LogSeverity.ALL;
        }

        if (llConfig.indexOf('|') === -1) {
            severity = this._llStrToSeverity(llConfig);
        }
        else {
            let llParts: Array<string> = llConfig.split('|');
            for (let i: number = 0; i < llParts.length; i++) {
                let llPart: string = llParts[i];
                llPart = llPart.trim();
                if (llPart === '') {
                    continue;
                }

                /* istanbul ignore next */
                let llSev: LogSeverity = this._llStrToSeverity(llPart);
                if (!llSev) {
                    continue;
                }

                if (!severity) {
                    severity = llSev;
                }
                else {
                    severity = severity | llSev;
                }
            }
        }

        return severity;
    }

    /**
     * Translates the severity string to its corresponding enumeration value.
     * @param ll sevierty string
     */
    protected _llStrToSeverity(ll: string): LogSeverity {
        switch (ll) {
            case 'all':
                return LogSeverity.ALL;
            case 'trace':
                return LogSeverity.TRACE;
            case 'debug':
                return LogSeverity.DEBUG;
            case 'info':
                return LogSeverity.INFO;
            case 'warning':
                return LogSeverity.WARNING;
            case 'error':
                return LogSeverity.ERROR;
            case 'fatal':
                return LogSeverity.FATAL;
            default:
                return null;
        }
    }

    protected onBeforeReady(): void {}

    /**
     * Invoked when the application is considered ready for operation.
     */
    protected onReady(): void {}
}
