import * as express from 'express';
import { IncomingHttpHeaders } from 'http';

export class Request {
    private request: express.Request;

    public constructor(request: express.Request) {
        this.request = request;
    }

    public getBody(): any {
        return this.request.body;
    }

    public getHeaders(): IncomingHttpHeaders {
        return this.request.headers;
    }

    public getHeader(name: string): string | string[] {
        return this.request.headers[name];
    }

    public getQueryVariables(): any {
        return this.request.query;
    }

    public getParams(): any {
        return this.request.params;
    }

    public getParam(name: string): any {
        return this.request.params[name];
    }

    public getIP(): string {
        return this.request.ip;
    }

    public getHostname(): string {
        return this.request.hostname;
    }

    public getMethod(): string {
        return this.request.method;
    }

    public getURL(): string {
        return this.request.originalUrl;
    }

    public isSecure(): boolean {
        return this.request.secure;
    }

    public pipe(destination: any): any {
        return this.request.pipe(destination);
    }

    public unpipe(source: any): void {
        this.request.unpipe(source);
    }
}
