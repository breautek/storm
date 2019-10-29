import { IQueryParameters } from './IQueryParameters';
export declare abstract class Query {
    private _params;
    constructor(parameters?: IQueryParameters);
    getParameters(): IQueryParameters;
    abstract getQuery(): string;
}
