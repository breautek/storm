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

import {StormError} from './StormError';
import {ErrorCode} from './ErrorCode';
import {StatusCode} from './StatusCode';
import { ExitCode } from './ExitCode';

interface IMissingConfigErrorDetails {
    path: string;
}

export class MissingConfigError extends StormError<IMissingConfigErrorDetails> {
    public constructor(path: string) {
        super({
            path
        });
    }

    public getMessage(): string {
        return `Storm cannot find config at ${this.getPrivateDetails().path}`;
    }

    public getCode(): ErrorCode {
        return null;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }

    public getExitCode(): ExitCode {
        return ExitCode.MISSING_CONFIG;
    }
}
