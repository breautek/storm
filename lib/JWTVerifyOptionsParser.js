'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class JWTVerifyOptionsParser {
    constructor() {
        throw new Error('JWTVerifyOptionsParser is an static class.');
    }
    static parse(options) {
        let opts = {};
        if (options.enableExpiration !== undefined) {
            opts.ignoreExpiration = !options.enableExpiration;
        }
        return opts;
    }
}
exports.JWTVerifyOptionsParser = JWTVerifyOptionsParser;
//# sourceMappingURL=JWTVerifyOptionsParser.js.map