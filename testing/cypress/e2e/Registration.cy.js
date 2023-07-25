const regTestData = require("../fixtures/regTestData.json")
const regSelectors = require("../fixtures/registrationSelectors.json")
const regDummyData = require("../fixtures/regDammyData.json")

describe("Registration Page", () => {
  beforeEach("Visit", () => {
    cy.visit("/auth/registration")
    cy.get(regSelectors.ButtonSignUp).contains("Sign Up")
  })

  it("Validate RegistrationPage", () => {
    cy.get(regSelectors.ButtonSignUp).contains("Sign Up")
    cy.get(regSelectors.Text).contains("Do you have an account?")
  })


  it("Registration with blank fields", () => {
    cy.get(regSelectors.ButtonSignUp).click()
    cy.get(regSelectors.RegError)
      .contains("Required field to fill in")
      .and("have.css", "color", "rgb(255, 0, 0)")
  })

  it("Registration with incorrect email format", () => {
    cy.wrap(regTestData.invalidEmail).each(($item, index) => {
      cy.get("[name = userName]").clear().type("TestUser")
      cy.get("[name = email]").clear().type($item)
      cy.get("[name = password]").clear().type("123456")
      cy.get("[name = password2]").clear().type("123456")
      // If it's the first iteration, click the "SignUp" button
      if (index === 0) {
        cy.get(regSelectors.ButtonSignUp).click()
      }
      if (index > 0) {
        cy.get(regSelectors.ButtonSignUp).should("be.disabled")
      } else {
        cy.get(regSelectors.RegError).contains("Invalid email format")
      }
    })
  })
  it("Registration with incorrect userName format", () => {
    cy.wrap(regTestData.invalidName).each(($item, index) => {
      cy.get("[name = userName]").clear().type("TestUser")
      cy.get("[name = email]").clear().type("test@mail.com")
      cy.get("[name = password]").clear().type("123456")
      cy.get("[name = password2]").clear().type("123456")
      if (index === 0) {
        cy.get(regSelectors.ButtonSignUp).click()
      }
      if (index > 0) {
        cy.get(regSelectors.ButtonSignUp).should("be.disabled")
      } else {
        // Check for specific error messages based on the invalid user name
        if ($item.length < 6) {
          cy.get(regSelectors.RegError).contains(
            "Username must be longer than or equal to 6 characters"
          )
        } else if ($item.includes(" ")) {
          cy.get(regSelectors.RegError).contains("* Invalid username format")
        }
        else if ($item.length > 30) {
          cy.get(regSelectors.RegError).contains("Username must be shorter than or equal to 30 characters")
        }
      }

      it("Password validation", () => {})
    })
  })

  it("Registration with incorrect pasword format", () => {
    cy.wrap(regTestData.Password).each(($item, index) => {
      cy.get("[name = userName]").clear().type("TestUser")
      cy.get("[name = email]").clear().type("test@mail.com")
      cy.get("[name = password]").clear().type($item)
      cy.get("[name = password2]").clear().type($item)
      if (index === 0) {
        cy.get(regSelectors.ButtonSignUp).click()
      }
      if (index > 0) {
        cy.get(regSelectors.ButtonSignUp).should("be.disabled")
      } else {
        // Check for specific error messages based on the invalid password
        if ($item.length < 6) {
          cy.get(regSelectors.RegError).contains(
            "Password must be longer than or equal to 6 characters"
          )
        } else if ($item.includes(" ")) {
          cy.get(regSelectors.RegError).contains("*Required field to fill in")
        }
        else if ($item.length > 20) {
          cy.get(regSelectors.RegError).contains("Password must be shorter than or equal to 20 characters")
        }
      }
   
  })

  })

})
