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

import {getInstance, getApplicationLogger} from './instance';
import {Logger} from './Logger';
import * as Path from 'path';
import {Application} from './Application';
import {ExitCode} from './ExitCode';
import {IConfig} from './IConfig';

export class ConfigLoader {
    private constructor() {}

    public static load(path: string): Promise<IConfig> {
        var logger: Logger = ConfigLoader._getLogger();

        return new Promise<any>((resolve, reject) => {
            logger.trace('Configuration loaded.');
            
            var config: any = {};

            var cPath: string = Path.resolve(path, 'bt-config.json');
            var lPath: string = Path.resolve(path, 'bt-local-config.json');
            
            var c: any;
            var l: any;
            var defaults: any;

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
                reject(`Missing ${cPath}.`);
                process.nextTick(() => {
                    reject(ExitCode.MISSING_CONFIG);
                    // process.exit(ExitCode.MISSING_CONFIG);
                });
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
                config = ConfigLoader._mergeConfig(defaults, ConfigLoader._mergeConfig(c, l));
            }
            else {
                config = ConfigLoader._mergeConfig(defaults, c);
            }

            logger.trace('Reading command line arguments...');
            config = ConfigLoader._mergeConfig(config, ConfigLoader._getCmdLineArgs());

            logger.trace('Configurations merged.');
            logger.trace(config);

            resolve(<IConfig>config);
        });
    }

    private static _getCmdLineArgs(): any {
        var app: Application = getInstance();
        if (!app) {
            return {};
        }

        return app.getCmdLineArgs();
    }

    // private static _removeNaNs(o: any): any {
    //     for (var i in o) {
    //         if (isNaN(o[i])) {
    //             delete o[i];
    //         }
    //     }

    //     return o;
    // }

    private static _getLogger(): Logger {
        var logger: Logger;
        var app: Application = getInstance();
        if (app) {
            logger = getApplicationLogger();
        }
        
        if (!logger) {
            logger = new Logger('ConfigLoader');
        }

        return logger;
    }

    private static _mergeConfig(o1: any, o2: any): any {
        var o: any = o1;

        for (var i in o2) {
            var o1p = o1[i];
            var o2p = o2[i];

            if (o1p && (typeof o2p === 'object') && !(o2p instanceof Array)) {
                if (typeof o1p === 'object' && !(o1p instanceof Array)) {
                    o[i] = ConfigLoader._mergeConfig(o1p, o2p);
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
