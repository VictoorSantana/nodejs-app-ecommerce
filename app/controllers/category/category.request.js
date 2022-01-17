const Joi = require('@hapi/joi');

module.exports = Joi.object({
	name: Joi.string().max(45).required().default('Não disponível').messages({
		'string.base': 'campo "name" deve ser do tipo "texto".',
		'string.empty': 'campo "name" não pode ser vazio.',
		'string.min': 'campo "name" deve ter o tamanho minimo de {#limit}',
		'string.max': 'campo "name" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "name" é obrigatorio ser preenchido.'
	}),
	id_category: Joi.number().required().messages({
		'number.base': 'campo "id_category" deve ser do tipo "numero".',
		'number.empty': 'campo "id_category" não pode ser vazio.',
		'number.min': 'campo "id_category" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_category" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_category" é obrigatorio ser preenchido.'
	})
});

