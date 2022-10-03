/*
   Copyright 2017-2022 Norman Breau

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

import { StormError } from './StormError';

/**
 * A concrete error that accepts any arbitrary message string and optionally a code.
 * It's not recommended to use this class as it will be hard to differentiate errors by
 * tag name.
 */
export class RawError extends StormError<{message: string, code?: number}> {
    public constructor(message: string, code?: number) {
        super({
            message,
            code: code || 0
        });
    }

    public getCode(): number {
        return this.getPrivateDetails().code;
    }

    public getMessage(): string {
        return this.getPrivateDetails().message;
    }
}
