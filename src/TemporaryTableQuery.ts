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

import { IDictionary } from '@totalpave/interfaces';
import {Query} from './Query';

export interface ITemporaryTableQueryInput {
    tableName: string;
    selectQuery: Query;
}

export class TemporaryTableQuery extends Query<any> {

    public getParametersForQuery(): IDictionary {
        let params: IDictionary = this.getParameters();
        return {
            ...params.selectQuery.getParametersForQuery(),
            tableName: params.tableName
        };
    }

    protected _getQuery(): string {
        let params: ITemporaryTableQueryInput = this.getParameters();

        return `
            CREATE TEMPORARY TABLE \`${params.tableName}\`
            ${params.selectQuery.getQuery()}
        `;
    }
}
