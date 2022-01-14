
import {
    Query
} from './Query';
import { IDictionary } from '@totalpave/interfaces';

export interface ISetSessionVariableQueryInput {
    name: string;
    value: any;
}

export class SetSessionVariableQuery extends Query<ISetSessionVariableQueryInput, void> {
    protected _getQuery(): string {
        let params: ISetSessionVariableQueryInput = this.getParameters();

        if (!/[a-zA-Z_]/ig.test(params.name)) {
            throw new Error('Illegal Variable Name');
        }

        // Only allow alpha letters & underscores for variable names
        return `SET SESSION ${params.name} = :value`;
    }

    public getParametersForQuery(): IDictionary {
        return {
            value: this.getParameters().value
        };
    }
}
