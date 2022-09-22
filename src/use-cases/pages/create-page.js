async function createPageInUrl(browser, url) {
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

module.exports = createPageInUrl;
