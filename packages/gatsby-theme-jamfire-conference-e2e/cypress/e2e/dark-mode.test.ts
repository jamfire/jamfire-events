/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe(`Interact with Dark Mode`, () => {
  it(`Visit homepage`, () => {
    cy.visit(`/`).assertRoute(`/`)
  })

  it(`Check for Light Mode`, () => {
    cy.get(`.dark-mode input[type="checkbox"]`).should(`not.be.checked`)

    // cy.get('body')
    //   .should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it(`Toggle to Dark Mode`, () => {
    cy.get(`.dark-mode`).click()

    cy.get(`.dark-mode input[type="checkbox"]`).should(`be.checked`)

    // cy.get('body')
    //   .should('have.css', 'background-color', 'rgb(60, 64, 67)')
  })

  it(`Toggle back to Light Mode`, () => {
    cy.get(`.dark-mode`).click()

    cy.get(`.dark-mode input[type="checkbox"]`).should(`not.be.checked`)

    // cy.get('body')
    //   .should('have.css', 'background-color', 'rgb(60, 64, 67)')
  })
})
