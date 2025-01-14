class Header {
  constructor() {
    this.userGreeting = '[data-testid="user-greeting"]';
  }

  // Verifica usuário logado
  verifyLoggedUser(name) {
    const username = name.split(" ")[0];

    cy.get(this.userGreeting)
      .should("be.visible")
      .and("contain.text", `Olá, ${username}!`);
  }
}

export default new Header(); //exportar a classe Header
