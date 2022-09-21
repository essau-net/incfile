// External dependencies
const { join } = require('path');
const dotenv = require('dotenv');
// Internal dependencies
const getNodeEnvironment = require('../../adapters/node/getNodeEnvironment');

const configDotenvPath = () => {
  const nodeEnv = getNodeEnvironment();
  const fileName = `${nodeEnv}.env`;

  const path = join('../../..', fileName);
  dotenv.config({ path });
};

module.exports = configDotenvPath;
