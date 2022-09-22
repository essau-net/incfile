// External dependencies
const puppeteer = require('puppeteer');
// Internal dependencies
const pullTaskList = require('./use-cases/pull-task-list');
const loginTodoist = require('./use-cases/login-todoist');
const sendAllTasks = require('./use-cases/send-tasks');

(async () => {
  const browser = await puppeteer.launch();
  const tasksObjList = await pullTaskList(browser);
  await loginTodoist(browser);
  await sendAllTasks(browser, tasksObjList);
  await browser.close();
})();
