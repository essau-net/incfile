const isUndefined = (variable) => variable === undefined;
const isDefined = (variable) => !isUndefined(variable);

module.exports = {
  isDefined,
  isUndefined,
};
