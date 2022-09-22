const { getTagsTasksPromisesList } = require('../get-promises-list');

function addTagPrefix(tagsTasksList) {
  return tagsTasksList.map((tagsList) => tagsList.map((tag) => `@${tag}`));
}
async function getTagsList(taskCardsList) {
  const tagsValuePromises = getTagsTasksPromisesList(taskCardsList);
  const tagsList = await Promise.all(tagsValuePromises);
  return addTagPrefix(tagsList);
}

module.exports = getTagsList;
