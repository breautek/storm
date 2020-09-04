"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
class Query {
    constructor(parameters = {}) {
        this._params = parameters;
    }
    getParameters() {
        return this._params;
    }
    getQuery() {
        return this._getQuery();
    }
}
exports.Query = Query;
//# sourceMappingURL=Query.js.map