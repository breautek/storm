'use strict';

import {IVerifyOptions} from './IVerifyOptions';

export class VerifyOptionsParser {
	constructor() {
		throw new Error("VerifyOptionsParser is an static class.");
	}

	// Parses IVerifyOptions to jwt options
	public static parse(options: IVerifyOptions) : any {
		var opts: any = {};

		if(options.enableExpiration !== undefined) {
			opts.ignoreExpiration = !options.enableExpiration;
		}

		return opts;
	}
}
