# 💻 Projeto exemplo de Automação de Testes E2E em Cypress da aplicação E2EBurger

Este repositório contém um exemplo de automação de testes de ponta a ponta (E2E) para testar o sistema **E2EBurger** utilizando a ferramenta [Cypress](https://www.cypress.io/) e padrão de design Page Object Model.

## 📋 Descrição

O objetivo deste projeto é exemplificar a criação de um projeto de automação de testes para garantir a qualidade das funcionalidades principais do sistema, testando cenários críticos como login, cadastro, navegação, preenchimento de formulários, e validação de mensagens de erro e sucesso.

Os testes seguem boas práticas de automação e possuem foco em:

-   ✅ Verificação de fluxo de login;
    
-   ✅ Verificação de fluxo de cadastro;
    
-   ✅ Validação de mensagens de feedback para o usuário;
    
-   ✅ Garantia de funcionalidades essenciais do sistema;
    
-   ✅ Execução automática via **GitHub Actions**;
    
-   ✅ Publicação de relatórios no **GitHub Pages**.
    

## 🛠️ Tecnologias e Ferramentas

-   **Cypress**: Framework para automação de testes de E2E;
    
-   **JavaScript**: Linguagem utilizada nos scripts de teste;
    
-   **Node.js**: Ambiente de execução do JavaScript;
    
-   **Yarn**: Gerenciador de pacotes;
    
-   **GitHub Actions**: Automatização dos testes e geração de relatórios;
    
-   **GitHub Pages**: Hospedagem dos relatórios de testes.
    

## 🚀 Como Executar o Projeto

### 📌 Pré-requisitos

Certifique-se de ter instalado:

-   Node.js (v14 ou superior);
    
-   Yarn (opcional, mas recomendado).
    

### 👨🏻‍💻 Passos para Configuração

1.  Clone o repositório:
    
    ```
    git clone https://github.com/AlineAreda/cy-e2eburger.git
    ```
    
2.  Entre na pasta do projeto clonado:
    
    ```
    cd cy-e2eburger
    ```
    
3.  Instale as dependências:
    
    ```
    yarn install
    ```
    

### 🤖 Executar os Testes:

-   Para abrir o painel interativo do Cypress:
    
    ```
    yarn cypress open
    ```
    
-   Para executar os testes no modo headless:
    
    ```
    yarn cypress run
    ```
    

## 📊 Relatórios de Testes

Os testes são executados automaticamente via **GitHub Actions**, e os relatórios são publicados no **GitHub Pages**. Abaixo estão os links para acessar os relatórios de cada navegador testado:

-   🔵 **Google Chrome:**  Ver Relatório
    
-   🟢 **Electron:**  Ver Relatório
    
-   🔴 **Firefox:**  Ver Relatório
    

----------

## 🧪 Testes Implementados

### Testes de Login

-   ✅ **Deve realizar login com sucesso**
    
-   ✅ **Não deve logar quando senha inválida**
    
-   ✅ **Não deve logar quando email inválido**
    
-   ✅ **Não deve logar sem preencher credenciais**
    
-   ✅ **Verificar mensagem de erro quando formato de e-mail inválido**
    
-   ✅ **Quando perfil de usuário diferente de gestão direcionar para fluxo do app**
    

### Demonstração

📌 [Testes de Login](https://github.com/user-attachments/assets/f5cd9623-b25d-4030-9159-9f439b55570e)

----------

### Testes de Cadastro

-   ✅ **Deve cadastrar usuário perfil gestão com sucesso**
    
-   ✅ **Não deve permitir cadastro quando e-mail já cadastrado**
    
-   ✅ **Não deve permitir cadastro quando e-mail inválido**
    
-   ✅ **Não deve permitir cadastro quando senha inválida**
    
-   ✅ **Não deve permitir cadastro quando senha e confirmação de senha diferentes**
    
-   ✅ **Nome deve ser completo no cadastro**
    
-   ✅ **Não deve cadastrar sem preencher campos obrigatórios**
    

### Demonstração

📌 [Testes de Cadastro](https://github.com/user-attachments/assets/fbfa5996-3448-4abc-85ce-4ed5976bb4bc)

----------

## 📦 Dependências Principais

As principais dependências do projeto são:

-   [Cypress](https://www.cypress.io/): Framework de testes.
    
-   [Yarn](https://yarnpkg.com/): Gerenciador de pacotes.
    
-   [GitHub Actions](https://github.com/features/actions): Execução automatizada dos testes.
    
-   [GitHub Pages](https://pages.github.com/): Publicação dos relatórios.
    

----------

## 📂 Estrutura do Projeto

A organização do projeto segue a estrutura padrão recomendada pelo Cypress:

```
cy-e2eburguer/
├── cypress/
│   ├── e2e/                   # Arquivos de testes E2E
│   ├── fixtures/              # Arquivos de dados fictícios (fixtures)
│   ├── support/               # Comandos personalizados e configurações adicionais
├── cypress.config.js          # Arquivo de configuração do Cypress
├── package.json               # Dependências e scripts do projeto
├── .github/workflows/         # Configuração do GitHub Actions
│   ├── cypress_tests.yml      # Workflow para executar e publicar os testes
└── README.md                  # Documentação do projeto
```

----------

## 🚀 Execução Automática via GitHub Actions

Este projeto utiliza **GitHub Actions** para executar os testes automaticamente e publicar os relatórios. O workflow está configurado para:

1.  Rodar os testes em múltiplos navegadores (**Chrome, Firefox e Electron**).
    
2.  Gerar relatórios usando **Mochawesome**.
    
3.  Publicar os relatórios no **GitHub Pages** automaticamente.
    

Caso precise modificar ou reexecutar os testes manualmente, basta acessar a aba **Actions** no GitHub e rodar o workflow manualmente.

----------

## 🚀 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## 📌 Notas Gerais

Feito com ❤️ por [Aline Areda](https://github.com/AlineAreda) 😊
