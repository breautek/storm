import { Iterator } from './Iterator';
export interface Dictionary {
    [key: string]: any;
}
export interface DictionaryIteratorResult {
    key: string;
    value: any;
}
export declare class DictionaryIterator extends Iterator<string> {
    private dictionary;
    constructor(dictionary: Dictionary, startingIndex?: number);
    next(): any;
    previous(): any;
}
