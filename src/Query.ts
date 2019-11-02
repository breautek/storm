import {IQueryParameters} from './IQueryParameters';

export abstract class Query {
    private _params: IQueryParameters;

    public constructor(parameters?: IQueryParameters) {
        this._params = parameters;
    }

    public getParameters(): IQueryParameters {
        return this._params;
    }

    protected abstract _getQuery(): string;

    public getQuery(): string {
        return this._getQuery();
    }
}
