const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
       require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
