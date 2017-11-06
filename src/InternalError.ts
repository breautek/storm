
import {StormError} from './StormError';
import {ErrorCode} from './ErrorCode';
import {StatusCode} from './StatusCode';

export class InternalError extends StormError {
    public constructor(details: any) {
        super(details);
    }

    public getMessage(): string {
        return `An internal server error has occured. Please try again.`;
    }

    public getCode(): ErrorCode {
        return ErrorCode.INTERNAL;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }
}
