describe('Riot Tests', () => {

    before(() => {
        cy.visit("/")
    });
    
    context("Links",()=>{
        it.skip('Click all links', () => {
            cy.get(".logo").click()
            cy.get(".share").click()
            cy.get("footer div a").each(($el)=>{
                cy.wrap($el).click()
            })
        });  
    })   

    context("Text",()=>{
        it('Show h1 text', () => {
            cy.get(".content h1").contains("Valorant")
        });  
    })   

    context('Resolution Mobile', ()=>{

        it('Show Movie Banner in Desktop', () => {
            cy.viewport(1024,700)
            cy.get(".container-main-character").should('be.visible')
        });

        
        it('Hidden Movie Banner in Mobile', () => {
            cy.viewport(1023,700)
            cy.get(".container-main-character").should('not.be.visible')
            
        });
        it('Check Size of Card in desktop', () => {
            cy.viewport(1024,700)
            cy.get(".container-heroes .hero").invoke('width').should('be.lessThan', 175).and("be.greaterThan",165)
            cy.get(".container-heroes .hero").invoke('height').should('be.lessThan', 175).and("be.greaterThan",165)
        });
        
        it('Check Size of Card in Mobile', () => {
            cy.viewport(1023,700)
            cy.get(".container-heroes .hero").invoke('width').should('be.lessThan', 185).and("be.greaterThan", 175)
            cy.get(".container-heroes .hero").invoke('height').should('be.lessThan', 165).and("be.greaterThan",155)
        });

        it('Flex-direction of Cards in Desktop', () => {
            cy.viewport(1024,700)
            cy.get('.container-heroes').should('have.css', 'flex-direction', 'row')
        });
        
        it('Flex-direction of Cards in Mobile', () => {
            cy.viewport(1023,700)
            cy.get('.container-heroes').should('have.css', 'flex-direction', 'column')
        });
        
    })
})