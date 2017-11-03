
export abstract class DatabaseConnection<API> {
    private api: API;
    private readOnly: boolean;

    public constructor(api: API, isReadOnly: boolean) {
        this.api = api;
        this.readOnly = isReadOnly;
    }

    public getAPI(): API {
        return this.api;
    }

    public isReadOnly(): boolean {
        return this.readOnly;
    }

    public abstract async startTransaction(): Promise<void>;
    public abstract async commit(): Promise<void>;
    public abstract async rollback(): Promise<void>;
    public abstract async close(): Promise<void>;
    public abstract async query(): Promise<any>;
}
