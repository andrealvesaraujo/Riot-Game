describe('Riot Tests', () => {

    before(() => {
        cy.visit("/")
    });

    context("Text",()=>{
        it.only('Show h1 text', () => {
            cy.get(".content h1").contains("Valorant")
        });  
    })   
})