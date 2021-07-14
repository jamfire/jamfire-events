describe(`Interact with Cookies`, function () {
  it(`Check for Cookie Notification`, function () {
    cy.visit(`/`).assertRoute(`/`)
    cy.get(`#cookie-notice`).contains(`Accept`)
    cy.get(`#cookie-notice`).contains(`Manage`)
  })
  it(`Open Cookie Preferences`, function () {
    cy.get(`#cookie-notice`).contains(`Manage`).click()
    cy.get(`button.necessaryCookies`)
  })
  it(`Check Necessary Cookies is enabled`, function () {
    cy.get(`.necessaryCookies-input input`).should(`be.checked`)
  })
  it(`Toggle Analaytics Cookies`, function () {
    cy.get(`button.analyticsCookies`).click()
    cy.get(`.analyticsCookies-input input[type="checkbox"]`).should(`not.be.checked`)
    cy.get(`.analyticsCookies-input`).click()
    cy.get(`.analyticsCookies-input input[type="checkbox"]`).should(`be.checked`)
    cy.get(`.analyticsCookies-input`).click()
    cy.get(`.analyticsCookies-input input[type="checkbox"]`).should(`not.be.checked`)
  })
  it(`Accept and close cookie preferences`, function () {
    cy.get(`#manage-cookies footer button`).click()
    cy.get(`#manage-cookies`).should(`not.exist`)
  })
  it(`Accept cookies`, function () {
    cy.get(`#cookie-notice .accept-cookies`).click()
    cy.get(`#cookie-notice`).should(`not.exist`)
  })
})
