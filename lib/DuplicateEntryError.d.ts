import { StormError } from './StormError';
import { ErrorCode } from './ErrorCode';
import { StatusCode } from './StatusCode';
export interface DuplicateEntryErrorOptions {
    entity: string;
    name: string;
}
export declare class DuplicateEntryError extends StormError {
    constructor(details?: any);
    getMessage(): string;
    getCode(): ErrorCode;
    getHTTPCode(): StatusCode;
}
