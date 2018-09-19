import {IncomingMessage} from 'http';

export class ServiceResponse {
    private _data: Buffer;
    private _response: IncomingMessage;

    public constructor(data: Buffer, response: IncomingMessage) {
        this._data = data;
        this._response = response;
    }

    public getRaw(): Buffer {
        return this._data;
    }

    public getUTF8(): string {
        return this._data.toString('utf8');
    }
}
