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

import {StatusCode} from './StatusCode';
import {Application} from './Application';
import {LoggerMiddleware} from './LoggerMiddleware';
import {getInstance} from './instance';
import {Request} from './Request';
import {Response} from './Response';
import {Database} from './Database';
import {IHandler} from './IHandler';

export class Handler {
    private app: Application;
    private logRequests: boolean;
    private loggerMiddleware: LoggerMiddleware;

    constructor(app: Application, logRequest: boolean = true) {
        this.app = getInstance();

        this.logRequests = logRequest;
        this.loggerMiddleware = new LoggerMiddleware();
    }

    private log(request: Request, response: Response): Promise<void> {
        var promise: Promise<void>;

        if (this.logRequests) {
            promise = this.loggerMiddleware.execute(request, response);
        }
        else {
            promise = Promise.resolve();
        }

        return promise;
    }

    public getDB(): Database {
        return this.app.getDB();
    }

    public get(request: Request, response: Response): void {
        this.log(request, response).then((data) => {
            this._get(request, response);
        });
    }

    public put(request: Request, response: Response): void {
        this.log(request, response).then((data) => {
            this._put(request, response);
        });
    }

    public post(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._post(request, response);
        });
    }

    public delete(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._delete(request, response);
        });
    }

    public patch(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._patch(request, response);
        });
    }

    public copy(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._copy(request, response);
        });
    }

    public head(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._head(request, response);
        });
    }

    public options(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._options(request, response);
        });
    }

    public link(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._link(request, response);
        });
    }

    public unlink(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._unlink(request, response);
        });
    }

    public purge(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._purge(request, response);
        });
    }

    public lock(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._lock(request, response);
        });
    }

    public unlock(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._unlock(request, response);
        });
    }

    public view(request: Request, response: Response):void {
        this.log(request, response).then((data) => {
            this._view(request, response);
        });
    }

    protected _get(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _post(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _put(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _delete(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _patch(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _copy(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _head(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _options(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _link(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _unlink(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _purge(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _lock(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _unlock(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }

    protected _view(request: Request, response: Response): void {
        response.setStatus(StatusCode.INTERNAL_NOT_IMPLEMENTED).send();
    }
}

