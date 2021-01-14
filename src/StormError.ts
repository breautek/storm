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
import {Logger} from '@arashi/logger';
import {StatusCode} from './StatusCode';

const TAG: string = 'StormError';

export interface IAdditionalErrorDetails {
    [key: string]: any;
}

export interface IErrorResponse {
    name: string;
    message: string;
    code: number;
    details: IAdditionalErrorDetails;
}

export abstract class StormError<TErrorDetails = any> extends Error {
    private _details: TErrorDetails;

    public constructor(details?: TErrorDetails) {
        super();

        this._details = details;

        let logger: Logger = getInstance().getLogger();
        logger.error(TAG, `${this.getMessage()}... See details below:`);
        logger.info(TAG, this.getPrivateDetails());
    }

    public abstract getMessage(): string;
    public abstract getCode(): number;

    // public getDetails(): any {
    //     getInstance().getLogger().deprecate('getPrivateDetails()');
    //     return this.getPrivateDetails();
    // }

    /**
     * Sends details to the client.
     */
    public getPublicDetails(): IAdditionalErrorDetails {
        return {};
    }

    /**
     * Private details are only logged to the server log.
     * They are kept secret from the client.
     */
    public getPrivateDetails(): TErrorDetails {
        return this._details;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }

    public getErrorResponse(): IErrorResponse {
        return {
            name: this.constructor.name,
            message : this.getMessage(),
            code : this.getCode(),
            details: this.getPublicDetails()
        };
    }
}
