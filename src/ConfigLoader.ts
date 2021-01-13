/// <reference path="./defs/merge-change.d.ts" />

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

import {getInstance} from './instance';
import {Logger} from './Logger';
import * as Path from 'path';
import {Application} from './Application';
import {ExitCode} from './ExitCode';
import {IConfig} from './IConfig';
// import Ajv from 'ajv';
import * as MergeChange from 'merge-change';

export class ConfigLoader {
    private constructor() {}

    public static load(path: string): Promise<IConfig> {
        let logger: Logger = ConfigLoader._getLogger();

        return new Promise<IConfig>((resolve, reject) => {
            logger.trace('Configuration loaded.');
            
            let config: any = {};

            let cPath: string = Path.resolve(path, 'bt-config.json');
            let lPath: string = Path.resolve(path, 'bt-local-config.json');
            
            let c: any;
            let l: any;
            let defaults: any;

            logger.trace(`Main Config Path:\t ${cPath}`);
            logger.trace(`Local Config Path:\t ${lPath}`);
            
            logger.trace('Loading configuration defaults.');
            defaults = require(Path.resolve(__dirname, '../bt-config-defaults.json'));

            logger.trace('Loading main confing...');
            try {
                c = require(cPath);
                logger.trace('Main config loaded.');
            }
            catch (ex) {
                logger.error(`Missing ${cPath}.`);
                process.nextTick(() => {
                    reject(ExitCode.MISSING_CONFIG);
                });
                return;
            }

            logger.trace('Loading optional local config.');
            try {
                l = require(lPath);
                logger.trace('Local config loaded.');
            }
            catch (ex) {
                logger.trace('Local config could not be loaded.');
                logger.trace(ex);
            }

            if (l) {
                config = MergeChange.merge(defaults, c, l);
            }
            else {
                config = MergeChange.merge(defaults, c);
            }

            logger.trace('Reading command line arguments...');
            config = MergeChange.merge(config, ConfigLoader._getCmdLineArgs());

            logger.trace('Configurations merged.');
            logger.trace(config);

            ConfigLoader._validateSchema(config);

            resolve(<IConfig>config);
        });
    }

    private static async _validateSchema(config: IConfig): Promise<void> {
        return;
        // let ajv: Ajv = new Ajv({
        //     allErrors: true
        // });

        // let validate = ajv.compile({
        //     type: 'object',
        //     additionalProperties: false,
        //     properties: {
        //         binding_ip:                     { type: [ 'string', 'null' ] },
        //         port:                           { type: [ 'number', 'null' ] },
        //         authentication_header:          { type: [ 'string', 'null' ] },
        //         backend_authentication_header:  { type: [ 'string', 'null' ] },
        //         backend_authentication_secret:  { type: [ 'string', 'null' ] },
        //         log_level:                      { type: [ 'string', 'null' ] },
        //         request_size_limit:             { type: [ 'number', 'null' ] },
        //         log_filters: {
        //             type: [ 'array', 'null' ],
        //             items: { type: 'string' }
        //         },
        //         database: {
        //             type: [ 'object', 'null' ],
        //             additionalProperties: false,
        //             properties: {
        //                 query_timeout: { type: [ 'integer', 'null' ], minimum: 0 },
        //                 main: {
        //                     type: [ 'object', 'null' ],
        //                     additionalProperties: false,
        //                     properties: {
        //                         name: { type: 'string', const: "MASTER" },
        //                         host: { type: 'string' },
        //                         port: { type: 'integer', minimum: 0 },
        //                         schema: { type: 'string' },
        //                         user: { type: 'string' },
        //                         password: { type: 'string' }
        //                     }
        //                 },
        //                 replicationNodes: {
        //                     type: [ 'array', 'null' ],
        //                     items: {
        //                         type: 'object',
        //                         additionalProperties: false,
        //                         properties: {
        //                             name: { type: 'string' },
        //                             host: { type: 'string' },
        //                             port: { type: 'integer', minimum: 0 },
        //                             schema: { type: 'string' },
        //                             user: { type: 'string' },
        //                             password: { type: 'string' }
        //                         }
        //                     }
        //                 }
        //             }
        //         },
        //         customConfig: {
        //             type: 'object',
        //             additionalProperties: true,
        //             properties: {}
        //         }
        //     }
        // });

        // let isValid: boolean = validate(config);
        // if (!isValid) {
        //     throw validate.errors;
        // }
    }

    private static _getCmdLineArgs(): any {
        let app: Application = getInstance();
        if (!app) {
            return {};
        }

        return app.getCmdLineArgs();
    }

    private static _getLogger(): Logger {
        let logger: Logger;
        
        if (!logger) {
            logger = new Logger('ConfigLoader');
        }

        return logger;
    }
}
