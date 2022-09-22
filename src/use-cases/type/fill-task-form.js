const typeTaskContent = require('./type-task-content');
const typeTaskHeader = require('./type-task-header');

async function fillTaskForm(page, { content, header }) {
  await typeTaskContent(page, content);
  await typeTaskHeader(page, header);
}

module.exports = fillTaskForm;
