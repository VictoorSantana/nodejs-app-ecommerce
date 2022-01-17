
const productGalleryRepository = require('./product-gallery.repository');
const { onlyNumbers, resume } = require('../../config/filter');

module.exports = {
	find: async function (query) {
		let exclude = [];
		let include = [];

		const { paginate, where } = resume(query, [
			{ key: 'id_file', colunm: 'id_file', op: '=' },
			{ key: 'id_product', colunm: 'id_product', op: '=' },
			{ key: 'cover_image', colunm: 'cover_image', op: '=' },
		]);

		return await productGalleryRepository
			.findAndCountAll({
				...paginate,
				attributes: { exclude, include },
				where
			});
	},

	findOne: async function (id) {
		let exclude = [];
		return await productGalleryRepository
			.findOne({
				where: { id: onlyNumbers(id) }
			});
	},

	create: async function (value) {
		return await productGalleryRepository
			.create(value);
	},

	update: async function (id, value) {
		await productGalleryRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await productGalleryRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	}
}