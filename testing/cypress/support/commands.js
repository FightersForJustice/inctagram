const regSelectors = require('../fixtures/registrationSelectors.json')

// Cypress.Commands.add('generateUser', () => {
//   const { faker } = require('@faker-js/faker')
//   cy.writeFile('cypress/fixtures/user.json', {
//     userName: faker.person.fullName(),
//     userEmail: faker.internet.email(),
//     userPassword: faker.internet.password({ length: 6 }),
//   })
// })

Cypress.Commands.add('registration', (userName, userEmail, userPassword) => {
  cy.get(regSelectors.Name).type(userName)
  cy.get(regSelectors.Mail).type(userEmail)
  cy.get(regSelectors.Password).type(userPassword)
  cy.get(regSelectors.Password2).type(userPassword)
  cy.get(regSelectors.ButtonSignUp).click()
})
