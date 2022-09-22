const { selector } = require('../../utils/constants');
const { getHandleElementsPromisesList } = require('../../adapters/puppeteer');

const getTagsTasksPromisesList = (
  taskCardList,
) => getHandleElementsPromisesList(taskCardList, selector.taskTags);

module.exports = getTagsTasksPromisesList;
