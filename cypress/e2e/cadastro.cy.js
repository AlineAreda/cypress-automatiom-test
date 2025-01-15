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

  it("Deve cadastrar usuário perfil gestão com sucesso", () => {
    const user = userData.user;
    const loginUser = loginData.perfilGestao;

    // Interceptar o cadastro e capturar o ID
    cy.intercept("POST", `${Cypress.env("baseApi")}/user`).as("postUsuario");

    signUpPage.fillForm(user);
    signUpPage.selectProfile(user.isGestao);
    signUpPage.submitSignup();
    signUpPage.verifyToastMsg("Cadastro realizado com sucesso!");

    // Capturar o ID do usuário cadastrado
    cy.captureUserId();

    // Excluir o usuário cadastrado para limpar a base
    cy.get("@userId").then((userId) => {
      cy.deleteUser(loginUser.email, loginUser.password, userId);
    });
  });

  it("Não deve permitir cadastro quando e-mail já cadastrado", () => {
    const user = userData.duplicateEmail;
    signUpPage.fillForm(user);
    signUpPage.selectProfile(user.isGestao);
    signUpPage.submitSignup();

    signUpPage.verifyToastMsg("E-mail já cadastrado. Tente usar outro e-mail.");
  });

  it("Não deve permitir cadastro quando e-mail inválido", () => {
    const user = { ...userData.user, email: "emailinvalido.com.br" };

    signUpPage.fillForm(user);
    signUpPage.selectProfile(user.isGestao);
    signUpPage.submitSignup();
    signUpPage.verifyErrorMessage("Por favor, insira um e-mail válido.");
  });

  it("Não deve permitir cadastro quando senha inválida", () => {
    const user = { ...userData.user, password: "senha@123" };

    signUpPage.fillForm(user);
    signUpPage.selectProfile(user.isGestao);
    signUpPage.submitSignup();
    signUpPage.verifyErrorMessage(
      "A senha deve conter entre 8 e 12 caracteres, incluindo ao menos uma letra maiúscula, um número e um caractere especial."
    );
  });

  it("Não deve permitir cadastro quando senha e confirmação de senha diferentes", () => {
    const user = { ...userData.user, confirmPassword: "SenhaDiferente@123" };

    signUpPage.fillForm(user);
    signUpPage.selectProfile(user.isGestao);
    signUpPage.submitSignup();
    signUpPage.verifyErrorMessage("As senhas não coincidem.");
  });

  it("Nome deve ser completo no cadastro", () => {
    const user = { ...userData.user, name: "Teste" };

    signUpPage.fillForm(user);
    signUpPage.selectProfile(user.isGestao);
    signUpPage.submitSignup();
    signUpPage.verifyErrorMessage("Preencha com nome e sobrenome.");
  });

  it("Não deve permitir cadastro quando campos em branco", () => {
    signUpPage.submitSignup();
    signUpPage.verifyErrorMessage("O campo de nome é obrigatório.");
    signUpPage.verifyErrorMessage("O campo de e-mail é obrigatório.");
    signUpPage.verifyErrorMessage("O campo de senha é obrigatório.");
    signUpPage.verifyErrorMessage("Confirme sua senha.");
    signUpPage.verifyErrorMessage("Por favor, selecione o perfil.");
  });
});
