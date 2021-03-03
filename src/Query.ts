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
import { IDatabaseConnection } from './IDatabaseConnection';

export abstract class Query<TQueryParameters = any, TQueryResultSet = any, TQueryPostProcessedResultSet = TQueryResultSet> {
    private _params: TQueryParameters;

    public constructor(parameters?: TQueryParameters) {
        this._params = parameters;
    }

    public getParameters(): TQueryParameters {
        return this._params;
    }

    public getParametersForQuery(): IDictionary {
        return this._params;
    }

    protected abstract _getQuery(): string;

    public getQuery(): string {
        return this._getQuery();
    }

    /**
     * Override to augment/manipulate the returned result set.
     * 
     * @param connection The connection object used for this query execution. Useful if further queries are required.
     * @param resultset The original result set
     */
    public async onPostProcess(connection: IDatabaseConnection, resultSet: TQueryResultSet): Promise<TQueryPostProcessedResultSet> {
        // By default, simply return the result set without any post processing.
        return Promise.resolve(<any>resultSet);
    }

    public async execute(connection: IDatabaseConnection): Promise<TQueryPostProcessedResultSet> {
        return connection.query(this);
    }
}
