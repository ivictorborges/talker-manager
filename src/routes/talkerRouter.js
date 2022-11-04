const express = require('express');

const { readerJSON } = require('../helpers');

const router = express.Router();

router.get('/', async (_req, res) => res.status(200).json(await readerJSON()));

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const fileContent = await readerJSON();
    const talkerFinded = fileContent.find((talker) => talker.id === +id);
    if (!talkerFinded) res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(talkerFinded);
  });

module.exports = router;
