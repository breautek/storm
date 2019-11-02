"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = require("../Query");
class CommitQuery extends Query_1.Query {
    _getQuery() {
        return 'COMMIT';
    }
}
exports.CommitQuery = CommitQuery;
//# sourceMappingURL=CommitQuery.js.map