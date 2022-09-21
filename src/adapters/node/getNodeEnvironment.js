// Internal dependencies
const nodeEnv = require('../../config/env-vars/nodeEnv');
const isValidNodeEnvironment = require('../../utils/checkers/node-environment');

const getNodeEnvironment = () => {
  if (isValidNodeEnvironment(nodeEnv)) return nodeEnv;

  throw new TypeError('Invalid assignment to const "NODE_ENV"');
};

module.exports = getNodeEnvironment;
