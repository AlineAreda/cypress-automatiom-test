import header from './components/header';

class DashPage {
  constructor() {
    this.header = header;
    this.titleSelector = 'h1';
    this.expectedTitle = 'Nossos cursos';
  }

  // Verifica a URL da página de dashboard
  verifyUrlPage() {
    cy.url().should('include', '/dashboard');
  }

  // Verifica se a página contém o título correto
  assertPageTitle() {
    cy.contains(this.titleSelector, this.expectedTitle).should('be.visible');
  }

  // Método combinado para validar usuário logado no dashboard
  verifyLoggedUser(name) {
    this.verifyUrlPage();
    this.header.verifyLoggedUser(name)
  }
}

export default new DashPage();
