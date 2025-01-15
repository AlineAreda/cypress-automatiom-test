class HomePage {
  //mapear os elementos da página no construtor
  constructor() {
    this.emailInput = "#email";
    this.passwordInput = "#password";
    this.loginButton = "button[type=submit]";
    this.signUpLink = 'a[href="/signup"]';
  }

  //funções da página de home

  goToHome() {
    cy.visit("/");
    //checkpoint
    cy.url().should("include", "/");
    cy.contains("h1", "Faça seu login").should("be.visible");
  }

  goToSignUp() {
    cy.get(this.signUpLink).click();
  }

  fillEmail(email) {
    if (email) {
      cy.get(this.emailInput).clear().type(email);
    }
  }

  fillPassword(password) {
    if (password) {
      cy.get(this.passwordInput).clear().type(password);
    }
  }

  submitLogin() {
    cy.contains(this.loginButton, "Acessar").click();
  }

  doLogin(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submitLogin();
  }

  
  verifyToastMsg(expectedMessage) {
    cy.get(".Toastify__toast-body")
      .should("be.visible")
      .and("have.text", expectedMessage);
  }

  verifyMsgError(expectedMessage) {
    cy.get('[class^="home_errorText"]')
      .should("be.visible")
      .and("contain.text", expectedMessage)
      .and("have.css", "color", "rgb(230, 57, 70)");
  }
}

export default new HomePage();
