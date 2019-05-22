import { StormError } from './StormError';
import { StatusCode } from './StatusCode';
export declare class DatabaseQueryError extends StormError {
    constructor(query: string, error: any);
    getMessage(): string;
    getCode(): number;
    getHTTPCode(): StatusCode;
}
