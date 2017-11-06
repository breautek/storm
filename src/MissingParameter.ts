
import {StormError} from './StormError';
import {ErrorCode} from './ErrorCode';
import {StatusCode} from './StatusCode';

export class MissingParameter extends StormError {
    public constructor(details: any) {
        super(details);
    }

    public getMessage(): string {
        return `Missing parameter (${this.getDetails().parameter}).`;
    }

    public getCode(): ErrorCode {
        return ErrorCode.MISSING_PARAMETER;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.ERR_BAD_REQUEST;
    }
}
