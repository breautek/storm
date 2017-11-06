
import {getInstance} from './instance';
import {Application} from './Application';
import {ErrorCode} from './ErrorCode';
import {StatusCode} from './StatusCode';

export interface ErrorResponse {
    message: string;
    code: number;
}

export abstract class StormError extends Error {
    private details: any;

    public constructor(details: any = null) {
        super();

        this.details = details;

        var instance: Application = getInstance();
        instance.getLogger().error(`${this.getMessage()}.. See details below:`);
        instance.getLogger().error(this.getDetails());
    }

    abstract getMessage(): string;
    abstract getCode(): number;

    getDetails(): any {
        return this.details;
    }

    getHTTPCode(): StatusCode {
        return StatusCode.INTERNAL_ERROR;
    }

    public getErrorResponse(): ErrorResponse {
        return {
            message : this.getMessage(),
            code : this.getCode()
        };
    }
}
