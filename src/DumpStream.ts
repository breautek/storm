
import * as FileSystem from 'fs';
import {Writable} from 'stream';

export class DumpStream {

    private static _writable: Writable

    private constructor() {}

    public static getWritable(): Writable {
        if (!DumpStream._writable) {
            DumpStream._writable = FileSystem.createWriteStream('/dev/null');
        }
        return DumpStream._writable;
    }
}
