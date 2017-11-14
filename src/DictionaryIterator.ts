import {Iterator} from './Iterator';

export interface Dictionary {
    [key: string]: any;
}

export interface DictionaryIteratorResult {
    key: string;
    value : any;
}

export class DictionaryIterator extends Iterator<string> {
    private dictionary: Dictionary;

    public constructor(dictionary: Dictionary, startingIndex?: number) {
        super(Object.keys(dictionary));
        this.dictionary = dictionary;
    }

    public next(): any {
        var key: any = super.next();
        return {
            key : key,
            value : this.dictionary[key]
        };
    }

    public previous(): any {
        var key: any = super.previous();
        return {
            key : key,
            value : this.dictionary[key]
        };
    }
}
