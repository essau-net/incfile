// Internal dependencies
const { isUndefined } = require('../../utils/checkers/undefined');
const configDotenvPath = require('../../config/dotenv/path');

const getEnvVar = (key) => {
  configDotenvPath();
  const envVar = process.env[key];
  if (isUndefined(envVar)) throw ReferenceError(`reference to undefined property "${key}"`);

  return envVar;
};

module.exports = getEnvVar;
