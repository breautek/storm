import { StormError } from './StormError';
import { ErrorCode } from './ErrorCode';
import { StatusCode } from './StatusCode';
export declare class EntityNotFoundError extends StormError {
    constructor(name: string);
    getMessage(): string;
    getCode(): ErrorCode;
    getHTTPCode(): StatusCode;
}
