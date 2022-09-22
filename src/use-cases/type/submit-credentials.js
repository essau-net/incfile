const { selector } = require('../../utils/constants');
const clickAndWaitForDocumentLoad = require('./click-wait');

async function submitCredentials(page) {
  await clickAndWaitForDocumentLoad(page, selector.submit);
}

module.exports = submitCredentials;
