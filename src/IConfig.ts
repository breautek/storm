export interface IConfig {
    // Server exposability
    binding_ip: string;
    port: number;
    
    // Authentication
    authentication_header: string;
    backend_authentication_header: string;
    backend_authentication_secret: string;
    
    // Logging
    log_level: string;
    log_filters: Array<string>;

    // Database
    query_timeout: number;
}
