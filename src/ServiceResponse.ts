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

import {IncomingMessage} from 'http';

export class ServiceResponse {
    private $data: Buffer;
    private $response: IncomingMessage;

    public constructor(data: Buffer, response: IncomingMessage) {
        this.$data = data;
        this.$response = response;
    }

    public getRaw(): Buffer {
        return this.$data;
    }

    public getUTF8(): string {
        return this.$data.toString('utf8');
    }

    public getJSON(): any {
        return JSON.parse(this.getUTF8());
    }
}
