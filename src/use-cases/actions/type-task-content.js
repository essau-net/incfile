const { typeInSelector } = require('../../adapters/puppeteer');
const { selector } = require('../../utils/constants');

async function typeTaskContent(page, content) {
  await typeInSelector(page, selector.taskContentInput, content);
}

module.exports = typeTaskContent;
