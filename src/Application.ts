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
import {LogSeverity} from './LogSeverity'
import {TokenManager} from './TokenManager';
import {ApplicationEvent} from './ApplicationEvent';
import {ExitCode} from './ExitCode';
import {Database} from './Database';
import {Handler} from './Handler';
import {IHandler} from './IHandler';
import {Request} from './Request';
import {Response} from './Response';
import * as Path from 'path';
import * as args from 'args';
import * as Express from 'express';
import * as BodyParser from 'body-parser';

export abstract class Application extends EventEmitter {
    private logger: Logger;
    private name: string;
    private configPath: string;
    private config: any;
    private tokenManager: TokenManager;
    private server: any; //todo
    private db: Database;

    public constructor(name: string, configPath: string, logSeverity: LogSeverity) {
        super();

        setInstance(this);

        this.name = name;
        this.logger = this._createLogger();

        if (logSeverity) {
            this.getLogger().setLogLevel(logSeverity);
        }

        this.configPath = configPath || process.cwd();

        this.getLogger().trace('Applicatino is booting...');
        this.getLogger().trace('Loading Configuration...');

        // try {
        
        this.loadConfig(this.configPath).then((config: any) => {
            this.config = config;
            this.getLogger().trace('Configuration loaded.');
            this.emit(ApplicationEvent.CONFIG_LOADED);
            this.onConfigLoad(this.config);
            return Promise.resolve();
        }).then(() => {
            return this.initDB(this.getConfig());
        }).then((db: Database) => {
            this.db = db;
            return Promise.resolve();
        }).then(() => {
            this.getLogger().trace('Starting server...');
            this.server = Express();
            this.server.use(BodyParser.json({
                type : 'application/json'
            }));
            this.server.use(BodyParser.raw({
                type: 'application/*'
            }));
            this.server.use(BodyParser.text({
                type : 'text/*'
            }));
            return Promise.resolve();
        }).then(() => {
            this.getLogger().trace('Attaching handlers...');
            return this.attachHandlers();
        }).then(() => {
            var bindingIP: string = this.getConfig().binding_ip;
            var port: number = this.getConfig().port;
    
            this.server.listen(port, bindingIP);
    
            this.getLogger().trace(`Server started on ${bindingIP}:${port}`);
        }).catch((error) => {
            this.getLogger().fatal(error);
        });
    }

    public attachHandler(path: string, HandlerClass: IHandler): void {
        var handler: Handler = new HandlerClass(this);
        this.server.get(path, (request: Express.Request, response: Express.Response) => {
            handler.get(new Request(request), new Response(response));
        });
        this.server.post(path, (request: Express.Request, response: Express.Response) => {
            handler.post(new Request(request), new Response(response));
        });
        this.server.put(path, (request: Express.Request, response: Express.Response) => {
            handler.put(new Request(request), new Response(response));
        });
        this.server.delete(path, (request: Express.Request, response: Express.Response) => {
            handler.delete(new Request(request), new Response(response));
        });
    }

    protected abstract attachHandlers(): Promise<void>;

    public loadConfig(path: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.getLogger().trace('Configuration loaded.');
            
            var config: any = {};

            var cPath: string = Path.resolve(path, 'bt-config.json');
            var lPath: string = Path.resolve(path, 'bt-local-config.json');
            
            var c: any;
            var l: any;
            var defaults: any;

            this.getLogger().trace(`Main Config Path:\t ${cPath}`);
            this.getLogger().trace(`Local Config Path:\t ${lPath}`);
            
            this.getLogger().trace('Loading configuration defaults.');
            defaults = require(Path.resolve(__dirname, '../bt-config-defaults.json'));

            this.getLogger().trace('Loading main confing...');
            try {
                c = require(cPath);
                this.getLogger().trace('Main config loaded.');
            }
            catch(ex) {
                reject(`Missing ${cPath}.`);
                process.nextTick(() => {
                    process.exit(ExitCode.MISSING_CONFIG);
                });
            }

            this.getLogger().trace('Loading optional local config.');
            try {
                l = require(lPath);
                this.getLogger().trace('Local config loaded.');
            }
            catch(ex) {
                this.getLogger().trace('Local config could not be loaded.');
                this.getLogger().trace(ex);
            }

            if (l) {
                config = this._mergeConfig(defaults, this._mergeConfig(c, l));
            }
            else {
                config = this._mergeConfig(defaults, c);
            }

            this.getLogger().trace('Reading command line arguments...');
            config = this._mergeConfig(config, this.getCmdLineArgs());

            this.getLogger().trace('Configurations merged.');
            this.getLogger().trace(config);

            resolve(config);
        });
    }

    public getName(): string {
        return this.name;
    }

    public getLogger(): Logger {
        return this.logger;
    }

    public getConfig(): any {
        return this.config;
    }

    protected onConfigLoad(config: any): void {}

    public setTokenManager(tokenManager: TokenManager): void {
        this.tokenManager = tokenManager;
    }

    public getTokenManager(): TokenManager {
        return this.tokenManager;
    }

    public getDB(): Database {
        return this.db;
    }

    public getCmdLineArgs(): any {
        var options: any = {};

        args.option('port', 'The running port to consume', null, (value: any) => {
            return parseInt(value);
        });
        args.option('binding_ip', 'The binding IP to listen on');
        args.option('authentication_header', 'The header name of the authentication token');
        
        var argv = args.parse(process.argv);

        if (argv.port) {
            options.port = argv.port;
        }

        if (argv.bindingIp) {
            options.binding_ip = argv.bindingIp;
        }

        if (argv.authenticationHeader) {
            options.authentication_header = argv.authenticationHeader;
        }

        return options;
    }

    protected initDB(config: any): Promise<Database> {
        return Promise.resolve(null);
    }

    private _createLogger(): Logger {
        return new Logger(this.getName());
    }

    private _mergeConfig(o1: any, o2: any): any {
        var o: any = o1;

        for (var i in o2) {
            var o1p = o1[i];
            var o2p = o2[i];

            if (o1p && (typeof o2p === 'object') && !(o2p instanceof Array)) {
                if (typeof o1p === 'object' && !(o1p instanceof Array)) {
                    o[i] = this._mergeConfig(o1p, o2p);
                }
                else {
                    o[i] = o2p;
                }
            }
            else {
                o[i] = o2p;
            }
        }

        return o;
    }
}
