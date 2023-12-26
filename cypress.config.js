const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/.env` });

const { USER_LOGIN, USER_EMAIL, USER_PASSWORD } = process.env;

module.exports = defineConfig({
  projectId: "isod2a",
  reporter: "cypress-mochawesome-reporter",
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Inline Reporter",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `${process.env.ENV}`,
    env: {
      USER_LOGIN,
      USER_EMAIL,
      USER_PASSWORD,
    },
  },
});
