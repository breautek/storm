"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseData {
    constructor(status, data) {
        this.status = status;
        this.data = data;
    }
    getStatus() {
        return this.status;
    }
    getData() {
        return this.data;
    }
}
exports.ResponseData = ResponseData;
//# sourceMappingURL=ResponseData.js.map