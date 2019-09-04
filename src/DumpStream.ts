
import * as FileSystem from 'fs';
import {Writable} from 'stream';

export class DumpStream {

    private constructor() {}

    public static getWritable(): Writable {
        return FileSystem.createWriteStream('/dev/null');
    }
}
