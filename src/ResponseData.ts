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

import {StatusCode} from './StatusCode';

export class ResponseData<TData = any> {
    private $status: StatusCode;
    private $data: TData;
    private $headers: Map<string, string>;
    private $redirect: string;

    public constructor(status: StatusCode, data?: TData) {
        this.$headers = new Map();
        this.$status = status;
        this.$data = data;
        this.$redirect = null;
    }

    public setHeader(name: string, value: string): void {
        this.$headers.set(name, value);
    }

    public getHeaders(): Map<string, string> {
        return this.$headers;
    }

    public getStatus(): StatusCode {
        return this.$status;
    }

    public getData(): TData {
        return this.$data;
    }

    public redirect(url: string): void {
        this.$redirect = url;
    }

    public getRedirect(): string {
        return this.$redirect;
    }
}
