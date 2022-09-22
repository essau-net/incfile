const { getContentTasksPromisesList } = require('../get-promises-list');

async function getContentList(taskCardsList) {
  const contentTasksPromises = getContentTasksPromisesList(taskCardsList);
  const contentList = await Promise.all(contentTasksPromises);
  return contentList;
}

module.exports = getContentList;
