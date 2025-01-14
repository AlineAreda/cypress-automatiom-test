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

  verifyMsgError(expectedMessage, index = 0) {
    cy.get('[class^="signup_inputWrapper"]') // Seleciona o contêiner de entrada
      .eq(index) // Seleciona o índice específico do campo
      .parent() // Navega para o contêiner pai
      .find('[class^="signup_errorText"]') // Encontra o elemento da mensagem de erro
      .should("be.visible") // Verifica se está visível
      .and("contain.text", expectedMessage) // Verifica se contém o texto esperado
      .and("have.css", "color", "rgb(255, 0, 0)"); // Verifica se a cor é vermelha
  }

  verifyCheckboxError(expectedMessage) {
    cy.get('[class^="signup_checkboxErrorText"]')
      .should("be.visible")
      .and("contain.text", expectedMessage)
      .and("have.css", "color", "rgb(255, 0, 0)");
  }
}

export default new SignUpPage();
