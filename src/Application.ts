import {EventEmitter} from 'events';
import {setInstance} from './instance';
import {Logger} from './Logger';
import {LogSeverity} from './LogSeverity'
import {TokenManager} from './TokenManager';
import {ApplicationEvent} from './ApplicationEvent';
import {ExitCode} from './ExitCode';
import * as Path from 'path';
import * as args from 'args';
import * as Express from 'express';
import * as BodyParser from 'body-parser';

export abstract class Application extends EventEmitter {
    private logger: Logger;
    private name: string;
    private configPath: string;
    private config: any; //TODO
    private tokenManager: TokenManager;
    private server: any; //todo
    private db: any; // todo

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

        try {
            this.config = this.loadConfig(this.configPath);
            this.getLogger().trace('Configuration loaded.');
            this.emit(ApplicationEvent.CONFIG_LOADED);
            this.onConfigLoad(this.config);

            this.db = this.initDB(this.getConfig());

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

            this.getLogger().trace('Attaching handlers...');
            this.attachHandlers();

            var bindingIP: string = this.getConfig().binding_ip;
            var port: number = this.getConfig().port;

            this.server.listen(port, bindingIP);

            this.getLogger().trace(`Server started on ${bindingIP}:${port}`);
        }
        catch(ex) {
            this.getLogger().fatal(ex);
        }
    }

    protected abstract async attachHandlers(): Promise<void>;

    public async loadConfig(path: string): Promise<any> {
        return await new Promise<any>((resolve, reject) => {
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
            defaults = require('../bt-config-defaults.json');

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

    public getDB(): any {
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

    protected async initDB(config: any): Promise<any> {
        return await Promise.resolve(null);
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