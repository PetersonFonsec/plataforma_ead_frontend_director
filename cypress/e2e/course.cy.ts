describe("Curse jorney - ", () => {
  const [_, usuarioComRegistros] = require('../fixtures/usuarios.json');
  const [colegioComCurso, colegioSemCurso] = require('../fixtures/college.json');

  beforeEach(() => {
    cy.login(usuarioComRegistros).createNewCollege(colegioComCurso);
    cy.visit(`http://localhost:4200/area-logada/college/${colegioComCurso.id}`);
  });

  it("the form must be previously filled out", () => {
  });
});
