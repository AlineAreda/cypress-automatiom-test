import header from './components/header';

class CategoryPage {
  constructor() {
    this.header = header;
    this.categoryName = '[data-testid="input-category"]';
    this.btnSubmit = '[data-testid="cadastrar-button"]';
  }
  // Funções da página de categoria
  checkPage() {
    cy.url().should('include', '/category');
    cy.contains('h1', 'Crie sua conta').should('be.visible');
  }

  fillCategory(category) {
    cy.get(this.categoryName).type(category.categoryName);
  }

  submitCategory() {
    cy.contains(this.btnSubmit, 'Cadastrar').click();
  }
  
  verifySuccessToast(expectedMessage) {
    cy.get('#success-toast')
      .should('be.visible')
      .and('contain.text', expectedMessage);
  }
}
export default CategoryPage;

