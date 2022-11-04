const fs = require('fs').promises;
const { join } = require('path');

const readerJSON = async () => {
    const contentJSON = await fs.readFile(
        join(__dirname, './talker.json'), 'utf-8',
        );
        const fileContent = JSON.parse(contentJSON);
    return fileContent;
};

const writerJSON = async (talker) => {
    const fileContent = await readerJSON();
    await fs.writeFile(
        join(__dirname, './talker.json'),
        JSON.stringify([...fileContent, talker], 4),
);
};

const setID = async () => {
    const fileContent = await readerJSON();
    const lastID = Math.max(...fileContent.map(({ id }) => id));
    return lastID + 1;
  };

const talkerUpdater = async (talker) => {
    const fileContent = await readerJSON();
    const fileUpdated = fileContent.map((t) => {
        if (t.id === talker.id) return talker;
        return t;
    });
    await fs.writeFile(
        join(__dirname, './talker.json'),
        JSON.stringify(fileUpdated, 4),
);
};

const talkerEraser = async (id) => {
    const fileContent = await readerJSON();
    const fileUpdated = fileContent.find((t) => t.id !== id);
    await fs.writeFile(
        join(__dirname, './talker.json'),
        JSON.stringify(fileUpdated, 4),
    );
};

const talkerFinder = async (query) => {
    const fileContent = await readerJSON();
    const talkerList = fileContent
      .filter((t) => !query || t.name.includes(query));
    return talkerList;
  };

module.exports = {
    readerJSON,
    writerJSON,
    setID,
    talkerUpdater,
    talkerEraser,
    talkerFinder,
};