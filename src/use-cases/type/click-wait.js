const { clickSelector } = require('../../adapters/puppeteer');
const waitForNavigation = require('../../adapters/puppeteer/wait-navigation');

async function clickAndWaitForDocumentLoad(page, selector) {
  await Promise.all([
    waitForNavigation(page, { waitUntil: ['domcontentloaded'] }),
    clickSelector(page, selector),
  ]);
}

module.exports = clickAndWaitForDocumentLoad;
