
import { StatusCode } from './StatusCode';
import { StormError } from './StormError';

/**
 * @since 9.1.0
 * 
 * An error that describes an illegal state
 */
export class IllegalStateError extends StormError<string> {
    public constructor(message: string) {
        super(message);
    }

    public override getMessage(): string {
        return this.getPrivateDetails();
    }

    public override getHTTPCode(): StatusCode {
        return StatusCode.ERR_BAD_REQUEST;
    }

    public override getCode(): number {
        return 0;
    }

    public override getLocaleCode(): string {
        return '@breautek/storm/IllegalStateError/message';
    }

    public override getLocaleParameters(): Record<string, string> {
        return {
            message: this.getMessage()
        };
    }
}
