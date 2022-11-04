const fs = require('fs').promises;
const { join } = require('path');

const readerJSON = async () => {
    const contentJSON = await fs.readFile(
        join(__dirname, './talker.json'), 'utf-8',
        );
        const fileContent = JSON.parse(contentJSON);
    return fileContent;
};

module.exports = {
    readerJSON,
};