export declare abstract class DatabaseConnection {
    private api;
    private readOnly;
    private _timeout;
    constructor(api: any, isReadOnly: boolean);
    getAPI(): any;
    isReadOnly(): boolean;
    setTimeout(timeout: number): void;
    getTimeout(): number;
    abstract startTransaction(): Promise<void>;
    abstract commit(): Promise<void>;
    abstract rollback(): Promise<void>;
    abstract close(): Promise<void>;
    abstract query(query: string, params?: any): Promise<any>;
}
