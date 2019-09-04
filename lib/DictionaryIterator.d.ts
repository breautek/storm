import { Iterator } from './Iterator';
export interface IDictionary {
    [key: string]: any;
}
export interface IDictionaryIteratorResult {
    key: string;
    value: any;
}
export declare class DictionaryIterator extends Iterator<string> {
    private dictionary;
    constructor(dictionary: IDictionary, startingIndex?: number);
    next(): any;
    previous(): any;
}
