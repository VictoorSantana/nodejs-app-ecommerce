const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('products', {
	id: {
		type: Sequelize.INTEGER(),
		autoIncrement: true,
		primaryKey: true
	},
	id_category: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	stock_quantity: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	name: {
		type: Sequelize.STRING(100),
		allowNull: false,
	},
	description: {
		type: Sequelize.STRING(1300),
		allowNull: true,
	},
	information: {
		type: Sequelize.STRING(2000),
		allowNull: true,
	},
	price: {
		type: Sequelize.DECIMAL(),
		allowNull: true,
	},
	discount: {
		type: Sequelize.DECIMAL(),
		allowNull: true,
	},
	end_discount: {
		type: Sequelize.DATE(),
		allowNull: true,
		defaultValue: Sequelize.NOW,
	},
	status: {
		type: Sequelize.ENUM('2', '1', '0'),
		allowNull: true,
		defaultValue: '2',
	},
}, { timestamps: true });

module.exports = model;