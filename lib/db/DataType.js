'use strict';

var Sequelize = require('sequelize');

// http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes

module.exports = {
	LEN_TINY	: 'tiny',
	LEN_MEDIUM	: 'medium',
	LEN_LONG	: 'long',
	STRING 		: Sequelize.STRING,				// A variable length string
	CHAR 		: Sequelize.CHAR,				// A fixed length string
	TEXT 		: Sequelize.TEXT, 				// Unlimited length string
	INTEGER		: Sequelize.INTEGER,			// A 32 bit integer
	BIGINT		: Sequelize.BIGINT,				// A 64 bit integer
	TINYINT 	: Sequelize.BOOLEAN, 			// A 8  bit integer
	FLOAT		: Sequelize.FLOAT,				// A floating point number (4-byte precision)
	DOUBLE		: Sequelize.DOUBLE,				// A floating point number (8-byte precision)
	DECIMAL		: Sequelize.DECIMAL,			// A decimal number
	REAL		: Sequelize.REAL,				// A floating point number
	BOOLEAN		: Sequelize.BOOLEAN,			// Boolean / TinyInt
	BLOB 		: Sequelize.BLOB, 				// Binary storage	
	ENUM		: Sequelize.ENUM,				// Enumeration
	DATETIME 	: Sequelize.DATE,				// Datetime
	DATE 		: Sequelize.DATEONLY,			// Date
	TIME 		: Sequelize.TIME,				// Time
	NOW			: Sequelize.NOW,				// Current timestamp
	UUID		: Sequelize.UUID,				// Column for storing unique identifiers
	UUIDV1		: Sequelize.UUIDV1,
	UUIDV4		: Sequelize.UUIDV4,
	GEOMETRY	: Sequelize.GEOMETRY,
	GEOGRAPHY	: Sequelize.GEOGRAPHY,
	VIRTUAL		: Sequelize.VIRTUAL
};
