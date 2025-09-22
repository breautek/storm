/* eslint-disable @typescript-eslint/no-require-imports */
/// <reference path="./defs/merge-change.d.ts" />

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

import {getInstance} from './instance';
import {BaseLogger} from '@arashi/logger';
import * as Path from 'path';
import {Application, IStormCLIArgs} from './Application';
import {IConfig} from './IConfig';
import Ajv from 'ajv';
import MergeChange from '@breautek/merge-change';
import { InvalidConfigError } from './InvalidConfigError';
import { MissingConfigError } from './MissingConfigError';

const TAG: string = 'ConfigLoader';

export class ConfigLoader<TConfig extends IConfig = IConfig> {
    private $logger: BaseLogger;
    private $app: Application;

    public constructor(app: Application) {
        this.$app = app;
        this.$logger = app.getLogger();
    }

    public async load(configFile: string, localConfigFile: string): Promise<TConfig> {
        let logger: BaseLogger = this.$logger;

        logger.trace(TAG, 'Configuration loaded.');
        
        let config: Partial<TConfig> = {};

        let cPath: string = configFile;
        let lPath: string = localConfigFile;
        
        let c: IConfig;
        let l: IConfig;
        let defaults: IConfig = this.$getDefaults();

        logger.trace(TAG, `Main Config Path:\t ${cPath}`);
        logger.trace(TAG, `Local Config Path:\t ${lPath}`);

        c = this.$getMainConfig(cPath);
        l = this.$getLocalConfig(lPath);

        if (l) {
            config = MergeChange.merge(defaults, c, l);
        }
        else {
            config = MergeChange.merge(defaults, c);
        }

        logger.trace(TAG, 'Reading command line arguments...');
        
        // This pulls IConfig rules into the base config as expected
        config = MergeChange.merge(config, this.$getCmdLineArgs());

        if (!config.customConfig) {
            config.customConfig = {};
        }

        // This will pull all custom configurations into customConfig
        config.customConfig = MergeChange.merge(config.customConfig, this.$app.getConfigFromCLIArgs(this.$app.getCmdLineArgs().custom));

        if (config.log.level === null) {
            config.log.level = defaults.log.level;
        }

        logger.trace(TAG, 'Configurations merged.');
        logger.trace(TAG, config);

        await this.$validateSchema(config);

        return config as TConfig;
    }

    /**
     * @deprecated Instantiate ConfigLoader with the proper params
     * @param path 
     * @returns 
     */
    public static async load(path: string): Promise<IConfig> {
        let loader: ConfigLoader = new ConfigLoader<IConfig>(getInstance());
        return await loader.load(Path.resolve(path, 'bt-config.json'), Path.resolve('bt-local-config.json'));
    }

    private $getLocalConfig(path: string): IConfig {
        let config: IConfig = null;
        this.$logger.trace(TAG, 'Loading optional local config.');
        try {
            config = require(path);
            this.$logger.trace(TAG, 'Local config loaded.');
        }
        catch (ex) {
            this.$logger.trace(TAG, 'Local config could not be loaded.');
            this.$logger.trace(TAG, ex);
        }
        return config;
    }

    private $getMainConfig(path: string): IConfig {
        this.$logger.trace(TAG, 'Loading main confing...');
        let c: IConfig = null;
        try {
            c = require(path);
            this.$logger.trace(TAG, 'Main config loaded.');
        }
        catch (ex) {
            throw new MissingConfigError(path);
        }

        return c;
    }

    private $getDefaults(): IConfig {
        this.$logger.trace(TAG, 'Loading configuration defaults.');
        return require(Path.resolve(__dirname, '../bt-config-defaults.json'));
    }

    private async $validateSchema(config: Partial<TConfig>): Promise<void> {
        let ajv: Ajv = new Ajv({
            allErrors: true
        });

        let validate = ajv.compile({
            type: 'object',
            additionalProperties: false,
            properties: {
                bind:                           { type: [ 'string', 'null' ] },
                port:                           { type: [ 'number', 'null' ] },
                authentication_header:          { type: [ 'string', 'null' ] },
                backend_authentication_header:  { type: [ 'string', 'null' ] },
                backend_authentication_secret:  { type: [ 'string', 'null' ] },
                request_size_limit:             { type: [ 'number', 'null' ] },
                log: {
                    type: [ 'object', 'null' ],
                    additionalProperties: false,
                    properties: {
                        level: {
                            type: [ 'string', 'null' ],
                            enum: [
                                'silly',
                                'debug',
                                'verbose',
                                'http',
                                'info',
                                'warn',
                                'error',
                                null
                            ]
                        },
                        cloudwatch: {
                            type: [ 'object', 'null' ],
                            additionalProperties: false,
                            properties: {
                                region: { type: 'string' },
                                credentials: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: {
                                        accessKeyId: { type: 'string' },
                                        secretAccessKey: { type: 'string' }
                                    }
                                },
                                stream: {
                                    type: 'object',
                                    additionalProperties: false,
                                    properties: {
                                        group: { type: 'string' },
                                        name: { type: 'string' }
                                    }
                                }
                            }
                        },
                        filters: {
                            type: [ 'array', 'null' ],
                            items: { type: 'string' }
                        }
                    }
                },
                database: {
                    type: [ 'object', 'null' ],
                    additionalProperties: false,
                    properties: {
                        query_timeout: { type: [ 'integer', 'null' ], minimum: 0 },
                        main: {
                            type: [ 'object', 'null' ],
                            additionalProperties: false,
                            properties: {
                                name: { type: 'string', const: "MASTER" },
                                host: { type: 'string' },
                                port: { type: 'integer', minimum: 0 },
                                database: { type: 'string' },
                                user: { type: 'string' },
                                password: { type: 'string' }
                            }
                        },
                        replicationNodes: {
                            type: [ 'array', 'null' ],
                            items: {
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                    name: { type: 'string' },
                                    host: { type: 'string' },
                                    port: { type: 'integer', minimum: 0 },
                                    database: { type: 'string' },
                                    user: { type: 'string' },
                                    password: { type: 'string' }
                                }
                            }
                        }
                    }
                },
                enableMySQL2BreakingChanges: { type: [ 'boolean', 'null' ]},
                customConfig: {
                    type: 'object',
                    additionalProperties: true,
                    properties: {}
                }
            }
        });

        let isValid: boolean = validate(config);
        if (!isValid) {
            throw new InvalidConfigError(config, validate.errors);
        }
    }

    private $getCmdLineArgs(): Partial<IConfig> {
        let cliArgs: IStormCLIArgs = this.$app.getCmdLineArgs();

        let out: Partial<IConfig> = {}

        if (cliArgs.bind !== undefined) {
            out.bind = cliArgs.bind;
        }

        if (cliArgs.port !== undefined) {
            out.port = cliArgs.port;
        }

        if (cliArgs.authentication_header !== undefined) {
            out.authentication_header = cliArgs.authentication_header;
        }

        return out;
    }
}
