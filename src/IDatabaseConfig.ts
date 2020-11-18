
export interface IDatabaseConfig<TName = string> {
    name: TName;
    host: string;
    port: number;
    schema: string;
    user: string;
    password: string;
}
