describe(`Interact with Dark Mode`, function () {
  it(`Visit homepage`, function () {
    cy.visit(`/`).assertRoute(`/`)
  })
  it(`Check for Light Mode`, function () {
    cy.get(`.dark-mode input[type="checkbox"]`).should(`not.be.checked`)
  })
  it(`Toggle to Dark Mode`, function () {
    cy.get(`.dark-mode`).click()
    cy.get(`.dark-mode input[type="checkbox"]`).should(`be.checked`)
  })
  it(`Toggle back to Light Mode`, function () {
    cy.get(`.dark-mode`).click()
    cy.get(`.dark-mode input[type="checkbox"]`).should(`not.be.checked`)
  })
})
