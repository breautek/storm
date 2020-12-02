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
