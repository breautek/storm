// Copyright (C) 2021  Norman Breau

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
import { IConfig } from './IConfig';
import { ErrorObject } from 'ajv';

interface IInvalidConfigErrorDetails<TConfig extends IConfig> {
    config: TConfig;
    errors: Array<ErrorObject>;
}

export class InvalidConfigError<TConfig extends IConfig> extends StormError<IInvalidConfigErrorDetails<TConfig>> {
    public constructor(config: TConfig, errors: Array<ErrorObject>) {
        super({
            config,
            errors
        });
    }

    public getMessage(): string {
        return `Storm config has issues:\n` +
                this.getPrivateDetails().errors;
    }

    public getCode(): ErrorCode {
        return ErrorCode.INVALID_CREDENTIALS;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.ERR_UNAUTHORIZED;
    }
}
