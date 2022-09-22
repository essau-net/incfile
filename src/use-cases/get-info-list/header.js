const getDurationList = require('./duration');
const getNameList = require('./name');
const getTagsList = require('./tags');

async function getHeaderList(taskCardsList) {
  const durationList = await getDurationList(taskCardsList);
  const nameList = await getNameList(taskCardsList);
  const tagsList = await getTagsList(taskCardsList);
  const headerList = [];
  for (let i = 0; i < taskCardsList.length; i += 1) {
    const header = `${tagsList[i].join(' ')} ${nameList[i]} ${durationList[i]}`;
    headerList.push(header);
  }
  return headerList;
}

module.exports = getHeaderList;
