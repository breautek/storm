import { StormError } from './StormError';
import { ErrorCode } from './ErrorCode';
import { StatusCode } from './StatusCode';
export declare class InvalidValueError extends StormError {
    constructor(variable: string, expected: any, got: any);
    getMessage(): string;
    getCode(): ErrorCode;
    getHTTPCode(): StatusCode;
}
