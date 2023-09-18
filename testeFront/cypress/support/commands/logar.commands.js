let inputNome = "#user-name";
let inputSenha = "#password";
let btnLogin = "#login-button";

Cypress.Commands.add('logar', (nome, senha) => {

    cy.get(inputNome).type(nome)
    cy.get(inputSenha).type(senha)
    cy.get(btnLogin).click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.contains('Swag Labs').should('be.visible')
})

Cypress.Commands.add('logarInvalido', (nome, senha) => {

    cy.get(inputNome).type(nome)
    cy.get(inputSenha).type(senha)
    cy.get(btnLogin).click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
})