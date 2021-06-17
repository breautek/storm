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

import {Query} from './Query';

export class RawQuery<TQueryParameters = any, TQueryResultSet = any> extends Query<TQueryParameters, TQueryResultSet, TQueryResultSet> {
    private $query: string;

    public constructor(query: string, parameters?: TQueryParameters) {
        super(parameters);
        this.$query = query;
    }

    protected _getQuery(): string {
        return this.$query;
    }
}
