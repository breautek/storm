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
import {getInstance} from './instance';
import {Request} from './Request';
import {Response} from './Response';
import {Database} from './Database';
import {Middleware} from './Middleware';
import {IRequestResponse} from './IRequestResponse';
import {StormError} from './StormError';
import {IConfig} from './IConfig';

export class Handler {
    private _app: Application;
    private _middlewares: Array<Middleware>;

    constructor(app: Application) {
        this._app = app;
        this._middlewares = this.initMiddlewares();
        if (this._middlewares.length > 0) {
            console.log(new Error('Handler middlewares is deprecated and will be removed in the future.').stack);
        }
    }

    protected initMiddlewares(): Array<Middleware> {
        return [];
    }

    public getAccessToken(request: Request): string {
        var config: IConfig = getInstance().getConfig();
        var authHeader: string = config.authentication_header;
        return request.getHeader(authHeader);
    }

    public getDB(): Database {
        return this._app.getDB();
    }

    private _getNextMiddleware(index: number): Middleware {
        return this._middlewares[index];
    }

    private _executeMiddlewares(request: Request, response: Response, index: number = 0): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            var promises: Array<Promise<IRequestResponse>> = [];

            var firedDeprecation: boolean = false;

            for (var i = 0; i < this._middlewares.length; i++) {
                if (!firedDeprecation) {
                    console.log(new Error('Handler._executeMiddlewares is deprecated. Will be removed in the future.').stack);
                    firedDeprecation = true;
                }
                var middleware: Middleware = this._middlewares[i];
                promises.push(middleware.execute(request, response));
            }

            Promise.all(promises).then(() => {
                resolve();
            }).catch(reject);
        });
    }

    protected _onMiddlewareReject(request: Request, response: Response, error: StormError) {
        response.error(error);
    }

    public get(request: Request, response: Response): void {
        this._executeMiddlewares(request, response).then(() => {
            this._get(request, response);
        }).catch((error: StormError) => {
            this._onMiddlewareReject(request, response, error);
        });
    }

    public put(request: Request, response: Response): void {
        this._executeMiddlewares(request, response).then(() => {
            this._put(request, response);
        }).catch((error: StormError) => {
            this._onMiddlewareReject(request, response, error);
        });
    }

    public post(request: Request, response: Response): void {
        this._executeMiddlewares(request, response).then(() => {
            this._post(request, response);
        }).catch((error: StormError) => {
            this._onMiddlewareReject(request, response, error);
        });
    }

    public delete(request: Request, response: Response): void {
        this._executeMiddlewares(request, response).then(() => {
            this._delete(request, response);
        }).catch((error: StormError) => {
            this._onMiddlewareReject(request, response, error);
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
}
