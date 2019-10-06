import { StatusCode } from './StatusCode';
export declare class ResponseData {
    private status;
    private data;
    constructor(status: StatusCode, data?: any);
    getStatus(): StatusCode;
    getData(): any;
}
