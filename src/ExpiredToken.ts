
import {StormError} from './StormError';
import {ErrorCode} from './ErrorCode';
import {StatusCode} from './StatusCode';

export class ExpiredToken extends StormError {
    public constructor(details: any) {
        super(details);
    }

    public getMessage(): string {
        return `Your login session has expired.`;
    }

    public getCode(): ErrorCode {
        return ErrorCode.EXPIRED_TOKEN;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.ERR_UNAUTHORIZED;
    }
}
