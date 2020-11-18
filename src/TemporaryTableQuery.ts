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

import { IDictionary } from '@totalpave/interfaces';
import {Query} from './Query';

export interface ITemporaryTableQueryInput {
    tableName: string;
    selectQuery: Query;
}

export class TemporaryTableQuery extends Query<any> {

    public getParametersForQuery(): IDictionary {
        let params: ITemporaryTableQueryInput = this.getParameters();

        return {
            ...params.selectQuery.getParameters(),
            tableName: params.tableName
        };
    }

    protected _getQuery(): string {
        let params: ITemporaryTableQueryInput = this.getParameters();

        return `
            CREATE TEMPORARY TABLE \`${params.tableName}\`
            ${params.selectQuery.getQuery()}
        `;
    }
}
