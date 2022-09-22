const { selector } = require('../../utils/constants');
const { getHandleElementsPromisesList } = require('../../adapters/puppeteer');

const getNameTasksPromisesList = (
  taskCardList,
) => getHandleElementsPromisesList(taskCardList, selector.taskTitle);

module.exports = getNameTasksPromisesList;
