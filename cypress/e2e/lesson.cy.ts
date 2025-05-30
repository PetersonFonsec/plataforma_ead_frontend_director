import LessonElements from "../support/pages/lesson";

describe("Lesson jorney - ", () => {
  const [_, __, usuarioComRegistro] = require('../fixtures/usuarios.json');
  const [colegioComCurso] = require('../fixtures/course.json');
  const [lesson] = require('../fixtures/lesson.json');
  const lessonElements = new LessonElements(lesson);

  beforeEach(() => {
    cy.login(usuarioComRegistro);
    cy.wait(100);
    cy.visit(`http://localhost:4200/backoffice/course/${colegioComCurso.id}/lesson/`);
  });

  describe("Form validation", () => {
    it("Should disabled submit button when not has content video or text", () => {
      lessonElements.inputTitle.type(lesson.title);
      lessonElements.inputDescription.type(lesson.description);
      lessonElements.submitButton.should('be.disabled');
    });

    it("Should enabled submit button when form title and something content video or text", () => {
      lessonElements.inputTitle.type(lesson.title);
      lessonElements.inputDescription.type(lesson.description);

      lessonElements.inputRadioLink.click();
      lessonElements.inputUrl.type(lesson.url);

      lessonElements.submitButton.should('be.enabled');
    });

    it("Should enabled submit button when form title and something content video or text", () => {
      lessonElements.inputTitle.type(lesson.title);
      lessonElements.inputDescription.type(lesson.description);

      lessonElements.inputRadioUpload.click();
      lessonElements.inputUpload.selectFile(lesson.file);

      lessonElements.submitButton.should('be.enabled');
    });

    it("Should disabled submit button when form is empty", () => {
      lessonElements.submitButton.should('be.disabled');
    });
  });
});
