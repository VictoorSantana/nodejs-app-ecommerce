const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('purchase_historys', {
	id: {
		type: Sequelize.INTEGER(),
		autoIncrement: true,
		primaryKey: true
	},
	id_product: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	id_user: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	status: {
		type: Sequelize.ENUM('5', '4', '3', '2', '1', '0'),
		allowNull: true,
		defaultValue: '2',
	},
}, { timestamps: true });

module.exports = model;