const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    env: {
      hideCredentials: true
    },
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        ...process.env,
      };
      return config;
    },
  },
});
