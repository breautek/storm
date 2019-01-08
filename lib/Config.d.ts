export interface Config {
    binding_ip: string;
    port: number;
    authentication_header: string;
    backend_authentication_header: string;
    backend_authentication_secret: string;
    log_level: string;
}