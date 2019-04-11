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

import {Application} from './Application';
import {Logger} from './Logger';
import {LogSeverity} from './LogSeverity';

var instance: Application;
var genericLogger: Logger;

/* istanbul ignore next */
var setInstance = (app: Application): void => {
    if (instance) {
        /* istanbul ignore next */
        instance.getLogger().warn('Storm application already initialized');
    }
    instance = app;
};

var getInstance = (): Application => {
    return instance;
};

var getApplicationLogger = (): Logger => {
    /* istanbul ignore else */
    if (instance) {
        return instance.getLogger();
    }
    else {
        /* istanbul ignore if */
        if (!genericLogger) {
            genericLogger = new Logger('Generic');
            genericLogger.info('Using generic logger. Only errors will be reported.');
            genericLogger.setLogLevel(LogSeverity.ERROR | LogSeverity.FATAL);
        }
        return genericLogger;
    }
};

export {
    setInstance,
    getInstance,
    getApplicationLogger
};
