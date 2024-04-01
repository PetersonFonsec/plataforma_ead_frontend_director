describe('Auth jorney - ', () => {
  describe('Test redirects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    });

    it("should redirect to /login page when click in 'login' button", () => {
      cy.get("#welcome-login-button").click();
      cy.url().should('include', '/entre/login');
    });

    it("should redirect to /cadastrar page when click in 'Cadastre-se' button", () => {
      cy.get("#welcome-register-button").click();
      cy.url().should('include', '/entre/cadastrar');
    });

    it("should redirect to /recuperar-senha page when click in 'Esqueceu a senha ? Clique aqui.' link", () => {
      cy.visit('http://localhost:4200/entre/login');
      cy.get("#login-forget-link").click();
      cy.url().should('include', '/entre/recuperar-senha');
    });

    it("should redirect to /cadastrar page when click in 'Ainda não tem uma conta ? Cadastre-se !' button", () => {
      cy.visit('http://localhost:4200/entre/login');
      cy.get("#login-register-link").click();
      cy.url().should('include', '/entre/cadastrar');
    });

    it("should redirect to /login page when click in 'Já tem uma conta ? Entre!' button", () => {
      cy.visit('http://localhost:4200/entre/cadastrar');
      cy.get("#register-login-link").click();
      cy.url().should('include', '/entre/login');
    });
  });

  describe('login form validations ', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/entre/login')
    });

    it('Should disabled submit button when form is empty', () => {
      cy.get('#login-submit-button').should('be.disabled');
    });

    it('Should disabled submit button when email field is invalid', () => {
      cy.get('#email').type('emailInvalid');
      cy.get('#password').type('password');
      cy.get('#login-submit-button').should('be.disabled');
    });

    it('Should disabled submit button when email field is empty', () => {
      cy.get('#password').type('password');
      cy.get('#login-submit-button').should('be.disabled');
    });

    it('Should disabled submit button when password field is empty', () => {
      cy.get('#email').type('emailInvalid');
      cy.get('#login-submit-button').should('be.disabled');
    });

    it('Should enable submit button when form is valid', () => {
      cy.get('#email').type('email@valid.com');
      cy.get('#password').type('password');
      cy.get('#login-submit-button').should('be.enabled');
    });
  });

  describe('register form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/entre/cadastrar');
    });

    it('Should disabled submit button when form is empty', () => {
      cy.get('#register-submit-button').should('be.disabled');
    });

    it('Should disabled submit button when email field is invalid', () => {
      cy.get('#email').type('emailInvalid');
      cy.get('#password').type('password');
      cy.get('#confirm_password').type('password');
      cy.get('#document_number').type('14190806013');
      cy.get('#register-submit-button').should('be.disabled');
    });

    it('Should disabled submit button when email field is empty', () => {
      cy.get('#password').type('password');
      cy.get('#confirm_password').type('password');
      cy.get('#document_number').type('14190806013');
      cy.get('#register-submit-button').should('be.disabled');
    });

    it('Should disabled submit button when password field is empty', () => {
      cy.get('#email').type('emailInvalid');
      cy.get('#confirm_password').type('password');
      cy.get('#document_number').type('14190806013');
      cy.get('#register-submit-button').should('be.disabled');
    });

    it('Should disabled submit button when "confirm_password" field is empty', () => {
      cy.get('#email').type('email@valid.com');
      cy.get('#password').type('password');
      cy.get('#document_number').type('14190806013');
      cy.get('#register-submit-button').should('be.disabled');
    });

    it('Should disabled submit button when "document_number" field is empty', () => {
      cy.get('#email').type('email@valid.com');
      cy.get('#password').type('password');
      cy.get('#confirm_password').type('password');
      cy.get('#register-submit-button').should('be.disabled');
    });

    it('Should enable submit button when form is valid', () => {
      cy.get('#email').type('email@valid.com');
      cy.get('#password').type('password');
      cy.get('#confirm_password').type('password');
      cy.get('#document_number').type('14190806013');
      cy.get('#register-submit-button').should('be.enabled');
    });

  });
});
