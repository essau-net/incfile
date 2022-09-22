const nodeEnvironments = {
  DEV: 'development',
  PROD: 'production',
};

const url = {
  randomList: 'https://randomtodolistgenerator.herokuapp.com/library',
  loginTodoist: 'https://todoist.com/auth/login',
  homePageTodoist: 'https://todoist.com/app/today',
};

const selector = {
  taskCards: '.card-body',
  taskContent: '.card-text',
  taskDuration: '.task-title .ml-auto',
  taskTags: '.btn-group > .m-1',
  taskTitle: '.task-title div',
  email: '#element-0',
  password: '#element-3',
  submit: 'form button[type="submit"]',
  addTaskButton: '.plus_add_button',
  taskContentInput: '.task_editor__description_field',
  taskHeaderInput: '.notranslate',
  submitTask: 'button.a8af2163:nth-child(2)',
};

module.exports = {
  nodeEnvironments,
  url,
  selector,
};
