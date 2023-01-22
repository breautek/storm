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

import {IApplication} from './IApplication';
import {EventEmitter} from 'events';
import {setInstance} from './instance';
import {TokenManager} from './TokenManager';
import {ApplicationEvent} from './ApplicationEvent';
import {Database} from './Database';
// import {Handler} from './Handler';
// import {IHandler} from './IHandler';
// import {Request} from './Request';
// import {Response} from './Response';
import {ConfigLoader} from './ConfigLoader';
import {IConfig} from './IConfig';
import {Command} from 'commander';
// import * as Express from 'express';
// import * as BodyParser from 'body-parser';
// import * as http from 'http';
import { IAuthTokenData } from '@arashi/token';
import { Logger } from '@arashi/logger';
import { StormError } from './StormError';

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
    extends EventEmitter
    implements IApplication<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI> {
    private $logger: Logger;
    private $name: string;
    private $configPath: string;
    private $config: TConfig;
    private $tokenManager: TokenManager<TAuthToken>;
    // private $server: Express.Application;
    private $db: Database<TDBConfig, TDBConnectionAPI>;
    // private $socket: http.Server;
    private $program: Command;

    /**
     * 
     * @param name The application name
     * @param configPath The directory where bt-config.json and bt-local-config.json can be found. Defaults to current working directory.
     */
    public constructor(name: string, configPath: string) {
        super();

        setInstance(this);
        
        this.$buildArgOptions();
        
        this.$program.parse(process.argv);

        this.$name = name;

        process.on('unhandledRejection', (error: any) => {
            this.$getLogger().error(TAG, error);
        });

        this.$configPath = configPath || process.cwd();

        this.$logger = new Logger(this.constructor.name);

        this.$logger.info(TAG, 'Application is booting...');
        this.$logger.info(TAG, 'Loading Configuration...');

        this.$load();
    }

    protected abstract _initSocket(): Promise<void>;

    private $load(): void {
        this.loadConfig(this.$configPath).then((config: TConfig) => {
            this.$config = config;
            this.$logger = this._initLogger(config);
            this.$getLogger().trace(TAG, 'Configuration loaded.');
            this.emit(ApplicationEvent.CONFIG_LOADED);
            this._onConfigLoad(this.$config);
            return Promise.resolve();
        }).then(() => {
            this.$getLogger().trace(TAG, 'Initializing DB...');
            return this._initDB(this.getConfig());
        }).then((db: Database<TDBConfig, TDBConnectionAPI>) => {
            if (db) {
                this.$getLogger().trace(TAG, 'DB Initialized.');
            }
            else {
                this.$getLogger().trace(TAG, 'DB is not initialized.');
            }
            this.$db = db;

            return Promise.resolve();
        }).then(() => {
            this.$getLogger().trace(TAG, 'Starting server...');
            return this._initSocket();
            // this.$server = Express();
            // this.$server.use(BodyParser.json({
            //     type : 'application/json',
            //     limit : this.getRequestSizeLimit()
            // }));
            // this.$server.use(BodyParser.text({
            //     type : 'text/*',
            //     limit : this.getRequestSizeLimit()
            // }));

            // return Promise.resolve();
        }).then(() => {
            return this._onBeforeReadyAsync();
        }).then(() => {
            return new Promise<void>((resolve, reject) => {
                let bindingIP: string = this.getConfig().bind;
                let port: number = this.getConfig().port;

                if (bindingIP !== null && bindingIP !== 'null') {
                    if (this.shouldListen()) {
                        this._bindSocket(bindingIP, port).then(() => {
                            this.$getLogger().trace(TAG, `Server started on ${bindingIP}:${this.getPort()}`);
                            resolve();
                        }).catch(reject);
                        // this.$socket = http.createServer(this.$server);
                        // this.$socket.listen(port, bindingIP, () => {
                        //     this.$getLogger().trace(TAG, `Server started on ${bindingIP}:${this.getPort()}`);
                        //     resolve();
                        // });
                    }
                    else {
                        this.$getLogger().trace(TAG, 'Server did not bind because shouldListen() returned false.');
                        resolve();
                    }
                }
                else {
                    this.$getLogger().info(TAG, `Server does not have a bounding IP set. The server will not be listening for connections.`);
                    resolve();
                }
            });
        }).then(() => {
            return this._initialize(this.getConfig());
        }).then(() => {
            this._onReady();
            this.emit('ready');
        }).catch((error) => {
            this.$getLogger().error(TAG, error);
        });
    }

    protected abstract _bindSocket(ip: string, port: number): Promise<void>;

    protected _initialize(config: TConfig): Promise<void> {
        return Promise.resolve();
    }
    
    protected _initLogger(config: TConfig): Logger {
        return new Logger(this.getName(), config.log?.level, config.log?.directory);
    }

    public getLogger(): Logger {
        return this.$logger;
    }

    protected abstract _getPort(): number;

    public getPort(): number {
        return this._getPort();
        // let port: number = null;
        // if (this.$socket && this.$socket.listening) {
        //     let address = this.$socket.address();
        //     if (typeof address !== 'string') {
        //         port = address.port;
        //     }
        // }
        // return port;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    private $buildArgOptions() {
        this.$program = new Command();

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        let pkg: any = require('../package.json');
        
        this.$program.version(pkg.version, '-v, --version');
        this.$program.allowUnknownOption(true);
        this.$program.allowExcessArguments(true);
        this.$program.option('--port <port>', 'The running port to consume');
        this.$program.option('--bind <ip>', 'The binding IP to listen on');
        this.$program.option('--authentication_header <header>', 'The header name of the authentication token');

        this._buildArgOptions(this.$program);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected _buildArgOptions(program: Command): void {}

    public getProgram(): Command {
        return this.$program;
    }

    /**
     * The maximum size limit for incoming requests that this service needs to handle.
     */
    public getRequestSizeLimit(): number {
        return this.getConfig().request_size_limit;
    }

    // /**
    //  * 
    //  * @param path The URL API path. E.g. /api/myService/myCommand/
    //  * @param HandlerClass The concrete class (not the instance) of Handler to be used for this API.
    //  */
    // // eslint-disable-next-line @typescript-eslint/naming-convention
    // public attachHandler(path: string, HandlerClass: IHandler): void {
    //     let handler: Handler = new HandlerClass(this);
    //     this.attachHandlerInstance(path, handler);
    // }

    // public attachHandlerInstance(path: string, handler: Handler): void {
    //     this.$server.get(path, (request: Express.Request, response: Express.Response) => {
    //         let r: Request = new Request(request);
    //         handler.get(r, new Response(response, r.getURL()));
    //     });
    //     this.$server.post(path, (request: Express.Request, response: Express.Response) => {
    //         let r: Request = new Request(request);
    //         handler.post(r, new Response(response, r.getURL()));
    //     });
    //     this.$server.put(path, (request: Express.Request, response: Express.Response) => {
    //         let r: Request = new Request(request);
    //         handler.put(r, new Response(response, r.getURL()));
    //     });
    //     this.$server.delete(path, (request: Express.Request, response: Express.Response) => {
    //         let r: Request = new Request(request);
    //         handler.delete(r, new Response(response, r.getURL()));
    //     });
    // }

    public async close(): Promise<void> {
        await Promise.all([ this._closeSocket(), this._closeDatabase() ]);
    }

    protected async _closeDatabase(): Promise<void> {
        if (this.$db) {
            await this.$db.destroy();
        }
    }

    protected abstract _closeSocket(): Promise<void>;/* {
        return new Promise<void>((resolve, reject) => {
            if (this.$socket && this.$socket.listening) {
                this.$socket.close(() => {
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }*/

    /**
     * Subclasses are expected to attach the API handlers for their service. This will be invoked during application startup.
     * @returns Promise<void>
     */
    // protected abstract _attachHandlers(): Promise<void>;

    /**
     * 
     * @param path The directory path that contains bt-config.json and bt-local-config.json
     */
    public loadConfig(path: string): Promise<TConfig> {
        return new Promise<TConfig>((resolve, reject) => {
            ConfigLoader.load(path).then((config: TConfig) => {
                resolve(config);
            }).catch((error: any) => {
                if (error instanceof StormError) {
                    if (error.getExitCode() !== null) {
                        process.exit(error.getExitCode());
                    }
                }
                else {
                    this.$getLogger().error(TAG, error);
                }
            });
        });
    }

    /**
     * @returns the application name
     */
    public getName(): string {
        return this.$name;
    }

    private $getLogger(): Logger {
        return this.$logger;
    }

    /**
     * @returns the config object.
     */
    public getConfig(): TConfig {
        return this.$config;
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
    protected _onConfigLoad(config: TConfig): void {}

    /**
     * Sets the TokenManager to be used for authentication.
     * @param tokenManager 
     */
    public setTokenManager(tokenManager: TokenManager<TAuthToken>): void {
        this.$tokenManager = tokenManager;
    }

    /**
     * @returns the token manager
     */
    public getTokenManager(): TokenManager<TAuthToken> {
        return this.$tokenManager;
    }

    /**
     * @returns the database pool. This will need to be casted based on your preferred database dialect.
     */
    public getDB(): Database<TDBConfig, TDBConnectionAPI> {
        return this.$db;
    }

    /**
     * @returns command line arguments
     */
    public getCmdLineArgs(): TConfig {
        let program: Command = this.$program;
        let o: any = {};

        let opts: any = program.opts();

        if (!program) {
            return o;
        }

        if (opts.bind !== undefined) {
            o.bind = opts.bind;
        }

        if (opts.port !== undefined) {
            o.port = parseInt(opts.port);
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
    protected _initDB(config: TConfig): Promise<Database<TDBConfig, TDBConnectionAPI>> {
        return Promise.resolve(null);
    }

    protected async _onBeforeReadyAsync(): Promise<void> {}

    /**
     * Invoked when the application is considered ready for operation.
     */
    protected _onReady(): void {}
}
