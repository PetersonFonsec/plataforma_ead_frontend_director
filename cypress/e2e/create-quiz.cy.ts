import CreateQuizElements from "../support/pages/create-quiz";

describe("Create Quiz - ", () => {
  const [usuarioSemRegistros, UsuarioComRegistros] = require('../fixtures/usuarios.json');
  const quiz = require('../fixtures/create-quiz.json');
  const quizElements = new CreateQuizElements(quiz);

  beforeEach(() => {
    cy.login(UsuarioComRegistros);
    cy.wait(300);
    cy.visit(`http://localhost:4200/area-logada/course/1/quiz`);
  })

  describe("Validade Form ", () => {
    xit("Should disabled submit button when form is invalid", () => {
      quizElements.fillFormValid();
      quizElements.clearForm();
      quizElements.submitButton.should('be.disabled');
    });

    xit("Should enabled submit button when form is valid", () => {
      quizElements.fillFormValid();
      quizElements.submitButton.should('be.enabled');
    });

    xit("should not allow create more then five options", () => {
      quizElements.generateOptios(7);
      quizElements.buttonAddOption.should('be.disabled');
    });

    xit("should not allow create quiz when all options is not complete", () => {
      quizElements.fillFormValid();
      quizElements.getInputOptionTitle(1).clear();
      quizElements.submitButton.should('be.disabled');
    });
  });

  describe("Validade Form ", () => {
    it("Should disabled submit button when form is invalid", () => {
      quizElements.fillFormValid();
      quizElements.submitButton.click();
    });
  });
});
