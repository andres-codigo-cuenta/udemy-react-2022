describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');
        
        cy.get('[data-cy="first-name-chars-left-count"]')
            .as('charsLeftSpan');

        cy.get('[data-cy="input-first-name"]')
            .as('charsInput');

        cy.get('@charsLeftSpan')
            .then($charsLeftSpan => {
                expect($charsLeftSpan.text()).to.equal('15');
            });

        cy.get('@charsInput').type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@charsInput').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more characters once max is exceeded', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]')
            .as('charsInput');

        cy.get('@charsInput').type('asdasdasdasdasdasdasdasdasdasdasdasdasdasd')
    
        cy.get('@charsInput')
            .should('have.attr', 'value', 'asdasdasdasdasd');
    });
})