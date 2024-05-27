/// <reference types="cypress" />

import LoginElements from "./pages/login";

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
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.addAll({
  login(user) {
    cy.intercept('POST', 'http://localhost:3000/auth/login', {
      statusCode: 200,
      body: {
        "email": user.email,
        "name": user.name,
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJwZXRlcnNvbjRAZ21haWwuY29tIiwibmFtZSI6IlBldGVyc29uIiwicGFzc3dvcmQiOiIkMmIkMDgkZGxMVWN0UFo2TnVBSGozd2dKZHBtLjIzU0JmaWl5ZHhSWnA2SGRYMVB4Ly9KNFQ0RGVLMk8iLCJyb2xlIjoiU1RVREVOVCIsImlhdCI6MTcwMTAxMzMxOSwiZXhwIjoxNzAxMDE2OTE5LCJzdWIiOiI5In0.inLlmW6UOAtcheDLJwTrus0So1UZIh-cQlT7_N4TJbU",
        "id": 9
      }
    }).as('stubLogin');

    const loginElements = new LoginElements(user);
    cy.visit('http://localhost:4200/entre/login');
    loginElements.fillFormValid();
    loginElements.submitButton.click();
  }
});
