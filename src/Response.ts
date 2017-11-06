
import {StatusCode} from './StatusCode';
import {ResponseData} from './ResponseData';
import {StormError, ErrorResponse} from './StormError';
import * as express from 'express';

export type SendableData = ResponseData | StormError | ErrorResponse | any;

export interface HeaderKeyValuePair {
    [key: string]: string;
}

export class Response {
    private response: express.Response;

    public constructor(response: express.Response) {
        this.response = response;
    }

    public setStatus(status: StatusCode): Response {
        this.response.status(status);
        return this;
    }

    public send(data?: SendableData): void {
        if (data instanceof ResponseData) {
            this.setStatus(data.getStatus()).send(data.getData());
        }
        else if (data instanceof StormError) {
            this.setStatus(data.getHTTPCode()).send(data.getErrorResponse());
        }
        else {
            this.response.send(data);
        }
    }

    public success(data: any): void {
        if (data === undefined) {
            this.setStatus(StatusCode.OK_NO_CONTENT);
        }
        else {
            this.setStatus(StatusCode.OK);
        }

        this.send(data);
    }

    public setHeader(key: string, value: string): void {
        this.response.set(key, value);
    }

    public setHeaders(keyValuePair: HeaderKeyValuePair): void {
        this.response.set(keyValuePair)
    }

    public isHeadersSent(): boolean {
        return this.response.headersSent;
    }

    public error(data: any): void {
        this.setStatus(StatusCode.ERR_BAD_REQUEST).send(data);
    }

    public unauthorized(data: any): void {
        this.setStatus(StatusCode.ERR_UNAUTHORIZED).send(data);
    }

    public forbidden(data: any): void {
        this.setStatus(StatusCode.ERR_FORBIDDEN).send(data);
    }

    public conflict(data: any): void {
        this.setStatus(StatusCode.ERR_CONFLICT).send(data);
    }

    public notFound(data: any): void {
        this.setStatus(StatusCode.ERR_NOT_FOUND).send(data);
    }

    public internalError(data: any): void {
        this.setStatus(StatusCode.INTERNAL_ERROR).send(data);
    }
}
