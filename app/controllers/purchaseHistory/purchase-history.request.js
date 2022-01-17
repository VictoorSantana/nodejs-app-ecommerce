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
	status: Joi.number().valid(5, 4, 3, 2, 1, 0).default(2).messages({
		'number.base': 'campo "status" deve ser do tipo "numero".',
		'number.empty': 'campo "status" não pode ser vazio.',
		'number.min': 'campo "status" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "status" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "status" é obrigatorio ser preenchido.'
	}),
});

