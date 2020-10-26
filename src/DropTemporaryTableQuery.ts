
import {Query} from './Query';
import {IQueryParameters} from './IQueryParameters';

export interface IDropTemporaryTableQueryInput extends IQueryParameters {
    tableName: string;
}

export class DropTemporaryTableQuery extends Query {

    public getParameters(): IDropTemporaryTableQueryInput {
        return <IDropTemporaryTableQueryInput>super.getParameters();
    }

    protected _getQuery(): string {
        return `
            DROP TEMPORARY TABLE :tableName
        `;
    }
}
