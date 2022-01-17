const Joi = require('@hapi/joi');

module.exports = Joi.object({
	id_category: Joi.number().required().messages({
		'number.base': 'campo "id_category" deve ser do tipo "numero".',
		'number.empty': 'campo "id_category" não pode ser vazio.',
		'number.min': 'campo "id_category" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "id_category" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "id_category" é obrigatorio ser preenchido.'
	}),
	stock_quantity: Joi.number().required().messages({
		'number.base': 'campo "stock_quantity" deve ser do tipo "numero".',
		'number.empty': 'campo "stock_quantity" não pode ser vazio.',
		'number.min': 'campo "stock_quantity" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "stock_quantity" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "stock_quantity" é obrigatorio ser preenchido.'
	}),
	name: Joi.string().max(100).required().messages({
		'string.base': 'campo "name" deve ser do tipo "texto".',
		'string.empty': 'campo "name" não pode ser vazio.',
		'string.min': 'campo "name" deve ter o tamanho minimo de {#limit}',
		'string.max': 'campo "name" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "name" é obrigatorio ser preenchido.'
	}),
	description: Joi.string().max(1300).messages({
		'string.base': 'campo "description" deve ser do tipo "texto".',
		'string.empty': 'campo "description" não pode ser vazio.',
		'string.min': 'campo "description" deve ter o tamanho minimo de {#limit}',
		'string.max': 'campo "description" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "description" é obrigatorio ser preenchido.'
	}),
	information: Joi.string().max(2000).messages({
		'string.base': 'campo "information" deve ser do tipo "texto".',
		'string.empty': 'campo "information" não pode ser vazio.',
		'string.min': 'campo "information" deve ter o tamanho minimo de {#limit}',
		'string.max': 'campo "information" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "information" é obrigatorio ser preenchido.'
	}),
	price: Joi.number().max(999999).min(0).messages({
		'number.base': 'campo "price" deve ser do tipo "numero".',
		'number.empty': 'campo "price" não pode ser vazio.',
		'number.min': 'campo "price" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "price" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "price" é obrigatorio ser preenchido.'
	}),
	discount: Joi.number().max(100).min(0).messages({
		'number.base': 'campo "discount" deve ser do tipo "numero".',
		'number.empty': 'campo "discount" não pode ser vazio.',
		'number.min': 'campo "discount" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "discount" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "discount" é obrigatorio ser preenchido.'
	}),
	end_discount: Joi.date().default(Date.now).messages({
		'date.base': 'campo "end_discount" deve ser do tipo "data".',
		'date.empty': 'campo "end_discount" não pode ser vazio.',
		'date.min': 'campo "end_discount" deve ter o tamanho minimo de {#limit}',
		'date.max': 'campo "end_discount" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "end_discount" é obrigatorio ser preenchido.'
	}),
	status: Joi.number().valid(2, 1, 0).default(2).messages({
		'number.base': 'campo "status" deve ser do tipo "numero".',
		'number.empty': 'campo "status" não pode ser vazio.',
		'number.min': 'campo "status" deve ter o tamanho minimo de {#limit}',
		'number.max': 'campo "status" deve ter o tamanho maximo de {#limit}',
		'any.required': 'campo "status" é obrigatorio ser preenchido.'
	}),
	id_folder_parent: Joi.number().required().messages({
        'number.base': 'campo "id_folder_parent" deve ser do tipo "numero".',
        'number.empty': 'campo "id_folder_parent" não pode ser vazio.',
        'number.min': 'campo "id_folder_parent" deve ter o tamanho minimo de {#limit}',
        'number.max': 'campo "id_folder_parent" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "id_folder_parent" é obrigatorio ser preenchido.'
    })
});

