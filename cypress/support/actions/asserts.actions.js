Cypress.Commands.add("verifyMsgToast", (expectedMessage) => {
  cy.get(".Toastify__toast-body")
    .should("be.visible")
    .and("have.text", expectedMessage);
});

Cypress.Commands.add("verifyPage", (route, titlePage) => {
  cy.url().should("include", `${route}`);
  cy.contains("h1", titlePage);
});
