const fs = require('fs').promises;
const { join } = require('path');

const readerJSON = async () => {
    const contentJSON = await fs.readFile(
        join(__dirname, './talker.json'), 'utf-8',
        );
        const fileContent = JSON.parse(contentJSON);
    return fileContent;
};

const writerJSON = async (reader) => {
    const contentJSON = await readerJSON();
    await fs.writeFile(
        join(__dirname, './talker.json'), JSON.stringify([...contentJSON, reader], 4),
);
};

module.exports = {
    readerJSON,
    writerJSON,
};