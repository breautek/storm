
import * as FileSystem from 'fs';
import {Writable} from 'stream';

export class DumpStream {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public static getWritable(): Writable {
        return FileSystem.createWriteStream('/dev/null');
    }
}
