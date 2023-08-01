// cypress configurations
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // files: ["cypress/support/e2e.js", "cypress/support/e2e.ts"],
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on); //for mocha reports
    },
    defaultCommandTimeout: 10000, // Set the default timeout to 10 sec
  },
});
