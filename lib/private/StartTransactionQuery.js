"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartTransactionQuery = void 0;
const Query_1 = require("../Query");
class StartTransactionQuery extends Query_1.Query {
    _getQuery() {
        return 'START TRANSACTION';
    }
}
exports.StartTransactionQuery = StartTransactionQuery;
//# sourceMappingURL=StartTransactionQuery.js.map