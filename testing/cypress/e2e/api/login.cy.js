const users = require('../../fixtures/loginTestData.json')

describe('Login API test', () => {
  function createTestData() {
    const randomNumber = Math.floor(Math.random() * users.length)
    return users[randomNumber]
  }

  let user = createTestData()
  let token
  let bodyCookie

  it('Possitive login', () => {
    cy.log(user)
    cy.request({
      method: 'POST',
      url: 'https://inctagram.net/api/v1/auth/login',
      body: {
        email: user.userEmail,
        password: user.userPassword,
      },
    }).then((res) => {
      token = res.body.accessToken
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('accessToken')
      expect(res.headers).to.have.property('set-cookie')
      bodyCookie = res.headers['set-cookie']
      expect(bodyCookie[0]).to.include('refreshToken')
    })
  })

  it('Login with incorrect email', () => {
    let arr = user.userEmail.split('')
    arr.splice(1, 1)
    let incEmail = arr.join('')
    cy.request({
      method: 'POST',
      url: 'https://inctagram.net/api/v1/auth/login',
      body: {
        email: incEmail,
        password: user.userPassword,
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(401)
      expect(res.body).to.have.property('error')
      expect(res.body).to.have.property('statusCode')
      expect(res.body).to.have.property('messages')
      expect(res.body.error).to.eq('Unauthorized')
      expect(res.body.messages[0].message).to.eq('Authorization error')
    })
  })

  it('Login with incorrect password', () => {
    cy.request({
      method: 'POST',
      url: 'https://inctagram.net/api/v1/auth/login',
      body: {
        email: user.userEmail,
        password: user.userPassword.slice(0, -1),
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(400)
      expect(res.body).to.have.property('error')
      expect(res.body).to.have.property('statusCode')
      expect(res.body).to.have.property('messages')
      expect(res.body.messages[0].message).to.eq('invalid password or email')
    })
  })

  it('Logout', () => {
    cy.request({
      method: 'POST',
      url: 'https://inctagram.net/api/v1/auth/login',
      body: {
        email: user.userEmail,
        password: user.userPassword,
      },
    })
    cy.request({
      method: 'POST',
      url: 'https://inctagram.net/api/v1/auth/logout',
    }).then((res) => {
      expect(res.status).to.eq(204)
    })
  })
})
