/// <reference types="cypress" />

import LoginElements from "./pages/login";
import WellComeElements from "./pages/wellcome";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(user: any, stub?: boolean): Chainable<void>
      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

Cypress.Commands.addAll({
  login(user, stub = true) {
    if (stub) {
      const body = require('../fixtures/login-response.json')[1];
      cy.intercept('POST', 'http://localhost:3000/auth/login', {
        statusCode: 200,
        body
      }).as('stubLogin');
    }

    const wellElements = WellComeElements;
    const loginElements = new LoginElements(user);
    cy.visit('http://localhost:4200/');

    wellElements.loginButton.click();
    loginElements.fillFormValid();
    loginElements.submitButton.click();
  }
});
