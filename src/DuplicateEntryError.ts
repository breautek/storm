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

export interface DuplicateEntryErrorOptions {
    entity : string;
    name: string;
}

export class DuplicateEntryError extends StormError {
    public constructor(details?: any) {
        super(details);
    }

    public getMessage(): string {
        var details: any = this.getDetails();
        return `${details.entity} with the name "${details.name}" already exists.`;
    }

    public getCode(): ErrorCode {
        return ErrorCode.DUPLICATE_ENTRY;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.ERR_BAD_REQUEST;
    }
}
