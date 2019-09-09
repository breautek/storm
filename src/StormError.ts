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
import {StatusCode} from './StatusCode';

export interface IAdditionalErrorDetails {
    [key: string]: any;
}

export interface IErrorResponse {
    name: string;
    message: string;
    code: number;
    details: IAdditionalErrorDetails;
}

export abstract class StormError extends Error {
    private details: any;

    public constructor(details?: any) {
        super();

        this.details = details;

        const instance: Application = getInstance();
        instance.getLogger().error(`${this.getMessage()}... See details below:`);
        instance.getLogger().info(this.getPrivateDetails());
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
    public getPrivateDetails(): any {
        return this.details;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }

    // public getAdditionalDetails(): IAdditionalErrorDetails {
    //     getInstance().getLogger().deprecate('getPublicDetails()');
    //     return this.getPublicDetails();
    // }

    public getErrorResponse(): IErrorResponse {
        let details: IAdditionalErrorDetails = null;

        if ((<any>this)['getAdditionalDetails']) {
            getInstance().getLogger().deprecate('getPublicDetails', `${this.constructor.name}.getAdditionalDetails()`);
            details = (<any>this)['getAdditionalDetails']();
        }
        else {
            details = this.getPublicDetails();
        }

        return {
            name: this.constructor.name,
            message : this.getMessage(),
            code : this.getCode(),
            details: details
        };
    }
}
