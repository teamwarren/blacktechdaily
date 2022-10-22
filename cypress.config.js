const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'xqa6dw',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
