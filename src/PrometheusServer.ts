/*
   Copyright 2017-2026 Norman Breau

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
import * as http from 'node:http';
import { IConfig } from './IConfig';
import { IMetricData, MetricStore } from './MetricStore';

const TAG: string = 'PrometheusServer';
const RETRY_DELAY: number = 5000;

export class PrometheusServer {
    private $app: Application;
    private $socket: http.Server;
    private $bind: string;
    private $port: number;
    private $isClosing: boolean;
    private $retryTimer: NodeJS.Timeout;
    
    public constructor(app: Application) {
        this.$app = app;
        this.$socket = null;
        this.$isClosing = false;
        this.$retryTimer = null;

        let config: IConfig = app.getConfig();

        this.$bind = config.prometheus?.bind || '127.0.0.1';
        this.$port = config.prometheus?.port;

        if (!this.$port) {
            app.getLogger().warn(TAG, 'Using default port algorithm for Prometheus. Better to explicitly set a port via --prometheus-port.');
            this.$port = app.getDefaultPortForPrometheus();
        }
    }

    public start(): void {
        this.$app.getLogger().info(TAG, 'Initializing Prometheus');
        void this.$createSocket();
    }

    private $createSocket(): Promise<void> {
        if (this.$isClosing) {
            return Promise.resolve();
        }

        return new Promise<void>((resolve, reject) => {
            this.$socket = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
                let data: IMetricData = await MetricStore.getInstance().getMetrics();
                res.setHeader('Content-Type', data.type);
                res.end(data.content);
            });

            this.$socket.once('error', (err: Error) => {
                this.$socket = null;
                resolve();

                if (this.$isClosing) {
                    return;
                }

                this.$app.getLogger().error(TAG, 'Prometheus Socket Error');
                this.$app.getLogger().error(TAG, err);

                this.$retryTimer = setTimeout(() => {
                    void this.$createSocket();
                }, RETRY_DELAY);
            });

            this.$socket.listen(this.$port, this.$bind, null, () => {
                this.$app.getLogger().info(TAG, `Prometheus Server bounded`);
                resolve();
            });
        });
    }

    public async close(): Promise<void> {
        this.$isClosing = true;
        clearTimeout(this.$retryTimer);
        return new Promise<void>((resolve, reject) => {
            if (!this.$socket) {
                resolve();
                return;
            }

            this.$socket.close((err?: Error) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve();
            });
        });
    }
}
