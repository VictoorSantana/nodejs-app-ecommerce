const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('product_reviews', {
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
	stars: {
		type: Sequelize.INTEGER(),
		allowNull: true,
		defaultValue: '1',
	},
	comment: {
		type: Sequelize.STRING(450),
		allowNull: false,
	},
}, { timestamps: true });

module.exports = model;