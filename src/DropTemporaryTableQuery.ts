
import {Query} from './Query';

export interface IDropTemporaryTableQueryInput {
    tableName: string;
}

export class DropTemporaryTableQuery extends Query<IDropTemporaryTableQueryInput> {

    public getParameters(): IDropTemporaryTableQueryInput {
        return <IDropTemporaryTableQueryInput>super.getParameters();
    }

    protected _getQuery(): string {
        return `
            DROP TEMPORARY TABLE \`${this.getParameters().tableName}\`
        `;
    }
}
