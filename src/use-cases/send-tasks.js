const { url } = require('../utils/constants');
const createPageInUrl = require('./pages/create-page');
const {
  clickAddTaskButton,
  fillTaskForm,
  submitTask,
} = require('./actions');

async function sendOneTask(page, taskObj) {
  await clickAddTaskButton(page);
  await fillTaskForm(page, taskObj);
  await page.waitForTimeout(1000);
  await submitTask(page);
}

async function sendAllTasks(browser, tasksObjList) {
  const submitTaksPromises = tasksObjList.map(async (taskObj) => {
    const page = await createPageInUrl(browser, url.homePageTodoist);
    return sendOneTask(page, taskObj);
  });
  await Promise.all(submitTaksPromises);
}

module.exports = sendAllTasks;
