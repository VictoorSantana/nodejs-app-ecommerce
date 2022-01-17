
const productReviewRepository = require('./product-review.repository');
const { onlyNumbers, resume } = require('../../config/filter');

module.exports = {
	find: async function (query) {
		let exclude = [];
		let include = [];

		const { paginate, where } = resume(query, [
			{ key: 'id_product', colunm: 'id_product', op: '=' },
			{ key: 'id_user', colunm: 'id_user', op: '=' },
			{ key: 'stars', colunm: 'stars', op: '=' },
			{ key: 'comment', colunm: 'comment', op: 'like%' },
		]);

		return await productReviewRepository
			.findAndCountAll({
				...paginate,
				attributes: { exclude, include },
				where
			});
	},

	findOne: async function (id) {
		let exclude = [];
		return await productReviewRepository
			.findOne({
				where: { id: onlyNumbers(id) }
			});
	},

	create: async function (value) {
		return await productReviewRepository
			.create(value);
	},

	update: async function (id, value) {
		await productReviewRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await productReviewRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	}
}