
import {StormError} from './StormError';
import {ErrorCode} from './ErrorCode';
import {StatusCode} from './StatusCode';

export class InvalidCredentials extends StormError {
    public constructor(details: any) {
        super(details);
    }

    public getMessage(): string {
        return `Username or password is incorrect. Please check your username and password.`;
    }

    public getCode(): ErrorCode {
        return ErrorCode.INVALID_CREDENTIALS;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.ERR_UNAUTHORIZED;
    }
}
