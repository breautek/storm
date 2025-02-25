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

import { IDatabaseConnection } from './IDatabaseConnection';
import { IQueryable } from './IQueryable';

export abstract class Query<TQueryParameters = any, TQueryResultSet = any, TQueryPostProcessedResultSet = TQueryResultSet> implements IQueryable<TQueryPostProcessedResultSet> {
    private $params: TQueryParameters;

    public constructor(parameters?: TQueryParameters) {
        this.$params = parameters;
    }

    /**
     * @returns parameters that was passed into the constructor.
     */
    public getParameters(): TQueryParameters {
        return this.$params;
    }

    /**
     * Query implementations may override this API to augment the parameters.
     * 
     * @returns parameters that will be used when this query is ran.
     */
    public getParametersForQuery(): Record<string, any> {
        return this.$params;
    }

    protected abstract _getQuery(connection: IDatabaseConnection): string;

    public getQuery(connection: IDatabaseConnection): string {
        return this._getQuery(connection);
    }

    /**
     * Overridable to execute statements before the main query.
     * Can be used to set session variables or create temporary tables, etc.
     * 
     * @param connection 
     * @returns 
     */
    public onPreQuery(connection: IDatabaseConnection): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Overridable to execute statements after the main query.
     * Can be used to clean up session variables or temporary tables, etc
     * 
     * Unlike {@link onPostProcess}, this hook does not provide the result set,
     * and will be invoked even if the main query produces an error.
     * 
     * @since 8.3.0
     * 
     * @param connection 
     * @returns {void}
     */
    public onPostQuery(connection: IDatabaseConnection): Promise<void> {
        return Promise.resolve();
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
