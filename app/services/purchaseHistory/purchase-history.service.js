
const purchaseHistoryRepository = require('./purchase-history.repository');
const { onlyNumbers, resume } = require('../../config/filter');

module.exports = {
	find: async function (query) {
		let exclude = [];
		let include = [];

		const { paginate, where } = resume(query, [
			{ key: 'id_product', colunm: 'id_product', op: '=' },
			{ key: 'id_user', colunm: 'id_user', op: '=' },
			{ key: 'status', colunm: 'status', op: '=' },
		]);

		return await purchaseHistoryRepository
			.findAndCountAll({
				...paginate,
				attributes: { exclude, include },
				where
			});
	},

	findOne: async function (id) {
		let exclude = [];
		return await purchaseHistoryRepository
			.findOne({
				where: { id: onlyNumbers(id) }
			});
	},

	create: async function (value) {
		return await purchaseHistoryRepository
			.create(value);
	},

	update: async function (id, value) {
		await purchaseHistoryRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await purchaseHistoryRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	}
}