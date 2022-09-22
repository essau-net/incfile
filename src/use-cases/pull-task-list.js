const createPageInUrl = require('./pages/create-page');
const getAllElements = require('../adapters/puppeteer/getters/elements-list');
const createTasksObjList = require('./create-tasks-obj-list');
const { url, selector } = require('../utils/constants');

async function pullTaskList(browser) {
  const page = await createPageInUrl(browser, url.randomList);
  const taskCardList = await getAllElements(page, selector.taskCards);
  const taskObjList = await createTasksObjList(taskCardList);
  await page.close();
  return taskObjList;
}

module.exports = pullTaskList;
