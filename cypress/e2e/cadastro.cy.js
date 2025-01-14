import signUpPage from "../support/pages/signup.page";
import homePage from "../support/pages/home.page";
import userData from "../fixtures/user.json";
import loginData from "../fixtures/login.json";

describe("Cadastro de usuário", () => {
  beforeEach(() => {
    homePage.goToHome();
    homePage.goToSignUp();
    signUpPage.checkPage();
  });

  it.only("Deve cadastrar usuário perfil gestão com sucesso", () => {
    const user = userData.user;
    const loginUser = loginData.perfilGestao;

    // Interceptar o cadastro e capturar o ID
    cy.intercept("POST", `${Cypress.env("baseApi")}/user`).as("postUsuario");
    

    // Preencher o formulário e submeter
    signUpPage.fillForm(user);
    signUpPage.selectProfile(user.isGestao);
    signUpPage.submitSignup();
    cy.verifyMsgToast("Cadastro realizado com sucesso!");

    cy.wait('@postUsuario', { timeout: 10000 });

    // Capturar o ID do usuário cadastrado
    cy.captureUserId();

    // Excluir o usuário cadastrado para limpar a base
    cy.get("@userId").then((userId) => {
      cy.deleteUser(loginUser.email, loginUser.password, userId);
    });
  });

  it("Não deve permitir cadastro quando e-mail já cadastrado", () => {
    const user = { ...userData.user, email: "aline.areda@email.com" }; // Sobrescrevendo o email para ser inválido
    signUpPage.fillForm(user);
    signUpPage.selectRadio("Sim");
    signUpPage.aceptTerms();
    signUpPage.submitSignup();

    signUpPage.verifyErrorToast("E-mail já cadastrado.");
  });

  it("Não deve permitir cadastro quando e-mail inválido", () => {
    const user = { ...userData.user, email: "emailinvalido" }; // Sobrescrevendo o email para ser inválido
    signUpPage.fillForm(user);
    signUpPage.selectRadio("Sim");
    signUpPage.aceptTerms();
    signUpPage.submitSignup();

    signUpPage.verifyAlertToast(
      "Preencha todos os campos corretamente antes de prosseguir."
    );
    signUpPage.verifyMsgError(
      "O campo de e-mail é obrigatório e deve estar em um formato válido.",
      1
    );
  });

  it("Não deve permitir cadastro quando CPF inválido", () => {
    const user = { ...userData.user, cpf: "123456789" }; // CPF inválido

    signUpPage.fillForm(user);
    signUpPage.selectRadio("Sim");
    signUpPage.aceptTerms();
    signUpPage.submitSignup();

    signUpPage.verifyMsgError("O CPF informado é inválido.", 3);
  });

  it("Não deve permitir cadastro quando senha e confirmação de senha diferentes", () => {
    const user = { ...userData.user, confirmPassword: "SenhaDiferente@123" };

    signUpPage.fillForm(user);
    signUpPage.selectRadio("Sim");
    signUpPage.aceptTerms();
    signUpPage.submitSignup();

    signUpPage.verifyAlertToast(
      "Preencha todos os campos corretamente antes de prosseguir."
    );
    signUpPage.verifyMsgError("As senhas não coincidem.", 4);
  });

  it("Não deve permitir cadastro sem aceitar os termos", () => {
    const user = { ...userData.user };

    signUpPage.fillForm(user);
    signUpPage.selectRadio("Sim");
    signUpPage.submitSignup();

    signUpPage.verifyCheckboxError(
      "Você deve aceitar os termos para prosseguir."
    );
  });

  it("verificar mensagens para campos obrigatórios", () => {
    signUpPage.submitSignup();

    signUpPage.verifyMsgError(
      "O campo de nome é obrigatório e deve conter nome e sobrenome.",
      0 // Índice da mensagem correspondente
    );
    signUpPage.verifyMsgError(
      "O campo de e-mail é obrigatório e deve estar em um formato válido.",
      1
    );
    signUpPage.verifyMsgError("O campo de WhatsApp é obrigatório.", 2);
    signUpPage.verifyMsgError("O campo de CPF é obrigatório.", 3);
    signUpPage.verifyMsgError(
      "A senha deve conter entre 6 e 15 caracteres, incluindo ao menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
      4
    );
  });
});
