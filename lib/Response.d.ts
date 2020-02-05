/// <reference types="node" />
import { StatusCode } from './StatusCode';
import { ResponseData } from './ResponseData';
import { StormError, IErrorResponse } from './StormError';
import * as express from 'express';
export declare type SendableData = ResponseData | Error | IErrorResponse | any;
export interface IHeaderKeyValuePair {
    [key: string]: string;
}
export declare class Response<TResponse = SendableData, TErrorResponse = Error | IErrorResponse | string> {
    private response;
    private created;
    private requestURL;
    constructor(response: express.Response, requestURL: string);
    setStatus(status: StatusCode): Response<TResponse, TErrorResponse>;
    getStatus(): StatusCode;
    redirect(url: string): void;
    send(data?: TResponse | TErrorResponse | StormError | IErrorResponse): void;
    pipe(stream: NodeJS.ReadableStream): void;
    success(data?: TResponse): void;
    setHeader(key: string, value: string): void;
    setHeaders(keyValuePair: IHeaderKeyValuePair): void;
    isHeadersSent(): boolean;
    error(error?: TErrorResponse | ResponseData<TErrorResponse>): void;
    badRequest(data?: TErrorResponse | StormError): void;
    unauthorized(data?: TErrorResponse | StormError): void;
    forbidden(data?: TErrorResponse | StormError): void;
    conflict(data?: TErrorResponse | StormError): void;
    notFound(data?: TErrorResponse | StormError): void;
    internalError(data?: TErrorResponse | StormError): void;
}
