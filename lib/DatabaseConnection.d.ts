export declare abstract class DatabaseConnection {
    private api;
    private readOnly;
    constructor(api: any, isReadOnly: boolean);
    getAPI(): any;
    isReadOnly(): boolean;
    abstract startTransaction(): Promise<void>;
    abstract commit(): Promise<void>;
    abstract rollback(): Promise<void>;
    abstract close(): Promise<void>;
    abstract query(query: string, params?: any): Promise<any>;
}
