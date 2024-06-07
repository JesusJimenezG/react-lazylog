const { Neutrino } = require('neutrino');

module.exports = Neutrino({ root: __dirname })
  .use('.neutrinorc')
  .call('eslintrc');

// Add the settings
module.exports.settings = {
  "import/resolver": {
    node: { extensions: [".js", ".mjs"] }
  }
};