describe('Check Signup', () => {

    it('Create new account', () => {
    
        cy.viewport(1475, 750)

        cy.visit("https://trydiscs.com/signup")

        cy.get('[data-cy="register-input"]').type("Testcypress@gmail.com");
        cy.get('[data-cy="register-password"]').type("Test1234");
        cy.get('[data-cy="regitser-confirm-password"]').type("Test1234");

        cy.get('.q-pa-none > .q-btn').click();

        //cy.contain('eq', "Username");
        //cy.title().should('eq', 'Username');

        cy.wait(3000)

        cy.get('[data-cy="register-username"]').type('Cypress');
        cy.get(':nth-child(3) > .relative-position > .full-width').type('New York, NY, USA')

        //cy.get(':nth-child(4) > div.row > .q-btn--unelevated');
        


    })

})