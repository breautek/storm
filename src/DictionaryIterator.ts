import {Iterator} from './Iterator';

export interface IDictionary {
    [key: string]: any;
}

export interface IDictionaryIteratorResult {
    key: string;
    value: any;
}

export class DictionaryIterator extends Iterator<string> {
    private dictionary: IDictionary;

    public constructor(dictionary: IDictionary, startingIndex?: number) {
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
