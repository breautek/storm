
import {
    Query
} from './Query';

export interface ISetSessionVariableQueryInput {
    name: string;
    value: any;
}

export class SetSessionVariableQuery extends Query<ISetSessionVariableQueryInput, void> {
    protected _getQuery(): string {
        let params: ISetSessionVariableQueryInput = this.getParameters();

        if (!/^([A-Za-z_])+([a-zA-Z0-9_])+$/g.test(params.name)) {
            throw new Error('Illegal Variable Name');
        }

        // Only allow alpha letters & underscores for variable names
        return `SET SESSION \`${params.name}\` = :value`;
    }

    public getParametersForQuery(): Record<any, any> {
        return {
            value: this.getParameters().value
        };
    }
}
