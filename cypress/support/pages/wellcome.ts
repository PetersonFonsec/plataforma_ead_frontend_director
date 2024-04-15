class WellComeElements {
  get cadastroButton() {
    return cy.get("#welcome-register-button-button");
  }

  get loginButton() {
    return cy.get("#welcome-login-button-button");
  }
}

export default new WellComeElements();
