
import {StormError} from './StormError';
import {StatusCode} from './StatusCode';

export class DatabaseQueryError extends StormError {
    public constructor(query: string, error: any) {
        super({
            query: query,
            error: error
        });
    }

    public getMessage(): string {
        return 'Internal Server Error';
    }

    public getCode(): number {
        return 0;
    }

    public getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }
}
