# 💻 Projeto exemplo de Automação de Testes E2E em Cypress da aplicação  E2EBurger

Este repositório contém um exemplo de automação de testes de ponta a ponta (E2E) para testar o sistema **E2EBurger** utilizando a ferramenta [Cypress](https://www.cypress.io/) e padrão de design Page Object Model.


## 📋 Descrição

O objetivo deste projeto é exemplificar a criação de um projeto de automação de testes para garantir a qualidade das funcionalidades principais do sistema, testando cenários críticos como login, cadastro, navegação, preenchimento de formulários, e validação de mensagens de erro e sucesso.

Os testes seguem boas práticas de automação e possuem foco em:

- Verificação de fluxo de login;
- Verificação de fluxo de cadastro;
- Validação de mensagens de feedback para o usuário;
- Garantia de funcionalidades essenciais do sistema.
- Github actions

## 🛠️ Tecnologias e Ferramentas

- **Cypress**: Framework para automação de testes de E2E;
- **JavaScript**: Linguagem utilizada nos scripts de teste;
- **Node.js**: Ambiente de execução do JavaScript;
- **Yarn**: Gerenciador de pacotes.


## 🚀 Como Executar o Projeto

###  📌Pré-requisitos

Certifique-se de ter instalado:

- Node.js (v14 ou superior);
- Yarn (opcional, mas recomendado).

### 👨🏻‍💻 Passos para Configuração

 1. Clone o repositório:
 ```bash
	git clone https://github.com/AlineAreda/cy-e2eburger.git 
```
 2. Entrar na pasta do projeto clonado:
 ```bash
	cd cy-e2eburger
```
3. Instale as dependências:
 ```bash
	yarn install
```

### 🤖 Executar os Testes:

-  Para abrir o painel interativo do Cypress:
 ```bash
	yarn cypress open
```

-  Para executar os testes no modo headless:
 ```bash
	yarn cypress run
```


## 🧪 Testes Implementados

### Testes de Login

-   **Deve realizar login com sucesso**:
	-  Preenche os dados de login válidos e verifica a mensagem de sucesso.
	-  Garante que o usuário foi redirecionado corretamente.
        
-   **Não deve logar quando senha inválida**:    
	-  Tenta logar com senha incorreta e valida a mensagem de erro exibida.

-   **Não deve logar quando email inválido**:    
	-  Tenta logar com e-mail incorreto e valida a mensagem de erro exibida.
      
-   **Não deve logar sem preencher credenciais**:
	 - Tenta logar sem preecnher credenciais e valida a mensagem obrigatóriedade dos campos.

-   **Verificar mensagem de erro quando formato de e-mail inválido**:    
	-  Tenta logar com e-mail em formato incorreto e valida a mensagem de erro exibida.   

-   **Quando perfil de usuário diferente de gestão direcionar para fluxo do app.**:
	 -  Tenta logar com perfil salão e direciona para página de info para fluxo do app. 

      ### Demonstração 
    [Testes de Login](https://github.com/user-attachments/assets/f5cd9623-b25d-4030-9159-9f439b55570e)


### Testes de Cadastro

-   **Deve cadastrar usuário perfil gestão com sucesso**:
	-  Preenche os dados de cadastro válidos e verifica a mensagem de sucesso.
	-  Garante que o usuário foi redirecionado corretamente para a página de login.
        
-   **Não deve permitir cadastro quando e-mail já cadastrado**:    
	-  Tenta cadastrar com e-mail já cadastrado e valida a mensagem de erro exibida.

-   **Não deve permitir cadastro quando e-mail inválido**:    
	-  Tenta cadastrar com e-mail incorreto e valida a mensagem de erro exibida.
      
-   **Não deve logar sem preencher credenciais**:
	 - Tenta logar sem preecnher credenciais e valida a mensagem obrigatóriedade dos campos.

-   **Não deve permitir cadastro quando senha inválida**:    
	-  Tenta cadastrar com senha fora dos requisitos especificados e valida a mensagem de erro exibida.   

-   **Não deve permitir cadastro quando senha e confirmação de senha diferentes**:
	 -  Tenta cadastrar com senhas divergentes e valida a mensagem de erro exibida.   

-   **Nome deve ser completo no cadastro**:
	 -  Tenta cadastrar sem sobrenome e valida a mensagem de erro exibida.

-   **Não deve cadastrar sem preencher campos obrigatórios**:
	 - Tenta cadastrar sem preecnher campos obrigatórios e valida as mensagens  obrigatóriedade dos campos			  			  
    
      ### Demonstração 
    [Testes de Cadastro](https://github.com/user-attachments/assets/fbfa5996-3448-4abc-85ce-4ed5976bb4bc)
    
    

## 📦 Dependências Principais

As principais dependências do projeto são:

-   [Cypress](https://www.cypress.io/): Framework de testes.
-   [Yarn](https://yarnpkg.com/): Gerenciador de pacotes.



##  📂 Estrutura do Projeto

A organização do projeto segue a estrutura padrão recomendada pelo Cypress:

 ```bash
cy-e2eburguer/
├── cypress/
│   ├── e2e/                   # Arquivos de testes E2E
│   ├── fixtures/              # Arquivos de dados fictícios (fixtures)
│   ├── support/               # Comandos personalizados e configurações adicionais
├── cypress.config.js          # Arquivo de configuração do Cypress
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto

	
```



##  🚀 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## 📌 Notas Gerais
Feito com ❤️ por [Aline Areda](https://github.com/AlineAreda) 😊

