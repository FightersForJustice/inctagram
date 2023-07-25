
const loginSelector = require("../fixtures/loginSelector.json")

describe("Registration Page", () => {
  beforeEach("Visit", () => {
    cy.visit("/")
  })

  it("Validate LoginButton", () => {
    cy.get(loginSelector.ButtonSignIn).contains("Sign In")
  })

  it("Positive login", () => {
    cy.get(':nth-child(1) > input').type("turpicrypto@gmail.com")
    cy.get(':nth-child(2) > input').type("11111111")
  })

})