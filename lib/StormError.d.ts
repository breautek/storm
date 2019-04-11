import { StatusCode } from './StatusCode';
export interface IAdditionalErrorDetails {
    [key: string]: any;
}
export interface IErrorResponse {
    message: string;
    code: number;
    details: IAdditionalErrorDetails;
}
export declare abstract class StormError extends Error {
    private details;
    constructor(details?: any);
    abstract getMessage(): string;
    abstract getCode(): number;
    getDetails(): any;
    getHTTPCode(): StatusCode;
    getAdditionalDetails(): IAdditionalErrorDetails;
    getErrorResponse(): IErrorResponse;
}
