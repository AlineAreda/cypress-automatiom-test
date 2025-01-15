class SignUpPage {
  constructor() {
    this.name = "#signup-name";
    this.email = "#signup-email";
    this.password = '[data-testid="input-password"]';
    this.confirmPassword = '[data-testid="input-confirm-password"]';
    this.isGestao = "#profile-gestao";
    this.isSalao = "#profile-salao";
    this.loginButton = '[data-testid="signup-button"]';
  }

  checkPage() {
    // Verificar se a página de cadastro foi carregada
    cy.url().should("include", "/signup");
    cy.contains("h1", "Crie sua conta").should("be.visible");
  }

  fillForm(user) {
    cy.get(this.name).type(user.name);
    cy.get(this.email).type(user.email);
    cy.get(this.password).type(user.password);
    cy.get(this.confirmPassword).type(user.confirmPassword);
  }

  selectProfile(isGestao) {
    const profile = isGestao ? "gestao" : "salao";

    cy.get(`input[name="profile"][value="${profile}"]`).check({ force: true });
  }

  submitSignup() {
    cy.get(this.loginButton).click();
  }

  verifyErrorMessage(expectedMessage) {
    cy.contains("p.signup_errorText__VbQDD", expectedMessage)
      .should("be.visible")
      .and("have.css", "color", "rgb(230, 57, 70)");
  }


  verifyToastMsg(expectedMessage) {
    cy.get(".Toastify__toast-body")
      .should("be.visible")
      .and("have.text", expectedMessage);
  }
}

export default new SignUpPage();
