const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    // supportFile:cypress/support/e2e.js,
    // specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    // baseUrl: 'https://inctagram.net/',
    baseUrl: 'https://inctagram-git-staging-fightersforjustice.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
