import {IQueryParameters} from './IQueryParameters';

export abstract class Query {
    private _params: IQueryParameters;

    public constructor(parameters?: IQueryParameters) {
        this._params = parameters;
    }

    public getParameters(): IQueryParameters {
        return this._params;
    }

    public abstract getQuery(): string;
}
