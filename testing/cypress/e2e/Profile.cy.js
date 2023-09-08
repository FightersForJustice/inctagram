describe('Login Page', () => {
  beforeEach('Visit Sign in page', () => {
    cy.visit('auth/login')
    cy.get(':nth-child(3) > .Inputs_input__0eCrr').clear().type('anna_vyalova@yahoo.com')
    cy.get(':nth-child(4) > .Inputs_input__0eCrr').clear().type('8910202')
    cy.get('.Button_button__mwjOx').click()
  })

  it('Profile Settings check positive', () => {
    cy.get('.SideBarLayout_background_container__9aTMC > :nth-child(1) > div > button').click()
    cy.get('.AddAvatar_blocButton__9nHxD > .Button_button__mwjOx').should('exist')
    cy.get('#username').should('have.css', 'writing-mode', 'horizontal-tb').should('have.value', 'AVyalova')
    cy.get('#first-name').clear().type('Anna') // Type text into the first name field
    cy.get('#last-name').clear().type('Vyalova') // Type text into the last name field
    cy.get('#city').clear().type('Bilbao') // Type text into the city field
    cy.get('#date').clear().type('06/18/1984')
    cy.get('.ProfileTabs_form__ou2WA > .Button_button__mwjOx').click()
  })
})
