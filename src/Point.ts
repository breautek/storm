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

export class Point extends DatabaseCastObject {
    private $x: number;
    private $y: number;

    public constructor(x?: number, y?: number) {
        super();

        this.$x = x || 0;
        this.$y = y || 0;
    }

    protected _toSQLString(): string {
        return `POINT(${this.escape(this.$x)}, ${this.escape(this.$y)})`;
    }
}
