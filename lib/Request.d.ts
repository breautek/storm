/// <reference types="node" />
import * as express from 'express';
import { IncomingHttpHeaders } from 'http';
import { Writable } from 'stream';
import { IFormData } from './IFormData';
export interface IParameterMap {
    [key: string]: string;
}
export declare class Request<TBody = any> {
    private request;
    constructor(request: express.Request);
    getBody(): TBody;
    getForm(): Promise<IFormData>;
    getHeaders(): IncomingHttpHeaders;
    getHeader(name: string): string;
    getQueryVariables(): any;
    getParams(): IParameterMap;
    getParam(name: string): string;
    getIP(): string;
    getForwardedIP(): string;
    getHostname(): string;
    getMethod(): string;
    getURL(): string;
    isSecure(): boolean;
    pipe(destination: Writable): any;
    unpipe(source: Writable): void;
    getRequestSource(): express.Request;
}
