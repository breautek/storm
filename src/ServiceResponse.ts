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

import {IncomingMessage} from 'http';

export class ServiceResponse {
    private _data: Buffer;
    private _response: IncomingMessage;

    public constructor(data: Buffer, response: IncomingMessage) {
        this._data = data;
        this._response = response;
    }

    public getRaw(): Buffer {
        return this._data;
    }

    public getUTF8(): string {
        return this._data.toString('utf8');
    }

    public getJSON(): any {
        return JSON.parse(this.getUTF8());
    }
}
