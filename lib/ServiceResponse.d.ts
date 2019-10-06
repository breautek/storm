/// <reference types="node" />
import { IncomingMessage } from 'http';
export declare class ServiceResponse {
    private _data;
    private _response;
    constructor(data: Buffer, response: IncomingMessage);
    getRaw(): Buffer;
    getUTF8(): string;
    getJSON(): any;
}
