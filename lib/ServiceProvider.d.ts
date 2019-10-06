import { Application } from './Application';
import { IServiceHeaders } from './IServiceHeaders';
import { HTTPMethod } from './HTTPMethod';
import { ServiceResponse } from './ServiceResponse';
export declare abstract class ServiceProvider {
    private _app;
    constructor(app: Application);
    protected abstract _getBase(): string;
    protected abstract _getPort(): number;
    protected _getApp(): Application;
    getApp(): Application;
    protected _getDomain(): string;
    private _getSecret;
    urlSuffix(): string;
    protected _getProtocol(): string;
    getVersion(): string;
    protected _createURL(url: string, queryParams?: any): string;
    request(method: HTTPMethod, url: string, accessToken: string, data: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
    private _sendRequest;
    get(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
    post(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
    put(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
    delete(url: string, accessToken: string, data?: any, headers?: IServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
}
