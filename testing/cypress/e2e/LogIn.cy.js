import { LoginPage } from '../pages/LoginPage'
// const user = require('../fixtures/user.json')
const { faker } = require('@faker-js/faker')

let userName = faker.person.fullName()
let userEmail = faker.internet.email()
let userPassword = faker.internet.password({ length: 7 })

describe('Login Page', () => {
  before('Registrate new user', () => {
    cy.visit('auth/registration')
    cy.registration(userName, userEmail, userPassword)
  })

  beforeEach('Visit Sign in page', () => {
    cy.visit('auth/login')
  })

  let loginPage = new LoginPage()

  it('Validate LoginPage elements ', () => {
    loginPage.elements.emailField().should('exist')
    loginPage.elements.passwordField().should('exist')
    loginPage.elements.loginButton().should('exist').contains('Sign In')
    loginPage.elements.registrationLink().should('exist').contains('Sign Up')
    loginPage.elements.forgotPasswordLink().should('exist').contains('Forgot Password')
  })

  it('Positive login for a user who does not have an account', () => {
    loginPage.login(userEmail, userPassword)
    cy.url().should('include', '/')
    cy.visit('auth/log-out')
  })

  it('Positive login for a user who have own account', () => {
    loginPage.login(userEmail, userPassword)
    cy.url().should('include', '/')
    cy.visit('auth/log-out')
  })

  it('Login with wrong email', () => {
    loginPage.login(userEmail.slice(1), userPassword)
    loginPage.elements
      .errorMesLogin()
      .should('be.visible')
      .and('have.text', 'The password or the email are incorrect. Try again, please')
    cy.url().should('include', 'auth/login')
  })

  it('Login with wrong password', () => {
    loginPage.login(userEmail, userPassword.slice(-1))
    loginPage.elements
      .errorMesLogin()
      .should('be.visible')
      .and('have.text', 'The password or the email are incorrect. Try again, please')
    cy.url().should('include', 'auth/login')
  })

  it('Login with blank fields', () => {
    loginPage.elements.loginButton().click()
    loginPage.elements.blankEmailMess().should('be.visible').and('have.text', '* Required field to fill in')
    loginPage.elements.blankPasMes().should('be.visible').and('have.text', '* Required field to fill in')
    cy.url().should('include', 'auth/login')
  })
})
