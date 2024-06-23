describe("Aside redirects - ", () => {
  const usuarios = require('../fixtures/usuarios.json');

  beforeEach(() => {
    cy.login(usuarios);
  });

  it("Should be in home page", () => {
    cy.url().should('include', '/area-logada/home');
  });
})
