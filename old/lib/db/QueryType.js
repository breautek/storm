'use strict';

var Sequelize = require('sequelize');

module.exports = {
	SELECT 			: Sequelize.QueryTypes.SELECT,
	INSERT 			: Sequelize.QueryTypes.INSERT,
	UPDATE 			: Sequelize.QueryTypes.UPDATE,
	BULK_UPDATE 	: Sequelize.QueryTypes.BULKUPDATE,
	BULK_DELETE 	: Sequelize.QueryTypes.BULKDELETE,
	DELETE 			: Sequelize.QueryTypes.DELETE,
	UPSERT			: Sequelize.QueryTypes.UPSERT,
	VERSION			: Sequelize.QueryTypes.VERSION,
	SHOWTABLES		: Sequelize.QueryTypes.SHOWTABLES,
	SHOWINDEXES		: Sequelize.QueryTypes.SHOWINDEXES,
	DESCRIBE		: Sequelize.QueryTypes.DESCRIBE,
	RAW				: Sequelize.QueryTypes.RAW,
	FOREIGNKEYS		: Sequelize.QueryTypes.FOREIGNKEYS,
	SHOWCONSTRAINTS	: Sequelize.QueryTypes.SHOWCONSTRAINTS
};
