const express = require('express');
const router = express.Router();
const { request, meta } = require('../../config/domain');
const productRequest = require('./product.request');
const productService = require('../../services/product/product.service');

router.get('/', request(), async function (req, res) {
	try {
		const response = await productService.find(req.query);
		res.status(200).send(meta(response, req.query));
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.get('/:id', request(), async function (req, res) {
	try {
		const response = await productService.findOne(req.params.id);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.get('/section/featured', async function (req, res) {
	try {
		const response = await productService.featuredProducts(req.query);
		res.status(201).send(meta(response, req.query));
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});
 
router.post('/', request(productRequest), async function (req, res) {
	try {
		const response = await productService.create(req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.post('/full-creation', request(productRequest), async function (req, res) {
	try {
		const response = await productService.createFull(req.value, req.files);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.put('/:id', request(productRequest), async function (req, res) {
	try {
		const response = await productService.update(req.params.id, req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.delete('/:id', request(), async function (req, res) {
	try {
		const response = await productService.delete(req.params.id);
		res.sendStatus(200).send(response);
	} catch (e) {
		console.error(e);
		res.sendStatus(401).send(e.message);
	}
});


module.exports = router;