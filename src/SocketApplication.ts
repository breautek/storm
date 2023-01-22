
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

import { IAuthTokenData } from '@arashi/token';
import { Application } from './Application';
import { IConfig } from './IConfig';
import * as http from 'http';
import { WebSocket, WebSocketServer, RawData } from 'ws';

export abstract class SocketApplication<
    TConfig extends IConfig = IConfig,
    TAuthToken extends IAuthTokenData = IAuthTokenData,
    TDBConfig = any,
    TDBConnectionAPI = any
> extends Application<TConfig, TAuthToken, TDBConfig, TDBConnectionAPI> {
    private $socket: http.Server;
    private $server: WebSocketServer;
    private $pendingClients: Array<WebSocket>;
    private $authenticatedClients: Array<WebSocket>;
    // private $clientMap: Map<string, WebSocket>;

    public constructor(name: string, configPath?: string) {
        super(name, configPath);
        this.$pendingClients = [];
        this.$authenticatedClients = [];
        // this.$clientMap = new Map();
    }

    protected override async _initSocket(): Promise<void> {
        this.$socket = http.createServer();
        this.$server = new WebSocketServer({server: this.$socket });

        this.$server.on('connection', (clientSocket: WebSocket) => {
            this.$pendingClients.push(clientSocket);
            clientSocket.on('message', (data: RawData, isBinary: boolean) => {
                
            });
        });
    }

    protected override async _bindSocket(ip: string, port: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.$socket.listen(port, ip, () => {
                resolve();
            });
        });
    }
}
