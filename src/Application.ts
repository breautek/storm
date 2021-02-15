/*
   Copyright 2017-2021 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import {EventEmitter} from 'events';
import {setInstance} from './instance';
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
import { Logger } from '@arashi/logger';

const TAG: string = 'Application';

/**
 * Main entry point for the Application. Should be extended and have the abstract methods implemented.
 */
export abstract class Application
    <
        TConfig extends IConfig = IConfig,
        TAuthToken extends IAuthTokenData = IAuthTokenData,
        TDBConfig = any,
        TDBConnectionAPI = any
    >
    extends EventEmitter {
    private _logger: Logger;
    private _name: string;
    private _configPath: string;
    private _config: TConfig;
    private _tokenManager: TokenManager<TAuthToken>;
    private _server: Express.Application;
    private _db: Database<TDBConfig, TDBConnectionAPI>;
    private _socket: http.Server;
    private _program: Commander.CommanderStatic;

    /**
     * 
     * @param name The application name
     * @param configPath The directory where bt-config.json and bt-local-config.json can be found. Defaults to current working directory.
     */
    public constructor(name: string, configPath: string) {
        super();

        setInstance(this);
        
        this.$buildArgOptions();
        
        this._program.parse(process.argv);

        this._name = name;

        process.on('unhandledRejection', (error: any) => {
            this._getLogger().error(TAG, error);
        });

        this._configPath = configPath || process.cwd();

        this._logger = new Logger(this.constructor.name);

        this._logger.info(TAG, 'Application is booting...');
        this._logger.info(TAG, 'Loading Configuration...');

        this._load();
    }

    private _load(): void {
        this.loadConfig(this._configPath).then((config: TConfig) => {
            this._config = config;
            this._logger = this._initLogger(config);
            this._getLogger().trace(TAG, 'Configuration loaded.');
            this.emit(ApplicationEvent.CONFIG_LOADED);
            this.onConfigLoad(this._config);
            return Promise.resolve();
        }).then(() => {
            this._getLogger().trace(TAG, 'Initializing DB...');
            return this.initDB(this.getConfig());
        }).then((db: Database<TDBConfig, TDBConnectionAPI>) => {
            if (db) {
                this._getLogger().trace(TAG, 'DB Initialized.');
            }
            else {
                this._getLogger().trace(TAG, 'DB is not initialized.');
            }
            this._db = db;

            return Promise.resolve();
        }).then(() => {
            this._getLogger().trace(TAG, 'Starting server...');
            this._server = Express();
            this._server.use(BodyParser.json({
                type : 'application/json',
                limit : this.getRequestSizeLimit()
            }));
            this._server.use(BodyParser.text({
                type : 'text/*',
                limit : this.getRequestSizeLimit()
            }));

            return Promise.resolve();
        }).then(() => {
            this._getLogger().trace(TAG, 'Attaching handlers...');
            return this.attachHandlers();
        }).then(() => {
            this.onBeforeReady();

            return new Promise<void>((resolve, reject) => {
                let bindingIP: string = this.getConfig().bind;
                let port: number = this.getConfig().port;

                if (bindingIP !== null && bindingIP !== 'null') {
                    if (this.shouldListen()) {
                        this._socket = http.createServer(this._server);
                        this._socket.listen(port, bindingIP, () => {
                            this._getLogger().trace(TAG, `Server started on ${bindingIP}:${this.getPort()}`);
                            resolve();
                        });
                    }
                    else {
                        this._getLogger().trace(TAG, 'Server did not bind because shouldListen() returned false.');
                        resolve();
                    }
                }
                else {
                    this._getLogger().info(TAG, `Server does not have a bounding IP set. The server will not be listening for connections.`);
                    resolve();
                }
            });
        }).then(() => {
            return this._initialize(this.getConfig());
        }).then(() => {
            this.onReady();
            this.emit('ready');
        }).catch((error) => {
            this._getLogger().error(TAG, error);
        });
    }

    protected _initialize(config: TConfig): Promise<void> {
        return Promise.resolve();
    }
    
    protected _initLogger(config: TConfig): Logger {
        return new Logger(this.getName(), config.log?.level, config.log?.directory);
    }

    public getLogger(): Logger {
        return this._logger;
    }

    public getPort(): number {
        let port: number = null;
        if (this._socket && this._socket.listening) {
            let address = this._socket.address();
            if (typeof address !== 'string') {
                port = address.port;
            }
        }
        return port;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    private $buildArgOptions() {
        this._program = Commander;

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        let pkg: any = require('../package.json');
        
        this._program.version(pkg.version, '-v, --version');
        this._program.option('--port <port>', 'The running port to consume');
        this._program.option('--bind <ip>', 'The binding IP to listen on');
        this._program.option('--authentication_header <header>', 'The header name of the authentication token');

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
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public attachHandler(path: string, HandlerClass: IHandler): void {
        let handler: Handler = new HandlerClass(this);
        this._server.get(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.get(r, new Response(response, r.getURL()));
        });
        this._server.post(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.post(r, new Response(response, r.getURL()));
        });
        this._server.put(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.put(r, new Response(response, r.getURL()));
        });
        this._server.delete(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.delete(r, new Response(response, r.getURL()));
        });
    }

    public close(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (this._socket && this._socket.listening) {
                this._socket.close(() => {
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
        return this._name;
    }

    private _getLogger(): Logger {
        return this._logger;
    }

    /**
     * @returns the config object.
     */
    public getConfig(): TConfig {
        return this._config;
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
        this._tokenManager = tokenManager;
    }

    /**
     * @returns the token manager
     */
    public getTokenManager(): TokenManager<TAuthToken> {
        return this._tokenManager;
    }

    /**
     * @returns the database pool. This will need to be casted based on your preferred database dialect.
     */
    public getDB(): Database<TDBConfig, TDBConnectionAPI> {
        return this._db;
    }

    /**
     * @returns command line arguments
     */
    public getCmdLineArgs(): TConfig {
        let program: Commander.CommanderStatic = this._program;
        let o: any = {};

        let opts: any = program.opts();

        if (!program) {
            return o;
        }

        if (opts.bind !== undefined) {
            o.bind = opts.bind;
        }

        if (opts.port !== undefined) {
            o.port = opts.port;
        }

        if (opts.authentication_header !== undefined) {
            o.authentication_header = opts.authentication_header;
        }

        return o;
    }

    /**
     * Subclasses are expected to override this to configure their database setup, if the service uses a database.
     * @param config The bt-config object
     */
    protected initDB(config: TConfig): Promise<Database<TDBConfig, TDBConnectionAPI>> {
        return Promise.resolve(null);
    }

    protected onBeforeReady(): void {}

    /**
     * Invoked when the application is considered ready for operation.
     */
    protected onReady(): void {}
}
