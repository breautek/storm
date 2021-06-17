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
import {Logger} from '@arashi/logger';
import * as Path from 'path';
import {Application} from './Application';
import {IConfig} from './IConfig';
import Ajv from 'ajv';
import * as MergeChange from 'merge-change';
import { InvalidConfigError } from './InvalidConfigError';
import { MissingConfigError } from './MissingConfigError';

const TAG: string = 'ConfigLoader';

export class ConfigLoader {
    private constructor() {}

    public static async load(path: string): Promise<IConfig> {
        let logger: Logger = ConfigLoader.$getLogger();

        logger.trace(TAG, 'Configuration loaded.');
        
        let config: IConfig = {};

        let cPath: string = Path.resolve(path, 'bt-config.json');
        let lPath: string = Path.resolve(path, 'bt-local-config.json');
        
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
        config = MergeChange.merge(config, ConfigLoader.$getCmdLineArgs());

        if (config.log.level === null) {
            config.log.level = defaults.log.level;
        }

        logger.trace(TAG, 'Configurations merged.');
        logger.trace(TAG, config);

        await ConfigLoader.$validateSchema(config);

        return config;
    }

    private static $getLocalConfig(path: string): IConfig {
        let config: IConfig = null;
        this.$getLogger().trace(TAG, 'Loading optional local config.');
        try {
            config = require(path);
            this.$getLogger().trace(TAG, 'Local config loaded.');
        }
        catch (ex) {
            this.$getLogger().trace(TAG, 'Local config could not be loaded.');
            this.$getLogger().trace(TAG, ex);
        }
        return config;
    }

    private static $getMainConfig(path: string): IConfig {
        this.$getLogger().trace(TAG, 'Loading main confing...');
        let c: IConfig = null;
        try {
            c = require(path);
            this.$getLogger().trace(TAG, 'Main config loaded.');
        }
        catch (ex) {
            throw new MissingConfigError(path);
        }

        return c;
    }

    private static $getDefaults(): IConfig {
        this.$getLogger().trace(TAG, 'Loading configuration defaults.');
        return require(Path.resolve(__dirname, '../bt-config-defaults.json'));
    }

    private static async $validateSchema(config: IConfig): Promise<void> {
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
                        directory: { type: [ 'string', 'null' ] },
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

    private static $getCmdLineArgs(): any {
        let app: Application = getInstance();
        if (!app) {
            return {};
        }

        return app.getCmdLineArgs();
    }

    private static $getLogger(): Logger {
        let logger: Logger;
        
        if (!logger) {
            logger = new Logger('ConfigLoader');
        }

        return logger;
    }
}
