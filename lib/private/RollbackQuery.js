"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = require("../Query");
class RollbackQuery extends Query_1.Query {
    getQuery() {
        return 'ROLLBACK';
    }
}
exports.RollbackQuery = RollbackQuery;
//# sourceMappingURL=RollbackQuery.js.map