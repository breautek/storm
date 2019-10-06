"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceResponse {
    constructor(data, response) {
        this._data = data;
        this._response = response;
    }
    getRaw() {
        return this._data;
    }
    getUTF8() {
        return this._data.toString('utf8');
    }
    getJSON() {
        return JSON.parse(this.getUTF8());
    }
}
exports.ServiceResponse = ServiceResponse;
//# sourceMappingURL=ServiceResponse.js.map