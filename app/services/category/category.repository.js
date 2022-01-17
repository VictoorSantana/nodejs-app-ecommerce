const Sequelize = require('sequelize');
const db = require('../../config/connection');

const model = db.define('categorys', {
	id: {
		type: Sequelize.INTEGER(),
		autoIncrement: true,
		primaryKey: true
	},
	id_category: {
		type: Sequelize.INTEGER(),
		allowNull: false,
	},
	name: {
		type: Sequelize.STRING(45),
		allowNull: false,
		defaultValue: 'Não disponível',
	},
}, { timestamps: true });

module.exports = model;