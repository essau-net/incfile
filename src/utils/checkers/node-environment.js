const { nodeEnvironments } = require('../constants');

const isProduction = (variable) => variable === nodeEnvironments.PROD;
const isDevelopment = (variable) => variable === nodeEnvironments.DEV;

const isValidNodeEnvironment = (variable) => isDevelopment(variable) || isProduction(variable);

module.exports = isValidNodeEnvironment;
