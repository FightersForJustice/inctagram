import { faker } from '@faker-js/faker'

const serverId = Cypress.env('serverId')
const id = faker.string.numeric(2)
const emailAddress = `user${id}@${serverId}.mailosaur.net`

// user that doesn't confirm registration
const email = `user10@${serverId}.mailosaur.net`

const userName = faker.word.noun(7)
const userPassword = faker.internet.password({ length: 7, pattern: /\w/ })

let confirmLink
let token

describe('Email testing with mailosaur', () => {
  before('Registration', () => {
    cy.request({
      method: 'POST',
      url: 'https://inctagram.net/api/v1/auth/registration',
      body: {
        userName: userName,
        email: emailAddress,
        password: userPassword,
      },
    }).then((res) => {
      expect(res.status).to.eq(204)
    })
  })

  it('Check finish registration email', () => {
    cy.mailosaurGetMessage(serverId, {
      sentTo: emailAddress,
    }).then((message) => {
      expect(message.subject).to.equal('Finish registration')
      confirmLink = message.html.links[0].href
      expect(message.html.links[0]).to.exist
      expect(message.html.links[0].text).to.contains('Set up your account')

      const parser = new DOMParser(message.html.body)
      const parseDoc = parser.parseFromString(message.html.body, 'text/html')
      const title = parseDoc.querySelector('h2')

      const text = parseDoc.querySelector('p')
      expect(title.textContent).to.be.eql('Verify your email address')
      expect(text.textContent).to.contain(
        'Thanks for joining. Please click the button below and set up your account. It takes less than a minute.'
      )
    })
  })

  it('Confirm the registration', () => {
    cy.confirmCode(confirmLink).then((code) => {
      cy.request({
        method: 'POST',
        url: 'https://inctagram.net/api/v1/auth/registration-confirmation',
        body: {
          confirmationCode: code,
        },
      })
        .then((res) => {
          expect(res.status).to.eq(204)
        })
        .then('Log in after conformation registration', () => {
          cy.request({
            method: 'POST',
            url: 'https://inctagram.net/api/v1/auth/login',
            body: {
              email: emailAddress,
              password: userPassword,
            },
          }).then((res) => {
            token = res.body.accessToken
            expect(res.status).to.eq(200)
          })
        })
    })
  })

  it('Resend conformation code to email', () => {
    cy.request({
      method: 'POST',
      url: 'https://inctagram.net/api/v1/auth/registration-email-resending',
      body: {
        email: email,
        baseUrl: 'https://inctagram.net/auth/failed',
      },
    })
      .then((res) => {
        expect(res.status).to.eq(204)
      })
      .then('To check resending email for confarmation registration', () => {
        cy.mailosaurGetMessage(serverId, {
          sentTo: email,
        }).then((message) => {
          expect(message.subject).to.equal('Finish registration')
        })
      })
  })

  after('Delete user', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://inctagram.net/api/v1/users/profile',
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })
})
