const {
  getContentList,
  getHeaderList,
} = require('./get-info-list');

async function createTasksObjList(taskCardsList) {
  const contentList = await getContentList(taskCardsList);
  const headerList = await getHeaderList(taskCardsList);

  const taskObjList = [];
  for (let i = 0; i < taskCardsList.length; i += 1) {
    const taskObj = {
      content: contentList[i],
      header: headerList[i],
    };
    taskObjList.push(taskObj);
  }
  return taskObjList;
}

module.exports = createTasksObjList;
