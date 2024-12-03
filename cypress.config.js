const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    registerUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    loginUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
  },
});

