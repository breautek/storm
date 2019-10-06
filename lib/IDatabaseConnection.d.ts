/// <reference types="node" />
import { Readable } from 'stream';
export interface IDatabaseConnection {
    getInstantiationStack(): string;
    getAPI(): any;
    isReadOnly(): boolean;
    setTimeout(timeout: number): void;
    getTimeout(): number;
    query(query: string, params?: any): Promise<any>;
    stream(query: string, params?: any, streamOptions?: any): Readable;
    close(forceClose?: boolean): Promise<void>;
    startTransaction(): Promise<void>;
    isTransaction(): boolean;
    commit(): Promise<void>;
    rollback(): Promise<void>;
}
