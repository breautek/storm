/* istanbul ignore file */

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

let instance: Application;

let setInstance = (app: Application): void => {
    if (instance) {
        instance.getLogger().warn('ApplicationInstance', 'Storm application already initialized');
    }
    instance = app;
};

let getInstance = (): Application => {
    return instance;
};

export {
    setInstance,
    getInstance
};
