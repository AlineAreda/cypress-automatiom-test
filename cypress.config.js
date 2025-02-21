const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  env: {
    baseApi: process.env.API_URL,
    projectId: process.env.PROJECT_ID,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    baseUrl: process.env.WEB_URL,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    }
  }
});