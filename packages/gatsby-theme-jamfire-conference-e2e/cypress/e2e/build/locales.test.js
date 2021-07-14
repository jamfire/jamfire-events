describe(`Interact with Locales`, function () {
  it(`Visit the home page and check for Welcome`, function () {
    cy.visit(`/`).assertRoute(`/`)
    cy.get(`main`).contains(`Welcome`)
  })
  it(`Toggle Locale Modal`, function () {
    cy.get(`#language-switcher`).click()
  })
  it(`Select Spanish`, function () {
    cy.get(`.es-locale`).click()
  })
  it(`Check for Bienvenido`, function () {
    cy.get(`main`).contains(`Bienvenido`)
  })
  it(`Toggle back to English`, function () {
    cy.get(`#language-switcher`).click()
    cy.get(`.en-locale`).click()
    cy.get(`main`).contains(`Welcome`)
  })
})
