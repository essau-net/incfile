const getEnvVar = require('../../adapters/env-vars/getEnvVar');

module.exports = {
  email: getEnvVar('EMAIL_TODOIST'),
  password: getEnvVar('PASSWORD_TODOIST'),
};
