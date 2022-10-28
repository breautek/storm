/*
   Copyright 2017-2022 Norman Breau

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

import {DatabaseCastObject} from './DatabaseCastObject';
import {TCoordinate} from './TCoordinate';

export class LineString extends DatabaseCastObject {
    private $coords: Array<TCoordinate>;

    public constructor(coordinates?: Array<TCoordinate>) {
        super();

        this.$coords = coordinates || [];
    }

    protected _toSQLString(): string {
        let str: string = 'LINESTRING(';

        for (let i: number = 0; i < this.$coords.length; i++) {
            let coord: TCoordinate = this.$coords[i];

            if (str === 'LINESTRING(') {
                str += `${this.escape(coord[0])} ${this.escape(coord[1])}`;
            }
            else {
                str += `, ${this.escape(coord[0])} ${this.escape(coord[1])}`;
            }
        }

        str += ')';

        return str;
    }
}
