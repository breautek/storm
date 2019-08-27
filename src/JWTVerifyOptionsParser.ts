'use strict';

import {IJWTVerifyOptions} from './IJWTVerifyOptions';

export class JWTVerifyOptionsParser {
    constructor() {
        throw new Error('JWTVerifyOptionsParser is an static class.');
    }

    // Parses IJWTVerifyOptions to jwt options
    public static parse(options: IJWTVerifyOptions): any {
        let opts: any = {};

        if (options.enableExpiration !== undefined) {
            opts.ignoreExpiration = !options.enableExpiration;
        }

        return opts;
    }
}
