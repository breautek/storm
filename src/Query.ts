// Copyright (C) 2017  Norman Breau

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { IDatabaseConnection } from './IDatabaseConnection';

export abstract class Query<TQueryParameters = any, TQueryResultSet = any, TQueryPostProcessedResultSet = TQueryResultSet> {
    private _params: TQueryParameters;

    public constructor(parameters?: TQueryParameters) {
        this._params = parameters;
    }

    public getParameters(): TQueryParameters {
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
    public async onPostProcess(connection: IDatabaseConnection, resultSet: Array<TQueryResultSet>): Promise<Array<TQueryPostProcessedResultSet>> {
        // By default, simply return the result set without any post processing.
        return Promise.resolve(<any>resultSet);
    }
}
