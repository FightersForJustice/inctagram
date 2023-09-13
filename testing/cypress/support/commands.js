const regSelectors = require('../fixtures/registrationSelectors.json')

Cypress.Commands.add('registration', (userName, userEmail, userPassword) => {
  cy.get(regSelectors.Name).type(userName)
  cy.get(regSelectors.Mail).type(userEmail)
  cy.get(regSelectors.Password).type(userPassword)
  cy.get(regSelectors.Password2).type(userPassword)
  cy.get(regSelectors.ButtonSignUp).click({ force: true })
})

Cypress.on('uncaught:exception', (err, runnable, promise) => {
  // when the exception originated from an unhandled promise
  // rejection, the promise is provided as a third argument
  // you can turn off failing the test in this case
  if (promise) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})


