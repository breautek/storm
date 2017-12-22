import { StatusCode } from './StatusCode';
export interface AdditionalErrorDetails {
    [key: string]: any;
}
export interface ErrorResponse {
    message: string;
    code: number;
    details: AdditionalErrorDetails;
}
export declare abstract class StormError extends Error {
    private details;
    constructor(details?: any);
    abstract getMessage(): string;
    abstract getCode(): number;
    getDetails(): any;
    getHTTPCode(): StatusCode;
    getAdditionalDetails(): AdditionalErrorDetails;
    getErrorResponse(): ErrorResponse;
}
