const frameWaitForSelector = require('../../adapters/puppeteer/frame-wait-for-selector');
const { clickSelector } = require('../../adapters/puppeteer');
const { selector } = require('../../utils/constants');

async function submitTask(page) {
  await frameWaitForSelector(page, selector.submitTask);
  await clickSelector(page, selector.submitTask);
}

module.exports = submitTask;
