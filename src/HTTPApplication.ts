/*
   Copyright 2017-2023 Norman Breau

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

import { Application } from './Application';
import * as Express from 'express';
import * as BodyParser from 'body-parser';
import {Handler} from './Handler';
import {IHandler} from './IHandler';
import {Request} from './Request';
import {Response} from './Response';
import * as http from 'http';
import { IConfig } from './IConfig';
import { IAuthTokenData } from '@arashi/token';

const TAG: string = 'HTTPApplication';

export abstract class HTTPApplication<
    TConfig extends IConfig = IConfig,
    TAuthToken extends IAuthTokenData = IAuthTokenData,
    TDBConfig = any,
    TDBConnectionAPI = any
> extends Application<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI> {
    private $server: Express.Application;
    private $socket: http.Server;

    protected override async _initSocket(): Promise<void> {
        this.$server = Express();
        this.$server.use(BodyParser.json({
            type : 'application/json',
            limit : this.getRequestSizeLimit()
        }));
        this.$server.use(BodyParser.text({
            type : 'text/*',
            limit : this.getRequestSizeLimit()
        }));

        this.getLogger().trace(TAG, 'Attaching handlers...');
        await this._attachHandlers();
    }

    protected abstract _attachHandlers(): Promise<void>;

    /**
     * 
     * @param path The URL API path. E.g. /api/myService/myCommand/
     * @param HandlerClass The concrete class (not the instance) of Handler to be used for this API.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public attachHandler(path: string, HandlerClass: IHandler): void {
        let handler: Handler = new HandlerClass(this);
        this.attachHandlerInstance(path, handler);
    }

    public attachHandlerInstance(path: string, handler: Handler): void {
        this.$server.get(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.get(r, new Response(response, r.getURL()));
        });
        this.$server.post(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.post(r, new Response(response, r.getURL()));
        });
        this.$server.put(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.put(r, new Response(response, r.getURL()));
        });
        this.$server.delete(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            handler.delete(r, new Response(response, r.getURL()));
        });
    }

    protected override _closeSocket(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (this.$socket && this.$socket.listening) {
                this.$socket.close(() => {
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }

    protected override _getPort(): number {
        let port: number = null;
        if (this.$socket && this.$socket.listening) {
            let address = this.$socket.address();
            if (typeof address !== 'string') {
                port = address.port;
            }
        }
        return port;
    }

    protected override _bindSocket(ip: string, port: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.$socket = http.createServer(this.$server);
            this.$socket.listen(port, ip, () => {
                resolve();
            });
        });
    }
}
