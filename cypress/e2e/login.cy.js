import homePage from "../support/pages/home.page";
import loginData from "../fixtures/login.json";
import dashPage from "../support/pages/dash.page";

describe("Login", () => {
  beforeEach(() => {
    homePage.goToHome();
  });

  it("Deve realizar login com sucesso", () => {
    const user = loginData.perfilGestao;

    homePage.doLogin(user.email, user.password);
    cy.verifyMsgToast("Login realizado com sucesso!");
    dashPage.verifyLoggedUser(user.name);
  });

  it("Não deve logar quando senha inválida", () => {
    const user = { ...loginData.perfilGestao, password: "Teste@123" };

    homePage.doLogin(user.email, user.password);
    homePage.verifyToastMsg("Credenciais inválidas. Verifique seu e-mail e senha.");
  });

  it("Não deve logar quando email inválido", () => {
    const user = { ...loginData.perfilGestao, email: "email@gmail.com" };

    homePage.doLogin(user.email, user.password);
    homePage.verifyToastMsg("Credenciais inválidas. Verifique seu e-mail e senha.");
  });

  it("Não deve logar sem preencher credenciais", () => {
    homePage.submitLogin();
    homePage.verifyMsgError("O campo de e-mail é obrigatório.");
    homePage.verifyMsgError("O campo de senha é obrigatório.");
  });

  it("Verificar mensagem de erro quando formato de e-mail inválido", () => {
    const user = { ...loginData.perfilGestao, email: "emailgmail.com" };

    homePage.doLogin(user.email, user.password);
    homePage.verifyMsgError("Por favor, insira um e-mail válido.");
  });

  it("Quando perfil de usuário diferente de gestão direcionar para fluxo do app.", () => {
    const user = loginData.perfilSalao;

    homePage.doLogin(user.email, user.password);
    homePage.verifyToastMsg("Acesse através do app.");
    cy.verifyPage("app-info", "Acesso pelo APP E2E Burguer");
  });
});
