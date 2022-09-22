const { typeInSelector } = require('../../adapters/puppeteer');
const { selector } = require('../../utils/constants');

async function typeTaskHeader(page, header) {
  await typeInSelector(page, selector.taskHeaderInput, header);
}

module.exports = typeTaskHeader;
