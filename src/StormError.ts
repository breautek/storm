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

import {getInstance} from './instance';
import {Logger} from '@arashi/logger';
import {StatusCode} from './StatusCode';
import { ExitCode } from './ExitCode';

const TAG: string = 'StormError';

export interface IAdditionalErrorDetails {
    [key: string]: any;
}

export interface ILocale {
    code: string;
    parameters: Record<string, string>;
}

export interface IErrorResponse {
    name: string;
    message: string;
    locale: ILocale;
    code: number;
    details: IAdditionalErrorDetails;
}

export abstract class StormError<TErrorDetails = any> extends Error {
    private $details: TErrorDetails;

    public constructor(details?: TErrorDetails) {
        super();

        this.$details = details;

        let logger: Logger = getInstance().getLogger();
        logger.error(TAG, `${this.getMessage()}... See details below:`);
        logger.info(TAG, this.getPrivateDetails());
    }

    public abstract getMessage(): string;
    public abstract getCode(): number;

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
        return this.$details;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }

    public getErrorResponse(): IErrorResponse {
        return {
            name: this.constructor.name,
            message : this.getMessage(),
            code : this.getCode(),
            locale: {
                code: this.getLocaleCode(),
                parameters: this.getLocaleParameters()
            },
            details: this.getPublicDetails()
        };
    }

    public getLocaleCode(): string {
        return null;
    }

    public getLocaleParameters(): Record<string, string> {
        return null;
    }

    public getExitCode(): ExitCode {
        return null;
    }
}
