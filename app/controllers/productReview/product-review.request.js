const Joi = require('@hapi/joi');

module.exports = Joi.object({
	id_product: Joi.number().required().messages({
		'number.base': 'campo "id_product" deve ser do tipo "numero".',
		'number.empty': 'campo "id_product" não pode ser vazio.',
		'number.min': 'campo "id_product" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_product" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_product" é obrigatorio ser preenchido.'
	}),
	id_user: Joi.number().required().messages({
		'number.base': 'campo "id_user" deve ser do tipo "numero".',
		'number.empty': 'campo "id_user" não pode ser vazio.',
		'number.min': 'campo "id_user" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_user" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_user" é obrigatorio ser preenchido.'
	}),
	stars: Joi.number().max(5).min(1).default(1).messages({
		'number.base': 'campo "stars" deve ser do tipo "numero".',
		'number.empty': 'campo "stars" não pode ser vazio.',
		'number.min': 'campo "stars" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "stars" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "stars" é obrigatorio ser preenchido.'
	}),
	comment: Joi.string().max(450).required().messages({
		'string.base': 'campo "comment" deve ser do tipo "texto".',
		'string.empty': 'campo "comment" não pode ser vazio.',
		'string.min': 'campo "comment" deve ter o tamanho minimo de {#limit}',
		'string.max': 'campo "comment" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "comment" é obrigatorio ser preenchido.'
	}),
});

