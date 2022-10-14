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

interface IDuplicateEntryErrorOptions {
    entity: string;
    name: string;
    property: string;
}

export class DuplicateEntryError extends StormError {
    public constructor(entity: string, name: string, property: string = 'name') {
        super({
            entity,
            name,
            property
        });
    }

    public getMessage(): string {
        let details: IDuplicateEntryErrorOptions = this.getPrivateDetails();
        return `${details.entity} with the ${details.property} "${details.name}" already exists.`;
    }

    public getCode(): ErrorCode {
        return ErrorCode.DUPLICATE_ENTRY;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.ERR_BAD_REQUEST;
    }

    public override getLocaleCode(): string {
        return '@breautek/storm/DuplicateEntryError/message';
    }

    public override getLocaleParameters(): Record<string, string> {
        let details: IDuplicateEntryErrorOptions = this.getPrivateDetails();
        return {
            entity: details.entity,
            property: details.property,
            name: details.name
        };
    }
}
