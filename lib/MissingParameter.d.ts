import { StormError } from './StormError';
import { ErrorCode } from './ErrorCode';
import { StatusCode } from './StatusCode';
export declare class MissingParameter extends StormError {
    constructor(parameter: string);
    getMessage(): string;
    getCode(): ErrorCode;
    getHTTPCode(): StatusCode;
}
