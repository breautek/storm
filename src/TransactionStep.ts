/*
   Copyright 2017-2023 Norman Breau

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

import { IDatabaseConnection } from './IDatabaseConnection';
import { IQueryable } from './IQueryable';
import {Query} from './Query';

export class TransactionStep<TQueryParams = any, TQueryResultSet = any, TQueryPostProcessedResultSet = TQueryResultSet> implements IQueryable<TQueryPostProcessedResultSet> {
    private $query: Query<TQueryParams, TQueryResultSet, TQueryPostProcessedResultSet>;

    public onPreQuery(connection: IDatabaseConnection): Promise<void> {
        return this.$query.onPreQuery(connection);
    }

    public getQuery(connection: IDatabaseConnection): string {
        return this.$query.getQuery(connection);
    }

    public getParametersForQuery(): Record<string, any> {
        return this.$query.getParametersForQuery();
    }

    public onPostProcess(connection: IDatabaseConnection, results: TQueryResultSet): Promise<TQueryPostProcessedResultSet> {
        return this.$query.onPostProcess(connection, results);
    }

    public execute(connection: IDatabaseConnection): Promise<TQueryPostProcessedResultSet> {
        return this.$query.execute(connection);
    }
}
