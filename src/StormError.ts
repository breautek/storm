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

import {getInstance} from './instance';
import {Application} from './Application';
import {ErrorCode} from './ErrorCode';
import {StatusCode} from './StatusCode';

export interface AdditionalErrorDetails {
    [key: string]: any;
}

export interface ErrorResponse {
    message: string;
    code: number;
    details: AdditionalErrorDetails;
}

export abstract class StormError extends Error {
    private details: any;

    public constructor(details?: any) {
        super();

        this.details = details;

        var instance: Application = getInstance();
        instance.getLogger().error(`${this.getMessage()}.. See details below:`);
        instance.getLogger().info(this.getDetails());
    }

    abstract getMessage(): string;
    abstract getCode(): number;

    public getDetails(): any {
        return this.details;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }

    public getAdditionalDetails(): AdditionalErrorDetails {
        return {};
    }

    public getErrorResponse(): ErrorResponse {
        return {
            message : this.getMessage(),
            code : this.getCode(),
            details: this.getAdditionalDetails()
        };
    }
}
