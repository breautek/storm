/// <reference types="express" />
/// <reference types="node" />
import * as express from 'express';
import { IncomingHttpHeaders } from 'http';
import * as FileSystem from 'fs';
import * as formidable from 'formidable';
export interface ParameterMap {
    [key: string]: string;
}
export declare class Request {
    private request;
    constructor(request: express.Request);
    getBody(): any;
    getFields(): formidable.Fields;
    getFiles(): formidable.Files;
    getHeaders(): IncomingHttpHeaders;
    getHeader(name: string): string;
    getQueryVariables(): any;
    getParams(): ParameterMap;
    getParam(name: string): string;
    getIP(): string;
    getHostname(): string;
    getMethod(): string;
    getURL(): string;
    isSecure(): boolean;
    pipe(destination: FileSystem.WriteStream): any;
    unpipe(source: FileSystem.WriteStream): void;
    getRequestSource(): express.Request;
}