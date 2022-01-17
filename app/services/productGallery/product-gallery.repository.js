const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('product_gallerys', {
	id: {
		type: Sequelize.INTEGER(),
		autoIncrement: true,
		primaryKey: true
	},
	id_file: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	id_product: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	cover_image: {
		type: Sequelize.ENUM('1', '0'),
		allowNull: true,
	},
}, { timestamps: true });

module.exports = model;