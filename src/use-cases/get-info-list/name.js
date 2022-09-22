const { getNameTasksPromisesList } = require('../get-promises-list');

async function getNameList(taskCardsList) {
  const nameValuePromises = getNameTasksPromisesList(taskCardsList);
  const namesValueList = await Promise.all(nameValuePromises);
  return namesValueList;
}

module.exports = getNameList;
