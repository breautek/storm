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
import {StatusCode} from './StatusCode';

export class DatabaseQueryError extends StormError<{
    query: string;
    error: any;
}> {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public constructor(query: string, error: any) {
        super({
            query: query,
            error: error
        });
    }

    public getMessage(): string {
        return 'Internal Server Error';
    }

    public getCode(): number {
        return 0;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }
}
