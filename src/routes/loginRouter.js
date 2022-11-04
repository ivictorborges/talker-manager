const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const createToken = () => crypto.randomBytes(8).toString('hex');

router.post('/', (_req, res) => res.status(200).json({ token: createToken() }));

module.exports = router;