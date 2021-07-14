describe(`Interact with Login`, function () {
  it(`Visit homepage and click avatar button`, function () {
    cy.visit(`/`).assertRoute(`/`).get(`#avatar`).click()
  })
  it(`Check for login modal`, function () {
    cy.get(`#login-modal`).should(`be.visible`)
  })
  it(`Click outside login modal`, function () {
    cy.get(`body`).trigger(`mousedown`, { position: `topLeft` }).click()
    cy.get(`#login-modal`).should(`not.exist`)
  })
  it(`Click login button`, function () {
    cy.get(`button.login`).click()
    cy.get(`#login-modal`).should(`be.visible`)
  })
  it(`Check for login email and password errors`, function () {
    cy.get(`button.email-login`).click()
    cy.get(`#login-modal`).contains(`Email is required`)
    cy.get(`#login-modal`).contains(`Password is required`)
    cy.get(`#login-modal input[name=email]`).type(`123`)
    cy.get(`#login-modal input[name=password]`).type(`123`)
    cy.get(`#login-modal`).contains(`Invalid Email`)
    cy.get(`#login-modal`).contains(`Password is too short`)
    cy.get(`#login-modal input[name=email]`).type(`@email.com`)
    cy.get(`#login-modal input[name=password]`).type(`4567890`)
    cy.get(`button.email-login`).click()
    cy.get(`#login-modal`).contains(`There is no user`)
  })
})
