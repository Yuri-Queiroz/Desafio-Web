describe('login', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('CT 001 - Realizar Login com sucesso', () => {
        
        cy.fixture('login.json').then(dados => {
            cy.logar(dados.User[0].usuario, dados.User[0].senha)
        })
    })

    it('CT 002 - Realizar Login com nome de usuário não cadastrado', () => {
        
        cy.fixture('login.json').then(dados => {
            cy.logarInvalido(dados.User[1].usuario, dados.User[1].senha)
        })
    })
})