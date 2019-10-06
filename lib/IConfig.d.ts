export interface IConfig {
    binding_ip: string;
    port: number;
    authentication_header: string;
    backend_authentication_header: string;
    backend_authentication_secret: string;
    log_level: string;
    log_filters: Array<string>;
    query_timeout: number;
    request_size_limit: number;
}
