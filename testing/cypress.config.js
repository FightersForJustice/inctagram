const { defineConfig } = require('cypress')
const dotenv = require('dotenv')
dotenv.config()

module.exports = defineConfig({
  watchForFileChanges: false,
  env: {
    MAILOSAUR_API_KEY: process.env.MAILOSAUR_API_KEY,
    serverId: process.env.SERVER_ID,
  },
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
