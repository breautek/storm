/// <reference types="express" />
/// <reference types="node" />
import * as express from 'express';
import { IncomingHttpHeaders } from 'http';
import * as FileSystem from 'fs';
export declare class Request {
    private request;
    constructor(request: express.Request);
    getBody(): any;
    getHeaders(): IncomingHttpHeaders;
    getHeader(name: string): string;
    getQueryVariables(): any;
    getParams(): any;
    getParam(name: string): any;
    getIP(): string;
    getHostname(): string;
    getMethod(): string;
    getURL(): string;
    isSecure(): boolean;
    pipe(destination: FileSystem.WriteStream): any;
    unpipe(source: FileSystem.WriteStream): void;
    getRequestSource(): express.Request;
}
