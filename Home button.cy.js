
describe("Home page buttons testing", () => {
    it("should navigate to after click relevant pages and then go back to the previous page", () => {

        cy.viewport(1475, 750);

      // Visit the initial page
      cy.visit("https://trydiscs.com/");
  
      //Check explore link
      cy.get('.col-auto > [href="/explore"]').click(); // Ensure to perform the click action
      cy.url().should('include', '/explore'); 
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');
      cy.wait(3000)

      //Check buy link
      cy.get('.col-auto > [href="/buy"]').click();
      cy.url().should('include', '/buy');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/'); 
      cy.wait(3000)

      //Check login link
      cy.get('.col-auto > .q-btn--outline').click();
      cy.url().should('include', '/login');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');
      cy.wait(3000) 

      //Check signup link
      cy.get('.col-auto > .q-btn--unelevated').click();
      cy.url().should('include', '/signup');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');
      cy.wait(3000)  

      //Check quiz link
      cy.get(':nth-child(1) > .trd-text-dark > .q-card').click();
      cy.url().should('include', '/quiz');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');
      cy.wait(3000)

      //Check disc flight matrix link
      cy.get(':nth-child(2) > .trd-text-dark > .q-card').click();
      cy.url().should('include', '/explore?view=graph');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');
      cy.wait(3000)

      //Check oop link
      cy.get(':nth-child(3) > .trd-text-dark > .q-card').click();
      cy.url().should('include', '/explore?oop=true');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');
      cy.wait(3000)

      //Check compare discs link
      cy.get(':nth-child(4) > .trd-text-dark > .q-card').click();
      cy.url().should('include', '/explore?view=table');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');
      cy.wait(3000)

      //Check explore discs link
      cy.get(':nth-child(3) > .container-large > .q-py-md-xl > .text-left > .trd-btn-primary > .cursor-pointer').click();
      cy.url().should('include', '/explore');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');
      cy.wait(3000)

      //Check explore stores link
      cy.get('.container-large.q-px-sm > .q-px-md-xl > .text-left > .trd-btn-primary > .cursor-pointer').click();
      cy.url().should('include', '/buy');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');
      cy.wait(3000)

      //Check take the quiz link
      cy.get('.q-mb-md-lg > .q-btn').click();
      cy.url().should('include', '/quiz');
      cy.go('back');
      cy.url().should('equal', 'https://trydiscs.com/');

    });
  });
  