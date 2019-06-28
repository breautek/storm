import { StatusCode } from './StatusCode';
import { ResponseData } from './ResponseData';
import { StormError, IErrorResponse } from './StormError';
import * as express from 'express';
export declare type SendableData = ResponseData | StormError | IErrorResponse | any;
export interface IHeaderKeyValuePair {
    [key: string]: string;
}
export declare class Response {
    private response;
    private created;
    private requestURL;
    constructor(response: express.Response, requestURL: string);
    setStatus(status: StatusCode): Response;
    getStatus(): StatusCode;
    redirect(url: string): void;
    send(data?: SendableData): void;
    pipe(stream: NodeJS.ReadableStream): void;
    success(data?: any): void;
    setHeader(key: string, value: string): void;
    setHeaders(keyValuePair: IHeaderKeyValuePair): void;
    isHeadersSent(): boolean;
    error(error?: any): void;
    badRequest(data?: any): void;
    unauthorized(data?: any): void;
    forbidden(data?: any): void;
    conflict(data?: any): void;
    notFound(data?: any): void;
    internalError(data?: any): void;
}
