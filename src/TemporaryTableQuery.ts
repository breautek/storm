
import {Query} from './Query';
import {IQueryParameters} from './IQueryParameters';

export interface ITemporaryTableQueryInput extends IQueryParameters {
    tableName: string;
    selectQuery: Query;
}

interface ITemporaryTableQueryParametersInternal {
    [key: string]: any;
}

export class TemporaryTableQuery extends Query {

    public getParameters(): ITemporaryTableQueryParametersInternal {
        let params: ITemporaryTableQueryInput = <ITemporaryTableQueryInput>super.getParameters();

        return {
            ...params.selectQuery.getParameters(),
            tableName: params.tableName
        };
    }

    protected _getQuery(): string {
        let params: ITemporaryTableQueryInput = <ITemporaryTableQueryInput>super.getParameters();

        return `
            CREATE TEMPORARY TABLE :tableName
            ${params.selectQuery.getQuery()}
        `;
    }
}
