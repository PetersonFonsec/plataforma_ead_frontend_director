import SharedElements from "./shared";

export default class LessonElements extends SharedElements {
  constructor(public lesson: any) {
    super()
  }

  get inputTitle() {
    return cy.get('#lesson-form-title-input')
  }

  get inputDescription() {
    return cy.get('#lesson-form-description-input')
  }

  get inputRadioUpload() {
    return cy.get('#lesson-form-upload')
  }

  get inputRadioLink() {
    return cy.get('#lesson-form-link')
  }

  get inputUrl() {
    return cy.get('#lesson-form-url')
  }

  get inputUpload() {
    return cy.get('#video-input-upload')
  }

  get inputContent() {
    return cy.get('#lesson-form-content')
  }

  get backButton() {
    return cy.get('#lesson-form-button-back-button')
  }

  get submitButton() {
    return cy.get('#lesson-form-submit-button')
  }


  public fillFormValid() {
  }

  public clearForm() {
  }
}
