const express = require('express');
const router = express.Router();
const { request, meta } = require('../../config/domain');
const productGalleryRequest = require('./product-gallery.request');
const productGalleryService = require('../../services/productGallery/product-gallery.service');

router.get('/', request(), async function (req, res) {
	try {
		const response = await productGalleryService.find(req.query);
		res.status(200).send(meta(response, req.query));
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.get('/:id', request(), async function (req, res) {
	try {
		const response = await productGalleryService.findOne(req.params.id);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});
 
router.post('/', request(productGalleryRequest), async function (req, res) {
	try {
		const response = await productGalleryService.create(req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.put('/:id', request(productGalleryRequest), async function (req, res) {
	try {
		const response = await productGalleryService.update(req.params.id, req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.delete('/:id', request(), async function (req, res) {
	try {
		const response = await productGalleryService.delete(req.params.id);
		res.sendStatus(200).send(response);
	} catch (e) {
		console.error(e);
		res.sendStatus(401).send(e.message);
	}
});


module.exports = router;