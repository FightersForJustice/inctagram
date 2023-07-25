//import faker from "faker"

const regTestData = require("../fixtures/regTestData.json")
const regSelectors = require("../fixtures/registrationSelectors.json")

// const randomUsername = faker.internet.userName();
// const randomEmail = faker.internet.email();
// const randomPassword = faker.internet.password();


describe("Registration Page", () => {
  beforeEach("Visit", () => {
    cy.visit("/auth/registration")
   // cy.get(regSelectors.ButtonSignUp).contains("Sign Up")
  })

  it("Validate RegistrationPage", () => {
    cy.get(regSelectors.ButtonSignUp).contains("Sign Up")
    cy.get(regSelectors.Text).contains("Do you have an account?")
  })

  it("Should register a new user with unique data", () => {
      const timestamp = Date.now()
      const username = `newuser_${timestamp}`
      const email = `newuser_${timestamp}@example.com`
      const password = 'password123'

      cy.get(regSelectors.Name).clear().type(username)
      cy.get(regSelectors.Mail).clear().type(email)
      cy.get(regSelectors.Password).clear().type(password)
      cy.get(regSelectors.Password2).clear().type(password)
      cy.get(regSelectors.ButtonSignUp).click()
  })
   
  
  it("Validation error that user already exist", () => {

    cy.get(regSelectors.Name).clear().type("turpicrypto")
    cy.get(regSelectors.Mail).clear().type("turpicrypto@gmail.com")
    cy.get(regSelectors.Password).clear().type("11111111")
    cy.get(regSelectors.Password2).clear().type("11111111")
    cy.get(regSelectors.ButtonSignUp).click()
    cy.get(regSelectors.RegError).contains("User with this email is already exist")
})

  it("Registration with blank fields", () => {
    cy.get(regSelectors.ButtonSignUp).click()
    cy.get(regSelectors.RegError)
      .contains("Required field to fill in")
      .and("have.css", "color", "rgb(255, 0, 0)")
  })

  it("Registration with incorrect email format", () => {
    cy.wrap(regTestData.invalidEmail).each(($item, index) => {
      cy.get(regSelectors.Name).clear().type("TestUser")
      cy.get(regSelectors.Mail).clear().type($item)
      cy.get(regSelectors.Password).clear().type("123456")
      cy.get(regSelectors.Password2).clear().type("123456")
      // If it's the first iteration, click the "SignUp" button
      if (index === 0) {
        cy.get(regSelectors.ButtonSignUp).click()
      }
      else {
        cy.get(regSelectors.RegError).contains("Invalid email format")
        cy.get(regSelectors.ButtonSignUp).should("be.disabled")
      }
    })
  })

  it("Registration with incorrect userName format", () => {
    cy.wrap(regTestData.invalidName).each(($item, index) => {
      cy.get(regSelectors.Name).clear().type($item)
      cy.get(regSelectors.Mail).clear().type("testAAAAA@mail.com")
      cy.get(regSelectors.Password).clear().type("123456")
      cy.get(regSelectors.Password2).clear().type("123456")
      if (index === 0) {
        cy.get(regSelectors.ButtonSignUp).click()
      }
      else {
        // Check for specific error messages based on the invalid user name
        if ($item.length < 6) {
          cy.get(regSelectors.RegError).contains(
            "Username must be longer than or equal to 6 characters"
          )
          cy.get(regSelectors.ButtonSignUp).should("be.disabled")
        } 
        else if ($item.includes(" ")) {
          cy.get(regSelectors.RegError).contains("* Invalid username format")
          cy.get(regSelectors.ButtonSignUp).should("be.disabled")
        }
        else if ($item.length > 30) {
          cy.get(regSelectors.RegError).contains("Username must be shorter than or equal to 30 characters")
          cy.get(regSelectors.ButtonSignUp).should("be.disabled")
        }
      }
  })
})

  it("Registration with incorrect pasword format", () => {
    cy.wrap(regTestData.Password).each(($item, index) => {
      cy.get(regSelectors.Name).clear().type("TestUser")
      cy.get(regSelectors.Mail).clear().type("testAnna123@mail.com")
      cy.get(regSelectors.Password).clear().type($item)
      cy.get(regSelectors.Password2).clear().type($item)
      if (index === 0) {
        cy.get(regSelectors.ButtonSignUp).click()
      }
      else {
        // Check for specific error messages based on the invalid password
        if ($item.length < 6) {
          cy.get(regSelectors.RegError).contains(
            "Password must be longer than or equal to 6 characters"
          )
          cy.get(regSelectors.ButtonSignUp).should("be.disabled")
        } else if ($item.includes(" ")) {
          cy.get(regSelectors.RegError).contains("*Required field to fill in")
          cy.get(regSelectors.ButtonSignUp).should("be.disabled")
        }
        else if ($item.length > 20) {
          cy.get(regSelectors.RegError).contains("Password must be shorter than or equal to 20 characters")
          cy.get(regSelectors.ButtonSignUp).should("be.disabled")
        }
      }
   
  })

  })
})

