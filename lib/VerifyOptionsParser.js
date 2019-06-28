'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class VerifyOptionsParser {
    constructor() {
        throw new Error('VerifyOptionsParser is an static class.');
    }
    static parse(options) {
        var opts = {};
        if (options.enableExpiration !== undefined) {
            opts.ignoreExpiration = !options.enableExpiration;
        }
        return opts;
    }
}
exports.VerifyOptionsParser = VerifyOptionsParser;
//# sourceMappingURL=VerifyOptionsParser.js.map