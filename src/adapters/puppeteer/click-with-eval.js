function clickWithEval(page, selector) {
  return page.$eval(selector, (button) => button.click());
}

module.exports = clickWithEval;
