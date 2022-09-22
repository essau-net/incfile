const { url } = require('../utils/constants');
const createPageInUrl = require('./pages/create-page');
const { typeCredentials, submitCredentials } = require('./actions');

async function loginTodoist(browser) {
  const page = await createPageInUrl(browser, url.loginTodoist);
  await typeCredentials(page);
  await submitCredentials(page);
  await page.close();
}

module.exports = loginTodoist;
