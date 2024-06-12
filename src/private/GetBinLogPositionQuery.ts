/*
   Copyright 2017-2024 Norman Breau

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import {Query} from '../Query';
import {IDatabasePosition} from '../IDatabasePosition';
import { IDatabaseConnection } from '../IDatabaseConnection';

/**
 * @since 8.1.0
 */
export abstract class GetBinLogPositionQuery<TStatusRow = unknown> extends Query<void, TStatusRow[], IDatabasePosition> {
    protected abstract _getQuery(): string;

    protected abstract _getFile(row: TStatusRow): string;
    protected abstract _getPosition(row: TStatusRow): string;
    
    public async onPostProcess(connection: IDatabaseConnection, resultSet: TStatusRow[]): Promise<IDatabasePosition> {
        let row: TStatusRow = null;
        if (resultSet.length > 0) {
            row = resultSet[0];
        }

        if (!row) {
            return null;
        }

        let pageParts: string[] = this._getFile(row).split('.');
        let strPage: string = pageParts[pageParts.length - 1];

        let page: number = parseInt(strPage);

        if (isNaN(page)) {
            return null;
        }

        let position: number = parseInt(this._getPosition(row));
        if (isNaN(position)) {
            return null;
        }

        return {
            page: page,
            position: position
        };
    }
}
