const express = require('express');

const { readerJSON } = require('../helpers');

const router = express.Router();

router.get('/', async (_req, res) => res.status(200).json(await readerJSON()));

module.exports = router;
