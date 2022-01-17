
const categoryRepository = require('./category.repository');
const { onlyNumbers, resume, clone, makeNumber } = require('../../config/filter');
const cache = require('../../config/cache');

const keyIgnore = 'cty123';

module.exports = {
	find: async function (query) {
		let exclude = [];
		let include = [];

		const { paginate, where } = resume(query, [
			{ key: 'name', colunm: 'name', op: 'like%' },
			{ key: 'id_category', colunm: 'id_category', op: '=' },
		]);

		return await categoryRepository
			.findAndCountAll({
				...paginate,
				attributes: { exclude, include },
				where
			});
	},

	parents: async function (query) {
		let exclude = ['createdAt', 'updatedAt'];
		let include = [];


		const limit = makeNumber(query.limit, 20);
		const idCategory = makeNumber(query.id_category, 0);

		const cacheName = `limit-${limit}-parent-${idCategory}`;
		const cached = cache.exist('category-menu', cacheName);
		if (cached) { console.log('--- HIT CACHE / CATEGORY PARENTS ---'); return cached };


		const { where } = resume(query, [
			{ key: 'id_category', colunm: 'id_category', op: '=' },
		]);

		const response = await categoryRepository
			.findAndCountAll({
				limit,
				order: [['name', 'asc']],
				attributes: { exclude, include },
				where
			});

		cache.save(clone(response), 'category-menu', cacheName);


		return response;
	},

	findOne: async function (id) {
		let exclude = [];
		return await categoryRepository
			.findOne({
				where: { id: onlyNumbers(id) }
			});
	},

	create: async function (value) {
		return await categoryRepository
			.create(value);
	},

	update: async function (id, value) {
		await categoryRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await categoryRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	}
}