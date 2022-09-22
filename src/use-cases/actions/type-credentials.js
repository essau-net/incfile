const { selector } = require('../../utils/constants');
const { email, password } = require('../../config/env-vars/credentials-todoist');
const { typeInSelector } = require('../../adapters/puppeteer');

async function typeCredentials(page) {
  await typeInSelector(page, selector.email, email);
  await typeInSelector(page, selector.password, password);
}

module.exports = typeCredentials;
