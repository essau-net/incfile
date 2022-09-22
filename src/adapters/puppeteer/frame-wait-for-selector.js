function frameWaitForSelector(page, selector, configObj) {
  return page.mainFrame().waitForSelector(selector, { ...configObj });
}

module.exports = frameWaitForSelector;
