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

export abstract class DatabaseConnection {
    private api: any;
    private readOnly: boolean;
    private _timeout: number;

    public constructor(api: any, isReadOnly: boolean) {
        this.api = api;
        this.readOnly = isReadOnly;

        //TODO: Fuel the default by configs, and probably should actually use a more sane value... like 60.
        this._timeout = 3600000;
    }

    public getAPI(): any {
        return this.api;
    }

    public isReadOnly(): boolean {
        return this.readOnly;
    }

    public setTimeout(timeout: number): void {
        if (isNaN(timeout)) {
            throw new TypeError('setTimeout expects a number in parameter 1.');
        }

        this._timeout = timeout;
    }

    public getTimeout(): number {
        return this._timeout;
    }

    public abstract startTransaction(): Promise<void>;
    public abstract commit(): Promise<void>;
    public abstract rollback(): Promise<void>;
    public abstract close(): Promise<void>;
    public abstract query(query: string, params?: any): Promise<any>;
}
