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
