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

import {
    getApplicationLogger
} from './instance';

const LINGER_WARNING: number = 10000;

export abstract class DatabaseConnection {
    private api: any;
    private readOnly: boolean;
    private _timeout: number;
    private _lingerTimer: NodeJS.Timer;
    private _instantiationStack: string;

    public constructor(api: any, isReadOnly: boolean, instantiationStack: string) {
        this.api = api;
        this.readOnly = isReadOnly;
        this._instantiationStack = instantiationStack;

        // TODO: Fuel the default by configs, and probably should actually use a more sane value... like 60.
        this._timeout = 3600000;

        this._armLingerWarning();
    }

    private _triggerLingerWarning(): void {
        getApplicationLogger().warn(`Database connection has lingered for ${LINGER_WARNING}ms of inactivity.\n\n${this._instantiationStack}`);
    }

    public getInstantiationStack(): string {
        return this._instantiationStack;
    }

    private _armLingerWarning() {
        if (this._lingerTimer) {
            clearTimeout(this._lingerTimer);
        }

        this._lingerTimer = setTimeout(() => {
            this._triggerLingerWarning();
        }, LINGER_WARNING);
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

    public query(query: string, params?: any): Promise<any> {
        this._armLingerWarning();
        return this._query(query, params);
    }

    public close(): Promise<void> {
        clearTimeout(this._lingerTimer);
        return this._close();
    }

    public abstract startTransaction(): Promise<void>;
    public abstract isTransaction(): boolean;
    public abstract commit(): Promise<void>;
    public abstract rollback(): Promise<void>;
    protected abstract _close(): Promise<void>;
    protected abstract _query(query: string, params?: any): Promise<any>;
}
