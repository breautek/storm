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
import {StatusCode} from './StatusCode';

export class DatabaseQueryError extends StormError<{
    query: string;
    error: any;
}> {
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

    /**
     * If the underlying error is a database error, then
     * returns the database error code as sting.
     * @since 8.5.0
     */
    public getDBErrorCode(): string | null {
        return this.getPrivateDetails()?.error?.code || null;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }

    public override getLocaleCode(): string {
        return '@breautek/storm/InternalError/message';
    }
}
