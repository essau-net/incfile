const { selector } = require('../../utils/constants');
const { getHandleElementsPromisesList } = require('../../adapters/puppeteer');

const getContentTasksPromisesList = (
  taskCardList,
) => getHandleElementsPromisesList(taskCardList, selector.taskContent);

module.exports = getContentTasksPromisesList;
