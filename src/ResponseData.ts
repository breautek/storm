
import {StatusCode} from './StatusCode';

export class ResponseData {
    private status: StatusCode;
    private data: any;

    public constructor(status: StatusCode, data?: any) {
        this.status = status;
        this.data = data;
    }

    public getStatus(): StatusCode {
        return this.status;
    }

    public getData(): any {
        return this.data;
    }
}
