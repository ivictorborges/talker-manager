const loginAndEmailValidator = require('./loginAndEmail');
const tokenValidator = require('./token');
const nameValidator = require('./name');
const ageValidator = require('./age');
const talkValidator = require('./talk');
const rateValidator = require('./rate');
const watchedAtValidator = require('./watchedAt');

module.exports = {
    loginAndEmailValidator,
    tokenValidator,
    nameValidator,
    ageValidator,
    talkValidator,
    rateValidator,
    watchedAtValidator,
};