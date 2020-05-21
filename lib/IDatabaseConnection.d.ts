/// <reference types="node" />
import { Readable } from 'stream';
import { Query } from './Query';
export interface IDatabaseConnection {
    setInstantiationStack(stack: string): void;
    getInstantiationStack(): string;
    getAPI(): any;
    isReadOnly(): boolean;
    setTimeout(timeout: number): void;
    getTimeout(): number;
    query(query: string | Query, params?: any): Promise<any>;
    stream(query: string | Query, params?: any, streamOptions?: any): Readable;
    close(forceClose?: boolean): Promise<void>;
    startTransaction(): Promise<void>;
    isTransaction(): boolean;
    commit(): Promise<void>;
    rollback(): Promise<void>;
}
