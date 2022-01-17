const Joi = require('@hapi/joi');

module.exports = Joi.object({
	id_file: Joi.number().required().messages({
		'number.base': 'campo "id_file" deve ser do tipo "numero".',
		'number.empty': 'campo "id_file" não pode ser vazio.',
		'number.min': 'campo "id_file" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_file" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_file" é obrigatorio ser preenchido.'
	}),
	id_product: Joi.number().required().messages({
		'number.base': 'campo "id_product" deve ser do tipo "numero".',
		'number.empty': 'campo "id_product" não pode ser vazio.',
		'number.min': 'campo "id_product" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_product" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_product" é obrigatorio ser preenchido.'
	}),
	cover_image: Joi.number().valid(1, 0).messages({
		'number.base': 'campo "cover_image" deve ser do tipo "numero".',
		'number.empty': 'campo "cover_image" não pode ser vazio.',
		'number.min': 'campo "cover_image" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "cover_image" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "cover_image" é obrigatorio ser preenchido.'
	}),
});

