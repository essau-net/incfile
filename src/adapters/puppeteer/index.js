const gettersModule = require('./getters');
const clickWithEval = require('./click-with-eval');
const clickSelector = require('./click');
const frameWaitForSelector = require('./frame-wait-for-selector');
const typeInSelector = require('./type');
const waitForNavigation = require('./wait-navigation');

module.exports = {
  ...gettersModule,
  clickWithEval,
  clickSelector,
  frameWaitForSelector,
  typeInSelector,
  waitForNavigation,
};
