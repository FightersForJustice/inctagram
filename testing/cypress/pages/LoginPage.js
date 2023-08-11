export class LoginPage {
  elements = {
    emailField: () => cy.get(':nth-child(1) > input'),
    passwordField: () => cy.get(':nth-child(2) > input'),
    loginButton: () => cy.get('.Buttons_mainButton__z1kxd'),
    registrationLink: () => cy.get('.LoginForm_SignUp__HdCNz'),
    forgotPasswordLink: () => cy.get('.LoginForm_forgot_password_link__2xS_j'),
    blankEmailMess: () => cy.get(':nth-child(1) > .LoginForm_errorText__xRtll'),
    blankPasMes: () => cy.get(':nth-child(2) > .LoginForm_errorText__xRtll'),
    errorMesLogin: () => cy.get(''),
  }
  login(userEmail, userPassword) {
    this.elements.emailField().type(userEmail)
    this.elements.passwordField().type(userPassword)
    this.elements.loginButton().click()
  }
}
