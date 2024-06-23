import SharedElements from "./shared";

export default class CollegeElements extends SharedElements {
  constructor(public college: any) {
    super()
  }

  get inputName() {
    return cy.get("#college-name-input");
  }

  get inputPrimaryColor() {
    return cy.get("#college-primary-color-input-color");
  }

  set inputPrimaryColor(color) {
    cy.get("#college-primary-color-input-color")
      .invoke('val', color)
      .trigger('change', { force: true })
  }

  get inputSecundaryColor() {
    return cy.get("#college-secundary-color-input-color");
  }

  set inputSecundaryColor(color) {
    cy.get("#college-secundary-color-input-color")
      .invoke('val', color)
      .trigger('change', { force: true })
  }

  get inputThumb() {
    return cy.get("#college-thumb-input-upload-input-file");
  }

  get inputThumbImage() {
    return cy.get("#college-thumb img.input-upload_preview");
  }

  get updateSubmitButton() {
    return cy.get('#college-form-submit-button')
  }

  get buttonEnabledFields() {
    return cy.get("#college-enabled-button")
  }

  get backButton() {
    return cy.get("#college-back-button")
  }

  get newCourseButton() {
    return cy.get('#college-submit-button-button');
  }

  get alert() {
    return cy.get('#create-college-alert')
  }

}
