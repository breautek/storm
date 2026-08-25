
// eslint-disable-next-line @typescript-eslint/no-require-imports
import Express = require('express');
import {Application} from './Application';
import { Handler } from './Handler';
import { IHandlerAttachBridge } from './IHandlerAttachBridge';
import {Request} from './Request';
import {Response} from './Response';
import * as BodyParser from 'body-parser';

export class RawHandlerAttacher implements IHandlerAttachBridge {
    private $server: Express.Application;
    private $app: Application;
    private $parser: ReturnType<typeof BodyParser.raw>;

    public constructor(app: Application, server: Express.Application) {
        this.$server = server;
        this.$app = app;

        this.$parser = BodyParser.raw({
            type: '*/*',
            limit: app.getRequestSizeLimit()
        });
    }

    public attach(path: string, handler: Handler): void {
        this.$server.get(path, this.$parser, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            void handler.get(r, new Response(this.$app, response, r.getURL()));
        });
        this.$server.post(path, this.$parser, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            void handler.post(r, new Response(this.$app, response, r.getURL()));
        });
        this.$server.put(path, this.$parser, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            void handler.put(r, new Response(this.$app, response, r.getURL()));
        });
        this.$server.delete(path, this.$parser, (request: Express.Request, response: Express.Response) => {
            let r: Request = new Request(request);
            void handler.delete(r, new Response(this.$app, response, r.getURL()));
        });
    }
}
