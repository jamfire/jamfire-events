import "@testing-library/cypress/add-commands";
import "./commands";

Cypress.Commands.add(`assertRoute`, (route) => {
	cy.url().should(`equal`, `${window.location.origin}${route}`);
});
