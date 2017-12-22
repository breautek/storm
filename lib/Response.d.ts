/// <reference types="express" />
import { StatusCode } from './StatusCode';
import { ResponseData } from './ResponseData';
import { StormError, ErrorResponse } from './StormError';
import * as express from 'express';
export declare type SendableData = ResponseData | StormError | ErrorResponse | any;
export interface HeaderKeyValuePair {
    [key: string]: string;
}
export declare class Response {
    private response;
    constructor(response: express.Response);
    setStatus(status: StatusCode): Response;
    send(data?: SendableData): void;
    success(data?: any): void;
    setHeader(key: string, value: string): void;
    setHeaders(keyValuePair: HeaderKeyValuePair): void;
    isHeadersSent(): boolean;
    error(data?: any): void;
    unauthorized(data?: any): void;
    forbidden(data?: any): void;
    conflict(data?: any): void;
    notFound(data?: any): void;
    internalError(data?: any): void;
}
