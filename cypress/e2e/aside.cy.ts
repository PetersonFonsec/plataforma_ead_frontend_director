
describe("Aside redirects - ", () => {
  const usuarios = require('../fixtures/usuarios.json');

  before(() => {
    cy.login(usuarios);
  });


  it("Should be in home page", () => {
    cy.url().should('include', '/area-logada/home');
  });

  // it("Should show jumbotron profile", () => { });

  // it("Should show jumbotron wellcome", () => { });

  // it("Should open", () => { });
})
