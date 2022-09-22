const { selector } = require('../../utils/constants');
const { getHandleElementsPromisesList } = require('../../adapters/puppeteer');

const getDurationTasksPromisesList = (
  taskCardList,
) => getHandleElementsPromisesList(taskCardList, selector.taskDuration);

module.exports = getDurationTasksPromisesList;
