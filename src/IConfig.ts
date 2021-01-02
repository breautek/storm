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

import { IDatabaseConfig } from './IDatabaseConfig';
import {LogLevel} from '@arashi/logger';

export interface IConfig {
    // Server exposability
    binding_ip?: string;
    port?: number;
    
    // Authentication
    authentication_header?: string;
    backend_authentication_header?: string;
    backend_authentication_secret?: string;
    
    // Logging
    log_level: LogLevel;
    log_filters: Array<string>;

    // Database
    database?: {
        query_timeout?: number;
        main?: IDatabaseConfig<"MASTER">;
        replicationNodes?: Array<IDatabaseConfig>;
    };
    

    request_size_limit?: number;
}
