/// <reference types="node" />
import * as express from 'express';
import { IncomingHttpHeaders } from 'http';
import * as FileSystem from 'fs';
import { IFormData } from './IFormData';
export interface IParameterMap {
    [key: string]: string;
}
export declare class Request {
    private request;
    constructor(request: express.Request);
    getBody(): any;
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
    pipe(destination: FileSystem.WriteStream): any;
    unpipe(source: FileSystem.WriteStream): void;
    getRequestSource(): express.Request;
}
