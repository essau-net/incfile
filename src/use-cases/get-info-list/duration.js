const { getDurationTasksPromisesList } = require('../get-promises-list');

const HOUR = 60;

function createDurationString(durationNum) {
  if (durationNum < 1) {
    const durationTime = durationNum * HOUR;
    return `today for ${durationTime} min`;
  }

  return `today for ${durationNum} hour`;
}

async function getDurationist(taskCardsList) {
  const contentTasksPromises = getDurationTasksPromisesList(taskCardsList);
  const contentList = await Promise.all(contentTasksPromises);

  const contentNumberList = contentList.map((element) => {
    const numberValue = parseFloat(element);
    return createDurationString(numberValue);
  });
  return contentNumberList;
}

module.exports = getDurationist;
