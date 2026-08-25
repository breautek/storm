
import { Handler } from './Handler';

export interface IHandlerAttachBridge {
    attach(path: string, handler: Handler): void;
}
