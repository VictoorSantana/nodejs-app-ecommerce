
const productRepository = require('./product.repository');
const galleryRepository = require('../productGallery/product-gallery.repository');
const fileRepository = require('../file/file.repository');

const { onlyNumbers, resume, clone } = require('../../config/filter');
const storage = require('../../config/storage');
const cache = require('../../config/cache');

productRepository.hasMany(galleryRepository, { as: 'gallery', foreignKey: 'id_product' });
galleryRepository.belongsTo(fileRepository, { as: 'photo', foreignKey: 'id_file' });

module.exports = {
	find: async function (query) {
		let exclude = [];
		let include = [];

		const { paginate, where } = resume(query, [
			{ key: 'id_category', colunm: 'id_category', op: '=' },
			{ key: 'id_brand', colunm: 'id_brand', op: '=' },
			{ key: 'stock_quantity', colunm: 'stock_quantity', op: '=' },
			{ key: 'name', colunm: 'name', op: 'like%' },
			{ key: 'description', colunm: 'description', op: 'like%' },
			{ key: 'information', colunm: 'information', op: 'like%' },
			{ key: 'price', colunm: 'price', op: '<=' },
			{ key: 'discount', colunm: 'discount', op: '<=' },
			{ key: 'end_discount', colunm: 'end_discount', op: '<=' },
			{ key: 'status', colunm: 'status', op: '=' },
		]);

		return await productRepository
			.findAndCountAll({
				...paginate,
				where,
				attributes: { exclude, include },
				include: [
					{
						model: galleryRepository,
						as: 'gallery',
						include: [
							{ model: fileRepository, as: 'photo' }
						]
					}
				]
			});
	},

	findOne: async function (id) {
		let exclude = [];
		return await productRepository
			.findOne({
				where: { id: onlyNumbers(id) }
			});
	},


	createFull: async function (value, files) {

		if (files) {
			if (!files['stream']) {
				throw new Error('Não foi encontrado arquivo dentro do "stream".');
			}
		} else {
			throw new Error('Adicione um arquivo na propriedade "stream" antes de enviar.');
		}

		const newProduct = await productRepository
			.create(value);
		const clonedProduct = clone(newProduct);

		console.log('clonnedproduct', clonedProduct);

		for (let k = 0; k < filesResult.length; k++) {
			const file = filesResult[k];

			const savedFile = await fileRepository
				.create({
					...value,
					...file,
				});

			console.log(clone(savedFile));

			await productGalleryRepository
				.create({
					id_file: savedFile.id,  
					id_product: clonedProduct.id
				});	
		}





		return 'ok'
	},

	create: async function (value) {
		return await productRepository
			.create(value);
	},

	update: async function (id, value) {
		await productRepository
			.update(value, {
				where: { id: onlyNumbers(id) }
			});
		return await this.findOne(id);
	},

	delete: async function (id) {
		return await productRepository
			.destroy({
				where: { id: onlyNumbers(id) }
			});
	},

	featuredProducts: async function (query) {
		const page = isNaN(Number(query.page)) ? 0 : Number(query.page);
		const limit = isNaN(Number(query.limit)) ? 20 : Number(query.limit);

		const cacheName = `page-${page}-limit-${limit}`;
		const cached = cache.exist('featured-products', cacheName);
		if (cached) return cached;

		let exclude = ['id_category', 'id_brand', 'stock_quantity', 'description', 'information'];
		let include = [];

		const { paginate } = resume(query);

		const response = await productRepository
			.findAndCountAll({
				...paginate,
				attributes: { exclude, include },
				include: [
					{
						model: galleryRepository,
						as: 'gallery',
						include: [
							{ model: fileRepository, as: 'photo' }
						],
						where: {
							cover_image: '1'
						}
					}
				]
			});


		cache.save(clone(response), 'featured-products', cacheName);
		return response;
	},

}