const frameWaitForSelector = require('../../adapters/puppeteer/frame-wait-for-selector');
const { clickWithEval } = require('../../adapters/puppeteer');
const { selector } = require('../../utils/constants');

async function clickAddTaskButton(page) {
  await frameWaitForSelector(page, selector.addTaskButton, { timeout: 8000 });
  await clickWithEval(page, selector.addTaskButton);
}

module.exports = clickAddTaskButton;
