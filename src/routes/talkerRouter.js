const express = require('express');

const {
  readerJSON,
  writerJSON,
  setID,
  talkerUpdater,
  talkerEraser,
  talkerFinder } = require('../helpers');

const {
  tokenValidator,
  nameValidator,
  ageValidator,
  talkValidator,
  rateValidator,
  watchedAtValidator,
} = require('../middlewares');

const router = express.Router();

router.get(
  '/search',
  tokenValidator,
  async (req, res) => {
    const { q } = req.query;
    const talkerList = await talkerFinder(q);
    res.status(200).json(talkerList);
  },
);

router.get('/', async (_req, res) => res.status(200).json(await readerJSON()));

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const fileContent = await readerJSON();
    const talkerFinded = fileContent.find((talker) => talker.id === +id);
    if (!talkerFinded) res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(talkerFinded);
  });

router.post('/',
tokenValidator,
nameValidator,
ageValidator,
talkValidator,
rateValidator,
watchedAtValidator,
async (req, res) => {
  const talkerBody = req.body;
  const talker = { id: await setID(), ...talkerBody };
  await writerJSON(talker);
  res.status(201).json(talker);
});

router.put('/:id',
tokenValidator,
nameValidator,
ageValidator,
talkValidator,
rateValidator,
watchedAtValidator,
async (req, res) => {
  const { id } = req.params;
  const talkerBody = req.body;
  const talker = { id: +id, ...talkerBody };
  await talkerUpdater(talker);
  res.status(201).json(talker);
});

router.delete('/:id',
tokenValidator,
async (req, res) => {
  const { id } = req.params;
  await talkerEraser(+id);
res.sendStatus(204);
});

module.exports = router;
