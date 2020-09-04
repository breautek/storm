"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DumpStream = void 0;
const FileSystem = require("fs");
class DumpStream {
    constructor() { }
    static getWritable() {
        return FileSystem.createWriteStream('/dev/null');
    }
}
exports.DumpStream = DumpStream;
//# sourceMappingURL=DumpStream.js.map