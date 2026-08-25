
// eslint-disable-next-line @typescript-eslint/no-require-imports
import Express = require('express');
import {Application} from './Application';
import { Handler } from './Handler';
import { IHandlerAttachBridge } from './IHandlerAttachBridge';
import {Request} from './Request';
import {Response} from './Response';

export class HandlerAttacher implements IHandlerAttachBridge {
    private $server: Express.Application;
    private $app: Application;

    public constructor(app: Application, server: Express.Application) {
        this.$server = server;
        this.$app = app;
    }

    public attach(path: string, handler: Handler): void {
        this.$server.get(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            void handler.get(r, new Response(this.$app, response, r.getURL()));
        });
        this.$server.post(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            void handler.post(r, new Response(this.$app, response, r.getURL()));
        });
        this.$server.put(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            void handler.put(r, new Response(this.$app, response, r.getURL()));
        });
        this.$server.delete(path, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            void handler.delete(r, new Response(this.$app, response, r.getURL()));
        });
    }
}
