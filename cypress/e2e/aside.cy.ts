describe("Aside redirects - ", () => {
  const usuarios = require('../fixtures/usuarios.json');

  beforeEach(() => {
    cy.login(usuarios[0]);
  });

  it("Should be in home page", () => {
    cy.url().should('include', '/student');
  });
})
