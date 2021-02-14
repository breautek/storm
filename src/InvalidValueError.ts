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

export class InvalidValueError extends StormError<{
    variable: string;
    expected: any;
    got: any;
}> {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public constructor(variable: string, expected: any, got: any) {
        super({
            variable: variable,
            expected: expected,
            got: got
        });
    }

    public getMessage(): string {
        let details: any = this.getPrivateDetails();
        return `Unexpected value for "${details.variable}". Expected ${details.expected} but got "${details.got}".`;
    }

    public getCode(): ErrorCode {
        return ErrorCode.INVALID_VALUE;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.ERR_BAD_REQUEST;
    }
}
