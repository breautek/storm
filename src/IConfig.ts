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

import { IDatabaseConfig } from './IDatabaseConfig';
import {LogLevel} from '@arashi/interfaces';

export interface ICloudwatchCredentials {
    accessKeyId: string;
    secretAccessKey: string;
}

export interface ICloudwatchStreamConfig {
    group: string;
    name: string;
}

export interface ICloudwatchConfig {
    region: string;
    credentials: ICloudwatchCredentials;
    stream: ICloudwatchStreamConfig;
}

export interface IConfig {
    // Server exposability
    bind?: string;
    port?: number;
    
    // Authentication
    authentication_header?: string;
    backend_authentication_header?: string;
    backend_authentication_secret?: string;
    
    // Logging
    log?: {
        level?: LogLevel;
        filters?: string[];
        cloudwatch?: ICloudwatchConfig;
    },

    // Database
    database?: {
        query_timeout?: number;
        main?: IDatabaseConfig<"MASTER">;
        replicationNodes?: IDatabaseConfig[];
    };

    /**
     * @since 9.2.1 - defaults to false
     * 
     * Scheduled to default to true in 10.0.0.
     * Scheduled to be removed completely in 11.0.0
     * 
     * Breaking changes includes:
     * - DECIMAL types returned as strings.
     * Proper solution is to use a BigNumber library of some sort to
     * handle large numbers safely.
     * - JSON types are parsed and returned as actual objects as strings.
     * 
     * When this setting is false, DECIMAL types are returned as JS numbers
     * and JSON types are returned as strings, requiring the application to JSON parse the data.
     */
    enableMySQL2BreakingChanges?: boolean;
    
    request_size_limit?: number;

    customConfig?: Record<string, any>;
}
