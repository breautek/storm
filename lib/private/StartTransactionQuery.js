"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = require("../Query");
class StartTransactionQuery extends Query_1.Query {
    getQuery() {
        return 'START TRANSACTION';
    }
}
exports.StartTransactionQuery = StartTransactionQuery;
//# sourceMappingURL=StartTransactionQuery.js.map