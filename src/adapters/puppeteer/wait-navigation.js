function waitForNavigation(page, configObj) {
  return page.waitForNavigation({ ...configObj });
}

module.exports = waitForNavigation;
