const express = require('express');
const router = express.Router();
const { request, meta } = require('../../config/domain');
const categoryRequest = require('./category.request');
const categoryService = require('../../services/category/category.service');

router.get('/', request(), async function (req, res) {
	try {
		const response = await categoryService.find(req.query);
		res.status(200).send(meta(response, req.query));
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});


router.get('/public/parents', async function (req, res) {
	try {
		const response = await categoryService.parents(req.query);
		res.status(200).send(meta(response, req.query));
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.get('/:id', request(), async function (req, res) {
	try {
		const response = await categoryService.findOne(req.params.id);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});
 
router.post('/', request(categoryRequest), async function (req, res) {
	try {
		const response = await categoryService.create(req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.put('/:id', request(categoryRequest), async function (req, res) {
	try {
		const response = await categoryService.update(req.params.id, req.value);
		res.status(201).send(response);
	} catch (e) {
		console.error(e);
		res.status(401).send(e.message);
	}
});

router.delete('/:id', request(), async function (req, res) {
	try {
		const response = await categoryService.delete(req.params.id);
		res.sendStatus(200).send(response);
	} catch (e) {
		console.error(e);
		res.sendStatus(401).send(e.message);
	}
});


module.exports = router;