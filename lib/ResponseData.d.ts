import { StatusCode } from './StatusCode';
export declare class ResponseData<TData = any> {
    private status;
    private data;
    constructor(status: StatusCode, data?: TData);
    getStatus(): StatusCode;
    getData(): TData;
}
