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
        join(__dirname, './talker.json'), JSON.stringify([...fileContent, talker], 4),
);
};

const setID = async () => {
    const fileContent = await readerJSON();
    const lastID = Math.max(...fileContent.map(({ id }) => id));
    return lastID + 1;
  };

module.exports = {
    readerJSON,
    writerJSON,
    setID,
};