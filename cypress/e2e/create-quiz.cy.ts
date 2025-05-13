import CreateQuizElements from "../support/pages/create-quiz";

describe("Create Quiz - ", () => {
  const [_, __, UsuarioComRegistros] = require('../fixtures/usuarios.json');
  const quiz = require('../fixtures/create-quiz.json');
  const quizElements = new CreateQuizElements(quiz);

  beforeEach(() => {
    cy.login(UsuarioComRegistros);
    cy.wait(100);
    cy.visit(`http://localhost:4200/backoffice/course/1/quiz`);
  })

  describe("Validade Form ", () => {
    it("Should disabled submit button when form is invalid", () => {
      quizElements.fillFormValid();
      quizElements.clearForm();
      quizElements.submitButton.should('be.disabled');
    });

    it("should not allow create more then five options", () => {
      quizElements.generateOptios(7);
      quizElements.buttonAddOption.should('be.disabled');
    });

    it("should not allow create quiz when all options is not complete", () => {
      quizElements.fillFormValid();
      quizElements.getInputOptionTitle(1).clear();
      quizElements.submitButton.should('be.disabled');
    });

    it("Should enabled submit button when form is valid", () => {
      quizElements.fillFormValid();
      quizElements.submitButton.should('be.enabled');
    });
  });
});
