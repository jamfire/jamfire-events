describe(`Smoke Test`, function () {
  it(`Site loads`, function () {
    cy.visit(`/`).assertRoute(`/`)
    cy.visit(`/events/`).assertRoute(`/events/`)
    cy.visit(`/event/demo/`).assertRoute(`/event/demo/`)
    cy.visit(`/dashboard`).assertRoute(`/`)
  })
})
