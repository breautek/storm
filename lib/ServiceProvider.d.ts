import { Application } from './Application';
import { ServiceHeaders } from './ServiceHeaders';
import { HTTPMethod } from './HTTPMethod';
import { ServiceResponse } from './ServiceResponse';
export declare abstract class ServiceProvider {
    private _app;
    constructor(app: Application);
    protected abstract _getBase(): string;
    protected abstract _getPort(): number;
    protected _getApp(): Application;
    protected _getDomain(): string;
    private _getSecret;
    urlSuffix(): string;
    protected _getProtocol(): string;
    getVersion(): string;
    protected _createURL(url: string, queryParams?: any): string;
    request(method: HTTPMethod, url: string, data: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
    get(url: string, data?: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
    post(url: string, data?: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
    put(url: string, data?: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
    delete(url: string, data?: any, headers?: ServiceHeaders, additionalOptions?: any): Promise<ServiceResponse>;
}
