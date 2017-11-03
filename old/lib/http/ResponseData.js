'use strict';

class ResponseData {
	constructor(status, data) {
		this.$_status = status;
		this.$_data = data;
	}

	getStatus() {
		return this.$_status;
	}

	getData() {
		return this.$_data;
	}
};

module.exports = ResponseData;
