import './actions/asserts.actions'


/**
 * Captura o ID do usuário criado durante o cadastro via intercept.
 * @param {string} aliasName - Nome do alias para salvar o ID do usuário
 */
Cypress.Commands.add('captureUserId', (aliasName = 'userId') => {
  cy.wait('@postUsuario').then((interception) => {
    const { body } = interception.response;
    expect(interception.response.statusCode).to.eq(201); // Valida que o status retornado é 201
    cy.wrap(body.id).as(aliasName); // Salva o ID do usuário no alias
    cy.log(`ID do usuário capturado: ${body.id}`); // Loga o ID no console
  });
});

/**
 * Realiza o login via API e retorna o token.
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 */
Cypress.Commands.add('getAuthToken', (email, password) => {
  const apiUrl = Cypress.env('baseApi'); // Obtém a URL base da API
  cy.request({
    method: 'POST',
    url: `${apiUrl}/session`, // URL base + endpoint de login
    body: { email, password },
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200); // Valida o sucesso da requisição
    const { token } = response.body; // Captura o token do corpo da resposta
    cy.wrap(token).as('authToken'); // Salva o token em um alias para reutilização
    // cy.log(`Token capturado: ${token}`); // Loga o token no console
  });
});

/**
 * Exclui o usuário via API utilizando o token de autenticação.
 * @param {string} userId - ID do usuário a ser excluído
 * @param {string} token - Token de autenticação
 */
Cypress.Commands.add('deleteUserById', (userId, token) => {
  const apiUrl = Cypress.env('baseApi'); // Obtém a URL base da API
  cy.request({
    method: 'DELETE',
    url: `${apiUrl}/user/delete`, // URL base + endpoint para exclusão do usuário
    qs: { user_id: userId }, // Parâmetros na query string
    headers: {
      Authorization: `Bearer ${token}`, // Token de autenticação no cabeçalho
    },
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(204); // Valida que o status de exclusão é 204
    cy.log(`Usuário com ID ${userId} excluído com sucesso.`); // Loga a exclusão
  });
});

/**
 * Realiza o login via API para obter o token e excluir o usuário especificado.
 * @param {string} email - Email do usuário para login
 * @param {string} password - Senha do usuário para login
 * @param {string} userId - ID do usuário a ser excluído
 */
Cypress.Commands.add('deleteUser', (email, password, userId) => {
  // Realiza o login para obter o token
  cy.getAuthToken(email, password).then(() => {
    // Acessa o token gerado na `getAuthToken`
    cy.get('@authToken').then((token) => {
      // Exclui o usuário utilizando o token capturado
      cy.deleteUserById(userId, token);
    });
  });
});
