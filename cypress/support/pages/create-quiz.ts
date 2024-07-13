import SharedElements from "./shared";

export default class CreateQuizElements extends SharedElements {
  constructor(public quiz: any) {
    super()
  }

  get inputName() {
    return cy.get('#name-input')
  }

  get alert() {
    return cy.get('.alert')
  }

  get buttonAddOption() {
    return cy.get('#create-quiz-add-option-button')
  }

  get backButton() {
    return cy.get('#create-quiz-back-button-button')
  }

  get submitButton() {
    return cy.get('#create-quiz-submit-button-button')
  }

  public getInputOptionTitle(row: number) {
    return cy.get(`#title-${row}-input`);
  }

  public getRadio(row: number) {
    return cy.get(`:nth-child(${row}) > .ng-dirty > .radio`)
  }

  public fillFormValid() {
    this.inputName.type(this.quiz.name);

    this.quiz.options.forEach((option, index) => {
      this.buttonAddOption.click();
      const inputOption = this.getInputOptionTitle(index);
      inputOption.type(option.title);

      if (!option.correctOptions) return;

      const radio = this.getRadio(index);
      radio.click();
    });
  }

  public generateOptios(amount: number) {
    for (let index = 0; index < amount; index++) this.buttonAddOption.click({ force: true });
  }

  public clearForm() {
    this.inputName.clear(this.quiz.name);

    this.quiz.options.forEach((_, index) => {
      const inputOption = this.getInputOptionTitle(index);
      if (inputOption) inputOption.clear();
    });
  }
}
