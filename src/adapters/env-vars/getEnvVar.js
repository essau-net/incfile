// Internal dependencies
const { isUndefined } = require('../../utils/checkers/undefined');

const getEnvVar = (key) => {
  const envVar = process.env[key];
  if (isUndefined(envVar)) throw ReferenceError(`reference to undefined property "${key}"`);

  return envVar;
};

module.exports = getEnvVar;
