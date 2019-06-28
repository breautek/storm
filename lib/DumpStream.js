"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileSystem = require("fs");
class DumpStream {
    constructor() { }
    static getWritable() {
        return FileSystem.createWriteStream('/dev/null');
    }
}
exports.DumpStream = DumpStream;
//# sourceMappingURL=DumpStream.js.map